import {
  Button,
  OutlinedInput,
  FormHelperText,
  FormControl,
} from '@mui/material';
import googleIcon from '../../images/icons/google.svg';
import style from './Auth.module.css';
import { useState, useEffect } from 'react';
import { fetchSignup, fetchSignin } from '../../redux/login/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getVerificationToken,
} from '../../redux/login/auth-selectors';

const inputStyle = {
  width: '250px',
  height: '50px',
  bgcolor: '#F6F7FB',
  borderRadius: '30px',
};

const helperText = {
  color: '#EB5757',
  fontSize: '10px',
  lineHeight: '12px',
  letterSpacing: '0.04em',
};

const helperMessage = {
  fontSize: '10px',
  lineHeight: '12px',
  letterSpacing: '0.04em',
};

const initialFormValuesState = {
  email: '',
  password: '',
  type: '',
};

function Auth() {
  const [formValues, setFormValues] = useState(initialFormValuesState);
  const [formErrors, setFormErrors] = useState({});
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(getError);
  const verificationToken = useSelector(getVerificationToken);

  useEffect(() => {
    if (error) {
      if (error === 400) {
        setFormErrors({ email: 'пользователь с такой почтой не найден' });
      }

      if (error === 401) {
        setFormErrors({ email: 'неправильная почта или пароль' });
      }

      if (error === 409) {
        setFormErrors({ email: 'пользователь с такой почтой уже существует' });
      }
    }
  }, [error]);

  useEffect(() => {
    if (verificationToken) {
      setFormMessage('сообщение с подтверждением отправлено на почту');
    }
  }, [verificationToken]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      if (formValues.type === 'signin') {
        dispatch(
          fetchSignin({
            email: formValues.email,
            password: formValues.password,
          }),
        );
        setFormValues(initialFormValuesState);
        setIsSubmitting(false);
      }
      if (formValues.type === 'signup') {
        dispatch(
          fetchSignup({
            email: formValues.email,
            password: formValues.password,
          }),
        );
        setFormValues(initialFormValuesState);
        setIsSubmitting(false);
      }
    }
  }, [
    dispatch,
    formErrors,
    formValues.email,
    formValues.password,
    isSubmitting,
    formValues.type,
  ]);

  const validate = values => {
    setFormMessage('');
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'это обязательное поле';
    } else if (!regex.test(values.email)) {
      errors.email = 'неверный формат электронной почты';
    }
    if (!values.password) {
      errors.password = 'это обязательное поле';
    } else if (values.password.length < 4) {
      errors.password = 'пароль должен содержать более 4 символов';
    }
    return errors;
  };

  const handleButtonClick = async event => {
    if (event.currentTarget.name === 'signup') {
      setFormValues({ ...formValues, type: 'signup' });
    }

    if (event.currentTarget.name === 'signin') {
      setFormValues({ ...formValues, type: 'signin' });
    }

    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className={style.div}>
      <p className={style.text}>
        Вы можете авторизироваться с помощью Google Account:
      </p>
      <a
        href="http://localhost:3001/auth/google"
        className={style.googleButton}
      >
        <img src={googleIcon} alt="google icon" className={style.icon}></img>
        Google
      </a>
      <p className={style.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <FormControl sx={{ marginBottom: '30px' }}>
        <p className={style.inputText}>Электронная почта:</p>
        <OutlinedInput
          placeholder="your@email.com"
          sx={inputStyle}
          value={formValues.email}
          name="email"
          onChange={handleInputChange}
        />
        <FormHelperText sx={{ ...helperText, margin: '4px 0px 0px' }}>
          {formErrors.email}
        </FormHelperText>
        <FormHelperText sx={helperMessage}>{formMessage}</FormHelperText>
      </FormControl>
      <p className={style.inputText}>Пароль:</p>
      <FormControl sx={{ marginBottom: '40px' }}>
        <OutlinedInput
          placeholder="Пароль"
          value={formValues.password}
          type="password"
          name="password"
          onChange={handleInputChange}
          sx={inputStyle}
        />
        <FormHelperText sx={{ ...helperText, margin: '4px 0px 0px' }}>
          {formErrors.password}
        </FormHelperText>
      </FormControl>
      <div>
        <Button
          color="primary"
          variant="contained"
          sx={{ marginRight: '10px' }}
          onClick={handleButtonClick}
          name="signin"
        >
          Войти
        </Button>
        <Button color="secondary" onClick={handleButtonClick} name="signup">
          Регистрация
        </Button>
      </div>
    </div>
  );
}

export { Auth };

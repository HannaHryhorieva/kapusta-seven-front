import {
  Button,
  OutlinedInput,
  FormHelperText,
  FormControl,
} from '@mui/material';
import style from './Auth.module.css';
import { useState, useEffect } from 'react';

const inputStyle = {
  width: '250px',
  height: '50px',
  bgcolor: '#F6F7FB',
  borderRadius: '30px',
};

const buttonStyle = {
  alignSelf: 'center',
  width: '122px',
  height: '40px',
  marginBottom: '30px',
};

function Auth() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    type: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      if (formValues.type === 'signin') {
        console.log('Войти');
      }
      if (formValues.type === 'signup') {
        console.log('Регистрация');
      }
    }
  }, [formErrors]);

  const validate = values => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Cannot be blank';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    if (!values.password) {
      errors.password = 'Cannot be blank';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
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
      <Button color="secondary" sx={buttonStyle}>
        Google
      </Button>
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
        <FormHelperText sx={{ color: 'red', margin: '4px 0px 0px' }}>
          {formErrors.email}
        </FormHelperText>
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
        <FormHelperText sx={{ color: 'red', margin: '4px 0px 0px' }}>
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

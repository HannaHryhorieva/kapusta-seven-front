import { Button, Typography, OutlinedInput, Box } from '@mui/material';
import style from './Auth.module.css';

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
  return (
    <div className={style.div}>
      <Typography variant="body1">
        <p className={style.text}>
          Вы можете авторизироваться с помощью Google Account:
        </p>
      </Typography>
      <Button color="secondary" sx={buttonStyle}>
        Google
      </Button>
      <Typography variant="body1">
        <p className={style.text}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
      </Typography>
      <span className={style.span}>Электронная почта:</span>
      <OutlinedInput
        placeholder="your@email.com"
        sx={{ ...inputStyle, marginBottom: '30px' }}
      />
      <span className={style.span}>Пароль:</span>
      <OutlinedInput
        placeholder="Пароль"
        sx={{ ...inputStyle, marginBottom: '40px' }}
      />
      <div>
        <Button
          color="primary"
          variant="contained"
          sx={{ marginRight: '10px' }}
        >
          Войти
        </Button>
        <Button color="secondary">Регистрация</Button>
      </div>
    </div>
  );
}

export { Auth };

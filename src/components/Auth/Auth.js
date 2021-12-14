import {
  // AppBar,
  Button,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Typography,
  OutlinedInput,
  Box,
} from '@mui/material';
import { borderRadius } from '@mui/system';

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '40px',
  paddingBottom: '50px',
  paddingLeft: '20px',
  paddingRight: '20px',
  boxShadow: '5px 10px 20px rgba(170, 178, 197, 0.4)',
  width: '300px',
  height: '525px',
  borderRadius: '30px',
};

// const labelStyle = {
//   display: 'flex',
//   flexDirection: 'column',
// };

const inputStyle = {
  width: '250px',
  height: '50px',
  bgcolor: '#F6F7FB',
  borderRadius: '30px',
};

const textStyle = {
  alignSelf: 'center',
};

const buttonStyle = {
  alignSelf: 'center',
  width: '122px',
  height: '40px',
};

function Auth() {
  return (
    <Box sx={boxStyle}>
      <Typography variant="body1" sx={textStyle}>
        Вы можете авторизироваться с помощью Google Account:
      </Typography>
      <Button color="secondary" sx={buttonStyle}>
        Google
      </Button>
      <Typography variant="body1">
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Typography>
      <span>Электронная почта:</span>
      <OutlinedInput placeholder="your@email.com" sx={inputStyle} />
      <span>Пароль:</span>
      <OutlinedInput placeholder="Пароль" sx={inputStyle} />
      <Box>
        <Button color="primary" variant="contained">
          Войти
        </Button>
        <Button color="secondary">Регистрация</Button>
      </Box>
    </Box>
  );
}

export { Auth };

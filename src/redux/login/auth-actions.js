import { createAction } from '@reduxjs/toolkit';
import { token } from '../../api-service/authApi';

export const logoutUser = createAction('user/logout', () => {
  token.unset();

  return {};
});

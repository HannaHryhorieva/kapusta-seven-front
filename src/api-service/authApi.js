import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const token = {
  set(token) {
    console.log(axios.defaults);
    axios.defaults.headers.common['Authorization'] = `${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export async function fetchSignup({ name, email, password }) {
  const { data } = await axios.post(`/auth/signup`, { name, email, password });
  // token.set(data.data.data.verificationToken);
  return data;
}

export async function fetchUser(token) {
  console.log(token);
  const data = await axios.get(`/auth/users/${token}`);
  console.log(data);
  return data;
}

export async function fetchGoogleAuth() {
  const { data } = await axios.get(`/auth/google`);
  return data;
}

export async function fetchGoogleRedirect() {
  const { data } = await axios.get(`/auth/google-redirect`);
  return data;
}

export async function fetchVerify(verificationToken) {
  const { data } = await axios.get(`/auth/verify/${verificationToken}`);
  return data;
}

export async function fetchSignin({ email, password }) {
  const { data } = await axios.post(`/auth/signin`, {
    email,
    password,
  });
  token.set(data.data.token);
  return data;
}

export async function fetchUpdBalance({ idUser, balance }) {
  const { data } = await axios.patch(`/auth/balance/${idUser}`, {
    balance,
  });
  return data.data;
}

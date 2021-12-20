import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
  token.set(data.token);
  return data.data;
}


export async function fetchLogout() {
  const { data } = await axios.post(`/auth/logout`);
  token.unset();
  return data;
}

export async function fetchUpdBalance( balance ) {
  const { data } = await axios.patch(`/auth/balance`, {
    balance
  });
  return data.data;
}

export async function fetchCurrentUser(localToken) {
  token.set(localToken);
  const { data } = await axios.get(`/auth/users/${localToken}`);
  return data.data;
}

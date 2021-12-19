import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRhODk4YzMyMzdhZTM3NTEzYTY5OSIsImlhdCI6MTYzOTk0MDk3OCwiZXhwIjoxNjM5OTQ4MTc4fQ.3imiiXI3RFGiV4BNtWcO45EW7PhdW1-ddsPXHnzS7S0`;
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

export async function fetchLogout() {
  const { data } = await axios.post(`/auth/logout`);
  token.unset();
  return data;
}

export async function fetchUpdBalance({ balance }) {
  const { data } = await axios.patch(`/auth/balance/61bda898c3237ae37513a699`, {
    balance
  });
  return data.data;
}

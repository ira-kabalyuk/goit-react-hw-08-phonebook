import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afd1072f26c3f2139bd1a3.mockapi.io',
})

export const $authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  $authInstance.defaults.headers.common.Authorization = `Bearer ${token}`; // Bearer - формат для бекенду
}

export const signUpRequest = async (formData) => {
  const { data } = await $authInstance.post('/users/signup', formData)
  return data;
};

export const loginRequest = async (formData) => {
  const { data } = await $authInstance.post('/users/login', formData)
  return data;
};

export const refreshRequest = async () => {
  const { data } = await $authInstance.get('/users/current')
  return data;
};

// contacts

export const requestContacts = async () => {
  const { data } = await instance.get(`/contacts/contacts`)
  return data;
};

export const addContactRequest = async (name, phone) => {
  const postData = {
    name, 
    phone,
  };
  
  const { data } = await instance.post('/contacts/contacts', postData);
  return data;
};

export const deleteContactRequest = async (id) => {
  const { data } = await instance.delete(`/contacts/contacts/${id}`);
  return data;
};



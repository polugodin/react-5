import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const deleteUser = id => Axios.delete('/user', { params: { id } });
const putUser = user => Axios.put('/user', user);
const showError = err => console.error(err);

export { getUsers, createUser, deleteUser, putUser, showError };
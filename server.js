const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { getId } = require('./utils');
let { users } = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  const user = req.body;
  user.id = getId();
  users.push(user);
  res.sendStatus(200);
});

app.put('/user', (req, res) => {
  const { id } = req.body;
  const userIndex = users.findIndex(item => item.id === id);
  Object.keys(req.body).forEach(key => {if (key !== "id") users[userIndex][key] = req.body[key]});
  res.sendStatus(200);
});

app.delete('/user', (req, res) => {
  const { id } = req.query;
  users = users.filter(item => item.id !== id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));

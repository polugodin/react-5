const getId = () => {
  let id = '';
  for (let i=0; i<10; i++) {
      id += Math.floor(Math.random()*10);
  }
  return id;
}

module.exports = {getId};
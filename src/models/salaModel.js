const db = require('./db')

let listarSalas = async ()=> {
  let salas= await db.findALL('salas');
  return salas;
};

module.exports = {listarSalas}

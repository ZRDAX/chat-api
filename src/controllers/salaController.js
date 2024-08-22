exports.get = async function () {
  const salaModel = require('../models/salaModel');
  return salaModel.listarSalas();
}

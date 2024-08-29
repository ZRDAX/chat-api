const db = require("./db");

async function registrarUsuario(nick) {
	return await db.insertOne("usuarios", { nick: nick });
}

let buscarUsuario = async (iduser) => {
	return await db.findOne("usuarios", iduser);
};
let alterarUsuario = async (user) => {
	return await db.updateOne("usuarios", user, { _id: user._id });
};

module.exports = { registrarUsuario, buscarUsuario, alterarUsuario };

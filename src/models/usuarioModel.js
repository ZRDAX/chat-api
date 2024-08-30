const db = require("./db");

async function registrarUsuario(nickname) {
	return await db.insertOne("usuarios", { nickname: nickname });
}

let buscarUsuario = async (iduser) => {
	return await db.findOne("usuarios", iduser);
};

let alterarUsuario = async (user) => {
	return await db.updateOne("usuarios", user, { _id: user._id });
};

let removerUsuario = async (iduser) => {
	return await db.deleteOne("usuario", iduser);
};

module.exports = {
	registrarUsuario,
	buscarUsuario,
	alterarUsuario,
	removerUsuario,
};

const usuarioModel = require("../models/usuarioModel");
const token = require("../../util/token");

exports.entrar = async (nick) => {
	let resp = await usuarioModel.registrarUsuario(nick);

	if (resp.insertedId) {
		return {
			idUser: resp.insertedId,
			token: await token.setToken(
				JSON.stringify(resp.insertedId.toString()).replace(/"/g, ""),
				nick,
			),
			nick: nick,
		};
	}
};

exports.sairChat = async (iduser) => {
	let resp = await usuarioModel.removerUsuario(iduser);
	return "Quit chat";
};

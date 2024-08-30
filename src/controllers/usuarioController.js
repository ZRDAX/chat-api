const usuarioModel = require("../models/usuarioModel");
const token = require("../../util/token");

exports.entrar = async (nickname) => {
	let resp = await usuarioModel.registrarUsuario(nickname);

	if (resp.insertedId) {
		return {
			idUser: resp.insertedId,
			token: await token.setToken(
				JSON.stringify(resp.insertedId.toString()).replace(/"/g, ""),
				nickname,
			),
			nickname: nickname,
		};
	}
};

exports.sairChat = async (iduser) => {
	let resp = await usuarioModel.removerUsuario(iduser);
	return "Quit chat";
};

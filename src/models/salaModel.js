const db = require("./db");

let listarSalas = async () => {
	let salas = await db.findALL("salas");
	return salas;
};

let atualizarMensagens = async (sala) => {
	return await db.updateOne("salas", sala, { _id: sala._id });
};

let buscarSala = async (idsala) => {
	return db.findOne("salas", idsala);
};

let buscarUsuario = async (iduser) => {
	return db.findOne("usuarios", iduser);
};

let alterarUsuario = async (user) => {
	return await db.updateOne("usuarios", user, { _id: user._id });
};

let criarSala = async (nome, tipo, senha = null) => {
	const sala = {
		nome: nome,
		tipo: tipo,
		senha: senha,
		msgs: [],
	};
	return await db.insertOne("salas", sala);
};

let buscarMensagens = async (idsala, timestamp) => {
	let sala = await buscarSala(idsala);
	if (sala.msgs) {
		let msgs = [];
		sala.msgs.forEach((msg) => {
			if (msg.timestamp >= timestamp) {
				msgs.push(msg);
			}
		});
		return msgs;
	}
	return [];
};

module.exports = {
	listarSalas,
	atualizarMensagens,
	buscarMensagens,
	buscarUsuario,
	alterarUsuario,
	buscarSala,
	criarSala,
};

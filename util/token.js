const jwt = require("jsonwebtoken");

const checktoken = async (token, id, key) => {
	try {
		return jwt.verify(token, key, (err, decoded) => {
			if (err) {
				return false;
			} else if (decoded) {
				if (decoded.id === id) return true;
			} else {
				return false;
			}
		});
	} catch (err) {
		console.error("Invalid token.", err.message);
		return false;
	}
};

const setToken = async (id, key) => {
	if (id) {
		return jwt.sign({ id }, key, { expiresIn: 28800 });
	}
	return false;
};

module.exports = { setToken, checktoken };

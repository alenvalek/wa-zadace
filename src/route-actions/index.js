const { lista } = require("../dbConfig");

module.exports = {
	dodajBroj: (req, res) => {
		const { broj } = req.params;
		if (!broj) {
			res.status(400).send("Broj mora biti napisan");
		}
		lista.push(broj);
		res.status(200).send(lista);
	},
	dohvatiBroj: (_, res) => {
		let response = "";

		for (let i = 0; i < lista.length; i++) {
			response += ` ${lista[i]}`;
		}
		res.send(response);
	},
};

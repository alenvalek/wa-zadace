// WA 101
const moment = require("moment");

const PORT = 5000;

const app = require("express")();
app.use(require("cors")());

app.get("/", (req, res) => {
	res.send(
		"<h1>Hub</h1> <br> <h3>1. Za trenutni datum posjetite <a href='/datum'>/datum</a></h3> <br> <h3>2. Za vremensku prognozu posjetite <a href='/prognoza'>/prognoza</a></h3>"
	);
});

app.get("/datum", (req, res) => {
	return res.send(`${moment().format("DD.mm.yyyy HH:MM ")}`);
});

app.get("/prognoza", (req, res) => {
	const vrijeme = ["sunčano", "kišovito", "oblačno"];
	return res.send(
		`Danas će biti ${vrijeme[Math.floor(Math.random() * vrijeme.length)]}`
	);
});

// WA 102

const { dohvatiBroj, dodajBroj } = require("./route-actions/");

app.get("/dodaj/:broj", dodajBroj);
app.get("/dohvati", dohvatiBroj);

// WA 104
const { studenti } = require("./dbConfig");

app.get("/studenti", (req, res) => {
	res.send(studenti);
});

app.get("/studenti/first", (req, res) => {
	res.send(studenti[0]);
});

app.get("/studenti/last", (req, res) => {
	res.send(studenti[studenti.length - 1]);
});

app.listen(PORT, () => {
	console.log(`Listening for requests at http://localhost:${PORT}`);
});

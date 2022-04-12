// WA 101

const PORT = 5000;

const app = require("express")();

app.get("/", (req, res) => {
	res.send(
		"<h1>Hub</h1> <br> <h3>1. Za trenutni datum posjetite <a href='/datum'>/datum</a></h3> <br> <h3>2. Za vremensku prognozu posjetite <a href='/prognoza'>/prognoza</a></h3>"
	);
});

app.get("/datum", (req, res) => {
	const curDate = new Date();
	return res.send(
		`${curDate.getDay()}.${curDate.getMonth()}.${curDate.getFullYear()}. ${curDate.getHours()}:${curDate.getMinutes()}`
	);
});

app.get("/prognoza", (req, res) => {
	const vrijeme = ["sunčano", "kišovito", "oblačno"];
	return res.send(
		`Danas će biti ${vrijeme[Math.floor(Math.random() * vrijeme.length)]}`
	);
});

// WA 102

import { dohvatiBroj, dodajBroj } from "./route-actions/";

app.get("/dodaj/:broj", dodajBroj);
app.get("/dohvati", dohvatiBroj);

app.listen(PORT, () => {
	console.log(`Listening for requests at http://localhost:${PORT}`);
});

const PORT = 5000;

const app = require("express")();

app.get("/", (req, res) => {
	res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
	console.log(`Listening for requests at http://localhost:${PORT}`);
});

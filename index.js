const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile("C:/Users/Lion/Desktop/backend lab" + "/index.html");
});

app.get('/greeting/*', (req, res) => {

    res.json({ message: req.params[0] });

});

app.post('/data', function (req, res, next) {
    console.log(req.body.email);
    var x = {};
    x.email = req.body.email;
    x.name = "Alaa";
    res.json(JSON.stringify(x));
});


app.listen(port, () => {
    console.log("app are listening at http://localhost:" + port);
});

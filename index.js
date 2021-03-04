const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({
        msg: "Hello DWFS 54"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

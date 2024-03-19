const express = require("express");
const pg = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "mindfulMates",
  password: "Sep202004",
  port: 5432
});
db.connect();

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post('/create', async (req, res) => {
    const answers = JSON.parse(Object.keys(req.body)[0]);
    console.log(answers);
    db.query("insert into answers (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, score) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 3);",
    Object.values(answers));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
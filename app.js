const { makeArr, searchArrValIndex, searchIndexArr } = require("./script");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/make", (req, res) => {
  const newArr = makeArr(req.body.input_array, 17);
  res.send(newArr);
});

app.get("/query", (req, res) => {
  db.query(
    `SELECT * FROM area
    INNER JOIN area ON sub_area.parentAreaId = area.id
    WHERE area.id = ${req.query.areaId}`,
    (error, result) => res.send(result)
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("not allowed");

      callback(null, false);
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const instance = axios.default.create({
  baseURL: "https://openapi.naver.com",
  headers: {
    "X-Naver-Client-Id": process.env.CLIENT_ID,
    "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
  },
});

app.get("/", (req, res) => {
  res.json("hi");
});

app.get(`/v1/search/book.json`, (req, res) => {
  const { query, sort, start } = req.query;

  const { data } = instance
    .get(`/v1/search/book.json?query=${query}&start=${start}&sort=count`)
    .then((r) => {
      res.json(r.data);
    })
    .catch((r) => {
      res.json(r.response.data);
    });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`on port: ${process.env.PORT}`);
});

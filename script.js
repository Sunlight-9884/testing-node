const exp = require("express");
const body = require("body-parser");
const app = exp();
app.use(body.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send("Calculate =>>>> "+result);
});

app.listen(4000, function () {
  console.log("server is Starting");
});

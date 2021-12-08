const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.get("/", (req, res) => res.render("pages/index"));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/api", function (req, res) {
  res.send({
    status: 200,
    valid: true,
    foo: "bar",
  });
});

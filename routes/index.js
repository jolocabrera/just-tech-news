const router = require("express").Router();

const apiRoute = require("./api");

router.use("/api", apiRoute);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

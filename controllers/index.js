const router = require("express").Router();

const apiRoute = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoute);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

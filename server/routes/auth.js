const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey its authroute");
});

module.exports = router;

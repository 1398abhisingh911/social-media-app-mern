const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey its posts route");
});

module.exports = router;

var express = require('express');
var router = express.Router();
const { getAllTrades, createNewTrade, getSingleTrade, deleteSingleTrade } = require("../controllers/trades");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});
router.post("/trades", createNewTrade);
router.get("/trades", getAllTrades);
router.get("/trades/:id",getSingleTrade);
router.delete("/trades/:id", function(req, res) {
  res.status(405).send('Unauthorized');
} );
router.put("/trades/:id", function(req, res) {
  res.status(405).send('Unauthorized');
} );
router.patch("/trades/:id", function(req, res) {
  res.status(405).send('Unauthorized');
} );

module.exports = router;

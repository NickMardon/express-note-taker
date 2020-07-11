const express = require("express");
const path = require("path");
const router = express.Router();


// Get Request
router.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname,'../db/db.json'))
  });

// // Post Request
// router.get("/api/notes", function(req, res) {
//     return res.send('../db/db.json')
//   });


module.exports = router;


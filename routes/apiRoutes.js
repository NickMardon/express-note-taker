const express = require("express");
const path = require("path");
const fs = require('fs');
const bodyParser = require("body-parser");
const db = require('../db/db.json');
// const app = express();
// MIDDLEWARE
// app.use(bodyParser.json());
const router = express.Router();

// Get Request
router.get("/api/notes",(req, res)=>{
    res.sendFile(path.join(__dirname,'../db/db.json'))
  });

// Post Request
router.post("/api/notes", async (req, res)=>{
  console.log(req.body)
  let note = (req.body);
  let filePath = path.join(__dirname,'../db/db.json');
  fs.readFile(filePath, function (err, data){
    var json = JSON.parse(data)
    console.log(json);
    json.push(note);
    console.log(json);
    let newData = JSON.stringify(json);
    fs.writeFileSync(path.join(__dirname,'../db/db.json'),newData)
  })


})




module.exports = router;


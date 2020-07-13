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
  let note = (req.body);
  let filePath = path.join(__dirname,'../db/db.json');
  fs.readFile(filePath, function (err, data){
    let json = JSON.parse(data)
    json.push(note);
    let newData = JSON.stringify(json);
    fs.writeFileSync(path.join(__dirname,'../db/db.json'),newData)
    res.sendFile(path.join(__dirname,'../db/db.json'))
  })
})

router.delete("/api/notes/:id", async (req, res)=>{
  // console.log(req);
  console.log(req.params.id);
  

})




module.exports = router;


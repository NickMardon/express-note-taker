const express = require("express");
const path = require("path");
const fs = require('fs');
const bodyParser = require("body-parser");
const db = require('../db/db.json');
const router = express.Router();
const filePath = path.join(__dirname,'../db/db.json');

// Get Request
router.get("/api/notes",(req, res)=>{
    res.sendFile(filePath)
  });

// Post Request
router.post("/api/notes", async (req, res)=>{
  let note = (req.body);
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
  let id = req.params.id;
  // fs.readFile(filePath, function (err, data){
  //   let json = JSON.parse(data)
  //   console.log(json);
  //   // let newArr = [];
  //   // for(let i = 0;i<json.length;i++){
  //   //   if (json[i].id !== id){
  //   //     console.log("delete");
        
  //   //   }
  //   // }

  //   // let newArr = json.filter((id,json)=>{
  //   //   if(json.id !== id){
  //   //     return json;
  //   //   }
  //   //   console.log(newArr);
  //   // })
  //   // fs.writeFileSync(path.join(__dirname,'../db/db.json'),newArr)
  //   // res.sendFile(path.join(__dirname,'../db/db.json'))
  // })
})




module.exports = router;


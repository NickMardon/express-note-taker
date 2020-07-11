const express = require("express");
const path = require("path");
const fs = require('fs');
const bodyParser = require("body-parser");
const {Note, deleteNote} = require('./../db/db');
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
   const note = req.body;
   console.log(note);
  });




module.exports = router;


const express = require("express");
const path = require("path");
const router = express.Router();

// ROUTES
router.get("/",(req,res)=>(
    res.sendFile(path.join(__dirname, "../public/index.html"))
));

router.get("/notes",(req,res)=>(
    res.sendFile(path.join(__dirname, "../public/notes.html"))
));

module.exports = router;
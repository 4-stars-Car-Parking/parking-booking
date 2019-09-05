const express = require("express");
const cors = require("cors");

var router = express.Router();


const mongo = require("../db-parking/parkdb")



/////////////////////
router.get('/', (req, res) => {
  res.send("park router");
});


router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

////roaa//////
router.get('/false', (req, res) => {
  mongo.getfalse((result) => {
    res.json(result);
  })
});



/////////roaa
router.put('/false/:isvalid/:status', (req, res) => {

  let isvalid = req.params.isvalid
  // let isvalid = parseInt(req.params.isvalid) 
  let status = JSON.parse(req.params.status)
  console.log("update", isvalid, status);
  console.log("update", typeof isvalid, typeof status)


  mongo.updatepark((result) => {
    res.json(result);
  }, isvalid, status)
});






/////////hala
router.get('/all', (req, res) => {
  ////hala
  mongo.getallpark((result) => {
    res.json(result);
  })
});


module.exports = router;










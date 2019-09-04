const express = require("express");
const cors = require("cors");

var router = express.Router();


const mongo =require ("../db-parking/parkdb")



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
router.put('/false/:isvalid', (req, res) => {

  let isvalid = encodeURIComponent(req.params.isvalid);
  console.log("update",isvalid)

  mongo.updatepark((result) => {
    res.json(result);
  },isvalid)
});






/////////hala
router.get('/all', (req, res) => {
   ////hala
 mongo.getallpark((result) => {
    res.json(result);
  }) 
  });
  











module.exports = router;










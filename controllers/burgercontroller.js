let express = require("express");
 

let router = express.Router();


let burger_data = require("../models/burger.js");

//  routes 
router.get("/", function(req, res) {
  burger_data.all(function(data) {
    let burgerData = {
      burgers: data
    };
res.render("index", burgerDataObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger_data.create([
    " burgers_name"
  ], [
    req.body.burgers_name
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
    let ids = "id " + req.params.id;
  
    burger.update({
      devoured: req.body.devoured
    }, ids, function(result) {
      
      
  if (result.changedRows == 0) {
    
 return 
 res.status(404).end();
 } else {
 res.status(200).end();
 }
    });
  });



module.exports = router;


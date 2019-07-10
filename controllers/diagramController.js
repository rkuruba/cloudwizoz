
 const express = require('express');
const diagramModel = require('../models/diagramModel');
 //mysql testing
// let mysql = require("mysql");
// let connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root2",

//   // Your password
//   password: "root2",
//   database: "cloudwizoz_db"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
// });

 const router = express.Router();

const data = require('../work in progress/layout2/diagramData.js');

router.get('/diagramData', function(request, response) {
  var nodeDataArray = [];
  
  diagramModel.getDiagrams(1, function(err, res) {
    if (err) {
      throw err;
    }
    // Log all results of the SELECT statement
    // console.log(res);
    
    var i;
    for (i = 0; i < res.length; i++) { 
      
      
      
      // console.log(res[i].Zone);
      // nodeDataArray.push('Zone :' + res[i].Zone)
      // console.log(res[i].Type);
      // nodeDataArray.push('Type :' + res[i].Type)
      // console.log(res[i].VPC_ID);
      // nodeDataArray.push('VPC_ID :' + res[i].VPC_ID)
      // console.log('ending the ' + i + " run")
     
      

      // arrObj.push({
      //   name: 'Rushabh',
      //   age: 27
      // });
      var key1=Math.floor((Math.random() * 9999999999999999999) + 1);      ;
      var key2=key1*3;
      var key3=key1*4;
      var key4=key1*7;
      // var key5=key1*4;
      // var key6=key1*5;


      nodeDataArray.push(
        // Key : `${i}`, 
        // Zone : res[i].Zone,
        // Type : res[i].Type,
        // App_ID : res[i].App_ID,
        // VPC_ID: res[i].VPC_ID,
        // Subnet_ID: res[i].Subnet_ID,
        // Instance_ID: res[i].Instance_ID,
        // Platform: res[i].Platform,
        // Architecture: res[i].Architecture,
        // EBS_ID: res[i].EBS_ID,
        // Public_ID: res[i].Public_ID

        {key : key1,
        parent : key1,
        type : "VPC_ID",
        Vpc_Id: res[i].VPC_ID}, 
        
        {key : key2, 
        parent : key1,
        type : "AZ",
        AvailabilityZone : res[i].Zone
        },
        
        {
        
        key : key3, 
        parent : key2,
        type : "EC2",
        InstanceID : res[i].Instance_ID,
        InstanceType : res[i].Type,
        Platform: res[i].Platform,
        //Public_ID: res[i].Public_ID
        
        }
       
        ,

        {
        
        key : key4, 
        parent : key2,
        type : "BlockDeviceMappings",
        VolumeId : res[i].EBS_ID,
      //  Architecture : res[i].Architecture,
  


        }
        






            );
    
    
    }
// { key: 79, parent: 77, type: "AWS Cloud", AvailabilityZone: "us-east-1c"},
    response.json(nodeDataArray);    
  });
})

// router.get('/cloudData', function(req, res) {
//   data.all(function(data){
//     const diagramData = data;
//   })
// })

module.exports = router;



// // Import the model (burger.js) to use its database functions.
// const event = require('../models/event.js');

// // Create all our routes and set up logic within those routes where required.
// router.get('/', function(req, res) {
//   event.all(function(data) {
//     const hbsObject = {
//       event: data
//     };
//     console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });


// router.get('/events', function(req, res) {
//   event.all(function(data) {
//     const hbsObject = {
//       event: data
//     };
//     console.log(hbsObject);
//     res.render('event', hbsObject);
//   });
// });

// router.get('/aws', function(req, res) {
//     event.all(function(data) {
//       const nodeDataArray = {
//         event: data
//       };
//       console.log(nodeDataArray);
//       res.render('event', hbsObject);
//     });
//   });

// router.get('/edit', function(req, res) {
//   event.all(function(data) {
//     const hbsObject = {
//       event: data
//     };
//     console.log(hbsObject);
//     res.render('edit', hbsObject);
//   });
// });


// router.put("/api/events/:id", function(req, res) {
//   const condition = "id = " + req.params.id;
//   console.log('condition', condition);
//   event.update({future: req.body.future}, condition, function(result) {
//     console.log('entered event updated');
//     res.redirect("/")
//     res.status(200).end();
//   });
// });

// router.post('/api/events', function(req, res) {
//   event.create(['campus','title','date','start_time','end_time','type','future'], [req.body.campus,req.body.title,req.body.date,req.body.start_time,req.body.end_time,req.body.type,req.body.future], function(result) {
//     // Send back the ID of the new quote
   
//     //res.json({ id: result.insertId });
//     res.redirect("/");
//   });
// ///  event.delete(['id'], [req.body.campus], function(result) {
//     // Send back the ID of the new quote
   
//     //res.json({ id: result.insertId });
//   //  res.redirect("/");
// //  });
// });

// router.delete('/api/events/:id', function(req, res) {
//   event.delete(['id'], [req.body.campus], function(result) {
//     // Send back the ID of the new quote
   
//     //res.json({ id: result.insertId });
//     res.redirect("/");
//   });
// });




 const express = require('express');
const diagramModel = require('../models/diagramModel');
const liveDiagramModel = require('../models/liveDiagramModel');
var AWS = require('aws-sdk');
var orm = require("../config/orm.js");
const path = require('path');

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

const loginCreds = {username:"220042653",password:"cats"};
const loginCreds2 = {username:"212069298",password:"cats"};

router.get("/diagram"), function(request, response) {
  response.sendFile(path.join(__dirname, "../public/diagram.html"))
};

router.get("/liveDiagram"), function(request, response) {
  response.redirect("localhost:3000/loadDB");
};

router.post('/login', function(request, response) {
   const username = request.body.username;
   const password = request.body.password;

   if (loginCreds.username === username && loginCreds.password === password)
  { 

    response.status(200);
    console.log("I AM REDIRECT")
    
 


  } else if (loginCreds2.username === username && loginCreds2.password === password) {
    response.redirect(202);
  } else {
    console.log("incorrect credentials")
    response.status(403)
  }

})

router.get('/diagramData', function(request, response) {
  var nodeDataArray = [];
  
  diagramModel.getDiagrams(1, function(err, res) {
    if (err) {
      throw err;
    }
    // Log all results of the SELECT statement
    console.log(res[1].VPC_ID);
    
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
        Vpc_Id: res[i].VPC_ID
        
        
      }, 

    

        
        {key : key2, 
        parent : key1,
        type : "AZ",
        AvailabilityZone : res[i].Zone,
        SubnetId: res[i].Subnet_ID
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

router.get('/liveDiagramData', function(request, response) {
  var nodeDataArray = [];
  
  liveDiagramModel.getLiveDiagrams(4, function(err, res) {
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


router.get('/loadDB', function(request, response) {
  AWS.config.update({region: 'us-east-1'});
// Create S3 service object

s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
 
});

// Call EC2 to list the servers
var ec2=new AWS.EC2();

var cols = ["Zone","App_ID","VPC_ID","Subnet_ID","Instance_ID","Type","Platform","Architecture","EBS_ID","Public_ID"];
var vals=[];

ec2.describeInstances(function(err, data) {
 
  console.log(`Total Instances ----> ${data.Reservations.length}`);
  if (err) console.log(err, err.stack); // an error occurred
  else {    console.log(JSON.stringify(data));
    orm.delete('awsliveobjects', function(res) {
      console.log(`DROPPING AWS RECORDS${res}`);
      console.log(JSON.stringify(res)); 
      });           // successful response
    for(var i=0;i < data.Reservations.length;i++)
    {
        console.log(`*************Parsed Information from AWS*************`);
        console.log(`Zone - ${data.Reservations[i].Instances[0].Placement.AvailabilityZone}`);
        vals.push(data.Reservations[i].Instances[0].Placement.AvailabilityZone);
        console.log(`Application ID - ${data.Reservations[i].Instances[0].Tags[0].Value}`);
        var AppID = data.Reservations[i].Instances[0].Tags[0].Value;
        vals.push(data.Reservations[i].Instances[0].Tags[0].Value);
        console.log(`VPC ID - ${data.Reservations[i].Instances[0].VpcId}`);
        vals.push(data.Reservations[i].Instances[0].VpcId);
        console.log(`Subnet ID - ${data.Reservations[i].Instances[0].SubnetId}`);
        vals.push(data.Reservations[i].Instances[0].SubnetId);
        console.log(`Instance ID - ${data.Reservations[i].Instances[0].InstanceId}`);
        vals.push(data.Reservations[i].Instances[0].InstanceId);
        // console.log(`Instance Name - ${data.Reservations[i].Instances[0].Tags[1].Value}`);
        // vals.push(data.Reservations[i].Instances[0].Tags[1].Value);
        console.log(`Instance Type - ${data.Reservations[i].Instances[0].InstanceType}`);
        vals.push(data.Reservations[i].Instances[0].InstanceType);
        console.log(`Platform - ${data.Reservations[i].Instances[0].Platform}`);
        vals.push(data.Reservations[1].Instances[0].Platform);
        console.log(`Architecture - ${data.Reservations[1].Instances[0].Architecture}`);
        vals.push(data.Reservations[i].Instances[0].Architecture);
        console.log(`EBS ID- ${data.Reservations[i].Instances[0].BlockDeviceMappings[0].Ebs.VolumeId}`);
        vals.push(data.Reservations[i].Instances[0].BlockDeviceMappings[0].Ebs.VolumeId);
        vals.push('0.0.0.0')
        console.log(cols);
        console.log(vals);
        orm.create('awsliveobjects', cols, vals, function(res) {
          console.log(`*****TEST***${res}`);
          console.log(JSON.stringify(res)); 
          });
          vals = [];
    }
  }
  var params = {
    TimePeriod: { /* required */
      End: '2019-07-01', /* required */
      Start: '2019-06-01' /* required */
    },
    Granularity: 'MONTHLY',
    Metrics:["BlendedCost"]
  };
  var costexplorer = new AWS.CostExplorer();
  costexplorer.getCostAndUsage(params, function (err, cost) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      cols = ["App_ID", "Date", "Amount"];
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    vals.push('4');
    vals.push(date);
    console.log(`Amount${cost.ResultsByTime[0].Total.BlendedCost.Amount}`);
    vals.push(cost.ResultsByTime[0].Total.BlendedCost.Amount);
    console.log(JSON.stringify(cost));           // successful response
    console.log(cols);
    console.log(vals);
    // orm.create('Billing', cols, vals, function(res) {
    //   console.log(`*****TEST***${res}`);
    //   console.log(JSON.stringify(res)); 
    //   });
    }
  });
});
  
  console.log("completed")
  
  response.sendFile(path.join(__dirname, "../public/liveDiagram.html"));
});




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



const express = require('express');

//mysql testing
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root2",

  // Your password
  password: "root2",
  database: "cloudwizoz_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

var nodeDataArray = [];

const readObjects = function() {
  console.log("Selecting all objects\n");
  connection.query("SELECT * FROM objects WHERE App_ID = 1", function(err, res) {
    if (err) throw err;
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

        {Key : key1,
        Parent : key1,
        Type : "VPC_ID",
        VPC_ID: res[i].VPC_ID}, 
        
        {Key : key2, 
        Parent : key1,
        Type : "AZ",
        Zone : res[i].Zone
        },
        
        {
        
        Key : key3, 
        Parent : key2,
        Type : "EC2",
        InstanceID : res[i].Instance_ID,
        InstanceType : res[i].Type,
        Platform: res[i].Platform,
        Public_ID: res[i].Public_ID
        
        }
       ,
        {
        
        Key : key4, 
        Parent : key2,
        Type : "BlockDeviceMappings",
        EBS_ID : res[i].EBS_ID,
        Architecture : res[i].EBS,
  


        }
        






            );
    
    
    }
// { key: 79, parent: 77, type: "AWS Cloud", AvailabilityZone: "us-east-1c"},

     console.log(nodeDataArray);
    console.log(res);
    console.log('done');

    connection.end();
    

  
  });
}


// var cb = [];
// for (var i = 0; i < 10; i++) {
//     cb.push({
//         'test': 'value'
//     });
//     console.log(JSON.stringify(cb));
// };

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// var nodeDataArray = [
//   { key: 77, type: "project", projectName: "WizOZ" },
//   { key: 79, parent: 77, type: "AWS Cloud", AvailabilityZone: "us-east-1c"},
//   { key: 80, parent: 77, type: "VPC", VpcId: "vpc-1a2b3c4d"},
//   { key: 81, parent: 79, type: "subnet", SubnetId: "subnet-4fcab660"},
//   { key: 82, parent: 79, type: "ec2", InstanceID: "i-02830dbe3b396baf5", InstanceType:"t2.micro", Platform:"windows", Architecture:"x86_64", LaunchTime:"2019-06-25T23:18:47.000Z"},
//   { key: 81, parent: 79, type: "BlockDeviceMappings", DeviceName: "/dev/sda1", VolumeId: "vol-0066996b1c7ede09d"}

//  ];



readObjects();



//mysqlrestubg



var methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
// const routes = require('./controllers/burgerController.js');

// app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});







const express = require('express');



var nodeDataArray = [];

const readObjects = function() {
  console.log("Selecting all objects\n");
  ;
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
const routes = require('./controllers/diagramController');

app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});








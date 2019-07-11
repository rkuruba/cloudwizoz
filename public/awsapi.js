// Load the SDK for JavaScript
var AWS = require('aws-sdk');
var orm = require("../config/orm.js");
//const connection = require('../config/connection.js');
// Set the region 
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
  else {    console.log(JSON.stringify(data));           // successful response
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
// var nodeDataArray = [

//    ];


   
   module.exports = {
    
      nodeDataArray : [    { key: 77, type: "project", projectName: "WizOZ" },
      { key: 79, parent: 77, type: "AWS Cloud", AvailabilityZone: "us-east-1c"},
      { key: 80, parent: 77, type: "VPC", VpcId: "vpc-1a2b3c4d"},
      { key: 81, parent: 79, type: "subnet", SubnetId: "subnet-4fcab660"},
      { key: 82, parent: 79, type: "ec2", InstanceID: "i-02830dbe3b396baf5", InstanceType:"t2.micro", Platform:"windows", Architecture:"x86_64", LaunchTime:"2019-06-25T23:18:47.000Z"},
      { key: 81, parent: 79, type: "BlockDeviceMappings", DeviceName: "/dev/sda1", VolumeId: "vol-0066996b1c7ede09d"}
  
   ]
  
}



   
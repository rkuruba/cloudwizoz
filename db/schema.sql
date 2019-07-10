DROP DATABASE IF EXISTS `cloudwizoz_db`;
CREATE DATABASE `cloudwizoz_db`;
USE `cloudwizoz_db`;

  
  
  CREATE TABLE `objects` (
  `ID` int( 11 ) AUTO_INCREMENT NOT NULL,
  `Zone` VARCHAR( 255) NOT NULL,
  `App_ID` VARCHAR(50),
  `VPC_ID` VARCHAR(50),
  `Subnet_ID` VARCHAR(50),
  `Instance_ID` VARCHAR(50),
  `Instance_Name` Varchar(100),
  `Type` VARCHAR( 255) NOT NULL,
  `Platform` VARCHAR( 255),
  `Architecture` VARCHAR( 255) NOT NULL,
  `EBS_ID` VARCHAR(50),
  `Public_ID` VARCHAR( 50) NULL,
PRIMARY KEY ( `ID` ) );
  
  CREATE TABLE `Application` (
  `ID` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `Name` VARCHAR( 255) NOT NULL,
  `Owner` VARCHAR( 255) NOT NULL,
  `Business` VARCHAR( 255) NOT NULL,
  `Criticality` VARCHAR( 255) NOT NULL,
  PRIMARY KEY ( `ID` ) );
  
    CREATE TABLE `Billing` (
  `ID` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `App_ID` VARCHAR(50),
  `Date` DATETIME,
  `Amount` VARCHAR( 255),
  PRIMARY KEY ( `ID` ) );

delete from objects;
delete from application;

    
  insert into Application(Name,Owner,Business, Criticality) values ('Centerpiece','Justin Marth','Healthcare','High');
  insert into Application(Name,Owner,Business, Criticality) values ('ShopFloor','Tammy Jordan','Aviation','Extreme');
  insert into Application(Name,Owner,Business, Criticality) values ('Fusion','Trey Keisler','Power','High');
  insert into Application(Name,Owner,Business, Criticality) values ('Treasury Billing','Michael Imrick','Capital','High');
  
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','1','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8e','AWS','t2.micro','windows','x86_64','vol-0066996b1c7ede09d','172.31.45.54');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','1','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8f','GEIX','db.t3.micro','RDS','EBS','vol-0066996b1c7ede09f','172.31.45.48');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','1','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8g','AWS','i3.large','windows','x86_64','vol-0066996b1c7ede09c','172.31.45.56');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','1','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8h','AWS','u-6tb1.metal','windows','EBS','vol-0066996b1c7ede09l','172.31.45.59');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','2','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8e','AWS','t2.micro','windows','x86_64','vol-0066996b1c7ede09d','172.31.45.54');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','2','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8f','GEIX','db.t3.micro','RDS','EBS','vol-0066996b1c7ede09f','172.31.45.48');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','2','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8g','AWS','i3.large','windows','x86_64','vol-0066996b1c7ede09c','172.31.45.56');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','2','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8h','GEIX','u-6tb1.metal','windows','EBS','vol-0066996b1c7ede09l','172.31.45.59');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','3','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8e','GEIX','t2.micro','windows','x86_64','vol-0066996b1c7ede09d','172.31.45.54');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','3','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8f','AWS','db.t3.micro','RDS','EBS','vol-0066996b1c7ede09f','172.31.45.48');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','3','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8g','GEIX','i3.large','windows','x86_64','vol-0066996b1c7ede09c','172.31.45.56');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','3','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8h','AWS','u-6tb1.metal','windows','EBS','vol-0066996b1c7ede09l','172.31.45.59');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','4','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8e','AWS','t2.micro','windows','x86_64','vol-0066996b1c7ede09d','172.31.45.54');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','4','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8f','AWS','db.t3.micro','RDS','EBS','vol-0066996b1c7ede09f','172.31.45.48');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1a','4','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8g','AWS','i3.large','windows','x86_64','vol-0066996b1c7ede09c','172.31.45.56');
  insert into objects(zone, app_id,vpc_id,subnet_id,instance_id,instance_name,type,platform,architecture,ebs_id,public_id) values
  ('us-east-1b','4','vpc-2e9d7d55','subnet-4fcab660','i-06068f860157afc8h','AWS','u-6tb1.metal','windows','EBS','vol-0066996b1c7ede09l','172.31.45.59');

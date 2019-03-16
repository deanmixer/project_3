DROP DATABASE IF EXISTS `pupps_db`;
CREATE DATABASE `pupps_db`;

USE pupps_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,    
	firstName varchar(255),
	lastName varchar(255),
	zipCode varchar(255),
	puppyName varchar(255),
	puppyGender varchar(255),
	puppyBreed varchar(255),
	puppyPersonality varchar(255),
    puppyAge integer(3),
    puppyWeight integer(3),
    imgUrl longtext,
	PRIMARY KEY (id)
);
USE pupps_db; 
CREATE TABLE playDate
(
   id int NOT NULL AUTO_INCREMENT,
   mail1 VARCHAR(255) NOT NULL,
   mail2 VARCHAR(255) NOT NULL,
   location VARCHAR(255) NOT NULL,
   accepted BOOLEAN NOT NULL,
   date DATE NOT NULL,
   PRIMARY KEY (id)
   );
   
INSERT INTO playDate (mail1, mail2, location, accepted, date) VALUES ('deanmixer3@yahoo.com', 'deanmixer69@yahoo.com', 'Piedmont Park', false, '2019-03-28'	);
INSERT INTO playDate (mail1, mail2, location, accepted, date) VALUES ('helmitira@yahoo.com', 'deanmixer69@yahoo.com', 'Morningside', false, '2019-03-21');
INSERT INTO playDate (mail1, mail2, location, accepted, date) VALUES ('deanmixer@yahoo.com', 'deanmixer69@yahoo.com', 'Piedmont Park', false, '2019-03-14');

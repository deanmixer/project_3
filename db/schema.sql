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
  
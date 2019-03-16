
USE `gqhscc90hptvrccf`;

CREATE TABLE users
(
	id int AUTO_INCREMENT NOT NULL,
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
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE playDate
(
   id int AUTO_INCREMENT NOT NULL,
   mail1 VARCHAR(255) NOT NULL,
   mail2 VARCHAR(255) NOT NULL,
   location VARCHAR(255) NOT NULL,
   accepted BOOLEAN NOT NULL,
   date DATE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   PRIMARY KEY (id)
   );


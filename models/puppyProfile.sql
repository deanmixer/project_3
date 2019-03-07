DROP DATABASE IF EXISTS `puppy_info`;
CREATE DATABASE `puppy_info`;
USE `puppy_info`;
CREATE TABLE `puppy_info` (

  `id` int(11) NOT NULL AUTO_INCREMENT,

  `first_name` varchar(45) NOT NULL,

  `last_name` varchar(45) DEFAULT NULL,

  `email` varchar(45) NOT NULL,

  `puppy_name` varchar(45) NOT NULL,

  `puppy_gender` varchar(45) NOT NULL,

  `puppy_breed` varchar(45) NOT NULL,

  `address` varchar(45) DEFAULT NULL,

  `zipcode` int(11) NOT NULL,

  `puppy_personality` varchar(45) DEFAULT NULL,

  `puppy_age` int(11) NOT NULL,

  `puppy_weight` int(11) NOT NULL,

  `img_url` longtext,

  PRIMARY KEY (`id`),

  UNIQUE KEY `email_UNIQUE` (`email`));

  
-- Schema.sql for SQL database/table
DROP DATABASE IF EXISTS puppy_info;
CREATE DATABASE puppy_info;
USE puppy_info;
-- Create a new table with left-right column titles
CREATE TABLE puppy_info (
id INT(15) NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(45) NOT NULL,
last_name VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
meet_location VARCHAR(45) NOT NULL,
puppy_name VARCHAR(45) NOT NULL,
puppy_gender VARCHAR(45) NOT NULL,
puppy_breed VARCHAR(45) NOT NULL,
puppy_personality VARCHAR(45) DEFAULT NULL,
puppy_age INT(100) NOT NULL,
puppy_weight INT(100) NOT NULL,
img_url longtext
);
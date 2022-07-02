DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;

-- CREATE DATABASE Employee_Tracker

-- USE Employee_Tracker

create table department (
    id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(30) NOT NULL
);
 
 CREATE TABLE role (
     id INT PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     salary INT,
     department_id INT

 );


SELECT title, salary, department_id
FROM role;

 CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT NULL
 );



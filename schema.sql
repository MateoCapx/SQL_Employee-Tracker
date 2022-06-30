DROP TABLE IF EXISTS department;

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

 CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT NULL
 );
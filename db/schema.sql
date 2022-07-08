DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;



create table department (
    id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(30) NOT NULL UNIQUE
);
 

 CREATE TABLE role (
     id INT PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     salary INT,
     department_id VARCHAR(30) NOT NULL
 );



 CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,    
     role_id VARCHAR(30),   
     manager_id INT NULL,
     FOREIGN KEY(manager_id) REFERENCES employee (id)
 );



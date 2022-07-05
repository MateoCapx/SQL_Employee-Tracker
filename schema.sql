DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;


create table department (
    id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(30) NOT NULL
);
 
 CREATE TABLE role (
     id INT PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     salary INT,
     department_id INT -- REFERENCES department(id)   --forgien Key

 );


SELECT title, salary, department_id
FROM role;

 CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INT,   --forgien Key
     manager_id INT NULL --forgien Key
 );



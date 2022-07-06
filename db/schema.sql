DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;


create table department (
    id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(30) NOT NULL UNIQUE
);
 

 CREATE TABLE role (
     id INT PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     salary INT,
     department_id INT,
     PRIMARY KEY (id),
     FOREIGN KEY (department_id) REFERENCES department(id)

 );



 CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,    
     role_id INT,   
     manager_id INT NULL,
     FOREIGN KEY(manager_id) REFERENCES employees (id)
 );



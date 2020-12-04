DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(40),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY(id)
);
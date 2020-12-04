DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    PRIMARY KEY(id)
);
CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    PRIMARY KEY(id)
);
CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    PRIMARY KEY(id)
);


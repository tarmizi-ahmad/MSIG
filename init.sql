CREATE DATABASE productdb;

USE productdb;

CREATE TABLE product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    description TEXT,
    status VARCHAR(20)
);
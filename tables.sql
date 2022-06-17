CREATE DATABASE IF NOT EXISTS banco;

USE banco;

CREATE TABLE `pessoa` (`id` int unsigned not null auto_increment primary key, `nome` VARCHAR(255) null, `cpf` varchar(255) null, `sexo` CHAR(1) null);

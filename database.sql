-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tecosta
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tecosta
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tecosta` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tecosta` ;

-- -----------------------------------------------------
-- Table `tecosta`.`atendimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tecosta`.`atendimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dia` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `procedimento` VARCHAR(100) NOT NULL,
  `vcobrado` DOUBLE NOT NULL,
  `formapag` VARCHAR(30) NOT NULL,
  `userId` INT NULL DEFAULT NULL,
  `cliente` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tecosta`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tecosta`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `cpf` VARCHAR(24) NOT NULL,
  `datanasc` DATE NOT NULL,
  `rua` VARCHAR(50) NOT NULL,
  `numero` INT NOT NULL,
  `bairro` VARCHAR(30) NOT NULL,
  `cidade` VARCHAR(40) NOT NULL,
  `genero` VARCHAR(15) NOT NULL DEFAULT 'outro',
  `cep` VARCHAR(20) NOT NULL,
  `estado` VARCHAR(255) NULL DEFAULT NULL,
  `userid` VARCHAR(45) NULL DEFAULT NULL,
  `telefone` VARCHAR(60) NULL DEFAULT NULL,
  `sessoes` INT NULL DEFAULT NULL,
  `clientescol` VARCHAR(45) NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 52
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tecosta`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tecosta`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vcompra` FLOAT NOT NULL,
  `vvenda` FLOAT NOT NULL,
  `refrig` TINYINT(1) NOT NULL,
  `descricao` VARCHAR(50) NOT NULL,
  `nome` VARCHAR(30) NOT NULL,
  `lote` INT NOT NULL,
  `datavali` DATETIME NOT NULL,
  `marca` VARCHAR(30) NOT NULL,
  `indicacao` VARCHAR(50) NOT NULL,
  `restricoes` VARCHAR(100) NOT NULL,
  `quantidade` INT NOT NULL,
  `observacoes` VARCHAR(150) NOT NULL,
  `foto` BLOB NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tecosta`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tecosta`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `datanasc` DATETIME NOT NULL,
  `fone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

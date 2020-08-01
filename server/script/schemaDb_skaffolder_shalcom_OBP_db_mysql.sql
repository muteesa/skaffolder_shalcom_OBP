--
-- Database: `skaffolder_shalcom_obp_db`
--

CREATE DATABASE IF NOT EXISTS `skaffolder_shalcom_obp_db`;
USE `skaffolder_shalcom_obp_db`;


-- ENTITIES

--
-- Struttura della tabella `account`
--

CREATE TABLE IF NOT EXISTS `account` (
	`balance` numeric ,
	`begin_balance` numeric ,
	`begin_balance_time_stamp` date ,
	`credit_balance` numeric ,
	`description` varchar(130) ,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `tx`
--

CREATE TABLE IF NOT EXISTS `tx` (
	`account_id` numeric ,
	`amount` numeric ,
	`balance` numeric ,
	`description` varchar(130) ,
	`time_stamp` date ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`country` varchar(130) ,
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `skaffolder_shalcom_obp_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `skaffolder_shalcom_obp_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `customer_account`
--

CREATE TABLE IF NOT EXISTS `customer_account` (
	`account_id` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m account_user Account - customer_account
ALTER TABLE `account` ADD COLUMN `account_user` int(11)  REFERENCES customer_account(_id);

-- relation 1:m transactions Account - Tx
ALTER TABLE `account` ADD COLUMN `transactions` int(11)  REFERENCES tx(_id);

-- relation 1:m user_accounts User - customer_account
ALTER TABLE `user` ADD COLUMN `user_accounts` int(11)  REFERENCES customer_account(_id);



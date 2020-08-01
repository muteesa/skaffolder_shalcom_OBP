--
-- Database: skaffolder_shalcom_obp_db
--

CREATE DATABASE skaffolder_shalcom_obp_db;

-- ENTITIES

--
-- Schema entity account
--

CREATE TABLE IF NOT EXISTS "account" (
	balance numeric ,
	begin_balance numeric ,
	begin_balance_time_stamp date ,
	credit_balance numeric ,
	description varchar(130) ,
	type varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity tx
--

CREATE TABLE IF NOT EXISTS "tx" (
	account_id numeric ,
	amount numeric ,
	balance numeric ,
	description varchar(130) ,
	time_stamp date ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	country varchar(130) ,
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity customer_account
--

CREATE TABLE IF NOT EXISTS "customer_account" (
	account_id varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m account_user Account - customer_account
ALTER TABLE account ADD COLUMN account_user INTEGER  REFERENCES "customer_account"(_id);

-- relation 1:m transactions Account - Tx
ALTER TABLE account ADD COLUMN transactions INTEGER  REFERENCES "tx"(_id);

-- relation 1:m user_accounts User - customer_account
ALTER TABLE user ADD COLUMN user_accounts INTEGER  REFERENCES "customer_account"(_id);

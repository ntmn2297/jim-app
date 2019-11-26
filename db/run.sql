create database testdb;
use testdb;

DELETE FROM `testdb`.`product` WHERE `id`='4';
DELETE FROM `testdb`.`product` WHERE `id`='5';
DELETE FROM `testdb`.`product` WHERE `id`='6';

UPDATE `testdb`.`category` SET `img`='assets/image/toys-demo.jpg' WHERE `id`='1';
UPDATE `testdb`.`category` SET `img`='assets/image/fashion-demo.jpg' WHERE `id`='2';
UPDATE `testdb`.`category` SET `img`='assets/image/electronics-demo.jpg' WHERE `id`='3';

DELETE FROM `testdb`.`product` WHERE `id`='7';
DELETE FROM `testdb`.`product` WHERE `id`='8';
DELETE FROM `testdb`.`product` WHERE `id`='9';


-- Adminer 4.8.0 MySQL 8.0.15 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `exam_elements`;
CREATE TABLE `exam_elements` (
  `elementId` int(11) NOT NULL,
  `elementName` varchar(55) NOT NULL,
  PRIMARY KEY (`elementId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `exam_elements` (`elementId`, `elementName`) VALUES
(0, 'fire'),
(1, 'electric'),
(2, 'water'),
(3, 'grass'),
(4, 'normal');

DROP TABLE IF EXISTS `exam_monsters`;
CREATE TABLE `exam_monsters` (
  `monsterId` mediumint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `moveSet` varchar(100) NOT NULL,
  `firstCaught` varchar(200) NOT NULL,
  `description` varchar(400) NOT NULL,
  `imgName` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `score` int NOT NULL,
  `elementId` int NOT NULL,
  PRIMARY KEY (`monsterId`))
 ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `exam_monsters` (`monsterId`, `name`, `moveSet`, `firstCaught`, `description`, `imgName`, `score`, `elementId`) VALUES
(1, 'fireTurtle', 'spark, talk, sleep', '2022-01-20', 'A small fire turtle.  He loves to sleep.', 'fireTurtle.png', 5,  0),
(2, 'golbra', 'Scream, flap, dance',  '1977-05-18', 'a tall man-bat thing.  not to be confused with its more popular cousin Batman.', 'golbra.png', 2,  4),
(3, 'lectricThing', 'shock, awe, smile',  '1970-01-01', 'A weird electric thing with a bulb of garlic on its back. weird.', 'lectricThing.png', 3,  1),
(4, 'odgy', 'fly, poison, struggle',  '1982-02-18', 'a green flying thing. Dr.Cs favorite.',  'odgy.png', 8,  3),
(5, 'teengetails',  'tangle, swipe, infringe',  '1987-06-05', 'an ancient trash panda.  It has stolen much wisdom', 'tangetails.png', 5,  2);
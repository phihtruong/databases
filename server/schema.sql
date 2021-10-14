DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `id` INTEGER AUTO_INCREMENT,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  -- `Room id` INTEGER NULL DEFAULT NULL,
  -- `User id` INTEGER NULL DEFAULT NULL,
  `roomname` text,
  `username` text,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS `Rooms`;

-- CREATE TABLE `Rooms` (
--   `id` INTEGER AUTO_INCREMENT,
--   `roomname` MEDIUMTEXT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ALTER TABLE `Messages` ADD FOREIGN KEY (`Room id`) REFERENCES `Rooms` (`id`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (`User id`) REFERENCES `Users` (`id`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE `messages`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar
(255),
   `user_name` varchar
(255),
  `text` varchar
(255),
  `roomname` varchar
(255),
  `date` timestamp
);

CREATE TABLE `users`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar
(255)
);



/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
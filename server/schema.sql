
DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE `messages`
(
  `message_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `message` varchar
(255),
  `roomname` varchar
(255),
  `created_at` timestamp
);

CREATE TABLE `users`
(
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar
(255)
);

ALTER TABLE `messages`
ADD FOREIGN KEY
(`user_id`) REFERENCES `users`
(`user_id`);

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
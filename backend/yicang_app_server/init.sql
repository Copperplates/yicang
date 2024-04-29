DROP DATABASE user_info;
CREATE DATABASE user_info;
use user_info
CREATE TABLE `user_info` (
                            `id` INT NOT NULL,
                            `character_code` INT,
                            `create_time` DATETIME,
                            `password` VARCHAR(255) NOT NULL,
                            `signature` VARCHAR(255),
                            `status` BIGINT NOT NULL,
                            `update_time` DATETIME,
                            `username` VARCHAR(255) NOT NULL,
                            PRIMARY KEY (`id`)
);

DROP DATABASE user_collection_novel;
CREATE DATABASE user_collection_novel;
use user_collection_novel
CREATE TABLE `user_collection_novel` (
                                       `bought_time` DATETIME,
                                       `id` INT NOT NULL,
                                       `username` VARCHAR(255) NOT NULL,
                                       `novel_id` BIGINT NOT NULL,
                                       `novel_name` VARCHAR(255),
                                       `update_time` DATETIME,
                                       `audit` INT DEFAULT 0,
                                       PRIMARY KEY (`id`)
);

DROP DATABASE user_collection_painting;
CREATE DATABASE user_collection_painting;
use user_collection_painting
CREATE TABLE `user_collection_painting` (
                                          `bought_time` DATETIME,
                                          `id` INT NOT NULL,
                                          `username` VARCHAR(255) NOT NULL,
                                          `painting_id` BIGINT NOT NULL,
                                          `painting_name` VARCHAR(255),
                                          `update_time` DATETIME,
                                          `audit` INT DEFAULT 0,
                                          PRIMARY KEY (`id`)
);

DROP DATABASE collection_ds;
CREATE DATABASE collection_ds;
use collection_ds
CREATE TABLE `painting` (
                            `create_time` DATETIME,
                            `file_path` VARCHAR(255),
                            `finish_time` DATETIME,
                            `id` INT NOT NULL,
                            `introduction` VARCHAR(255),
                            `painter` VARCHAR(255),
                            `painting_name` VARCHAR(255) NOT NULL,
                            `update_time` DATETIME,
                            `price` INT,
                            `audit` INT DEFAULT 0,
                            PRIMARY KEY (`id`)
);
CREATE TABLE `novel` (
                         `create_time` DATETIME,
                         `file_path` VARCHAR(255),
                         `finish_time` DATETIME,
                         `id` INT NOT NULL,
                         `introduction` VARCHAR(255),
                         `novel_name` VARCHAR(255) NOT NULL,
                         `update_time` DATETIME,
                         `writer` VARCHAR(255),
                         `price` INT,
                         `audit` INT DEFAULT 0,
                         PRIMARY KEY (`id`)
);

DROP DATABASE user_interest_novel;
CREATE DATABASE user_interest_novel;
DROP DATABASE user_interest_painting;
CREATE DATABASE user_interest_painting;

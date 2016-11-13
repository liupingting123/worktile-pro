/*
Navicat MySQL Data Transfer

Source Server         : Snowin
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : db_worktile

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-10-26 13:11:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for markinfo
-- ----------------------------
DROP TABLE IF EXISTS `markinfo`;
CREATE TABLE `markinfo` (
  `mid` varchar(10) COLLATE utf8_icelandic_ci NOT NULL,
  `markname` varchar(50) COLLATE utf8_icelandic_ci NOT NULL,
  `markcontext` text COLLATE utf8_icelandic_ci NOT NULL,
  `parentmarkid` int(10) NOT NULL DEFAULT '0',
  `username` varchar(20) COLLATE utf8_icelandic_ci NOT NULL,
  `createdate` datetime NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

-- ----------------------------
-- Table structure for messageboard
-- ----------------------------
DROP TABLE IF EXISTS `messageboard`;
CREATE TABLE `messageboard` (
  `mid` varchar(10) COLLATE utf8_icelandic_ci NOT NULL,
  `context` text COLLATE utf8_icelandic_ci NOT NULL,
  `leavetime` datetime NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

-- ----------------------------
-- Table structure for relateusermark
-- ----------------------------
DROP TABLE IF EXISTS `relateusermark`;
CREATE TABLE `relateusermark` (
  `username` varchar(20) COLLATE utf8_icelandic_ci NOT NULL,
  `mid` varchar(10) COLLATE utf8_icelandic_ci NOT NULL,
  `permission` varchar(50) COLLATE utf8_icelandic_ci NOT NULL,
  `priority` int(10) NOT NULL DEFAULT '0',
  `label` varchar(20) COLLATE utf8_icelandic_ci DEFAULT NULL,
  PRIMARY KEY (`username`,`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `username` varchar(20) COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_icelandic_ci NOT NULL,
  `name` varchar(15) COLLATE utf8_icelandic_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

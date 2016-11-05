/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50624
Source Host           : 127.0.0.1:3306
Source Database       : worktile

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-11-01 18:26:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `listid` int(10) NOT NULL,
  `pid` int(10) NOT NULL,
  `listname` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`listid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------

-- ----------------------------
-- Table structure for `mask`
-- ----------------------------
DROP TABLE IF EXISTS `mask`;
CREATE TABLE `mask` (
  `mid` int(10) NOT NULL,
  `markname` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `markcontext` text CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `listid` int(10) NOT NULL,
  `parentmark` int(10) NOT NULL DEFAULT '0',
  `creator` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `creatortime` datetime NOT NULL,
  `uptotime` datetime NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of mask
-- ----------------------------

-- ----------------------------
-- Table structure for `project`
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `pid` int(10) NOT NULL,
  `pname` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `pcontext` text CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project
-- ----------------------------

-- ----------------------------
-- Table structure for `project_user`
-- ----------------------------
DROP TABLE IF EXISTS `project_user`;
CREATE TABLE `project_user` (
  `pid` int(10) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `permission` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`pid`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project_user
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `nickname` varchar(15) CHARACTER SET utf8 COLLATE utf8_icelandic_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------

-- MySQL dump 10.13  Distrib 5.7.12, for osx10.11 (x86_64)
--
-- Host: localhost    Database: worktile
-- ------------------------------------------------------
-- Server version	5.7.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `s_permission`
--

DROP TABLE IF EXISTS `s_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `s_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `s_role`
--

DROP TABLE IF EXISTS `s_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `s_role` (
  `id` int(11) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_project`
--

DROP TABLE IF EXISTS `t_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_project` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci DEFAULT NULL,
  `limit` int(5) DEFAULT NULL,
  `description` varchar(20) DEFAULT '0',
  `publicity` int(2) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task`
--

DROP TABLE IF EXISTS `t_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task` (
  `id` int(11) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(20) DEFAULT NULL,
  `create_id` int(11) NOT NULL,
  `type` int(2) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `create_id` (`create_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_assignment`
--

DROP TABLE IF EXISTS `t_task_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_assignment` (
  `id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `follower_id` int(11) DEFAULT NULL,
  `attach_id` int(11) DEFAULT NULL,
  `assigner_id` int(11) DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_attachment`
--

DROP TABLE IF EXISTS `t_task_attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_attachment` (
  `id` int(11) NOT NULL,
  `task_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `description` varchar(20) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `suffix` varchar(20) DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_check_item`
--

DROP TABLE IF EXISTS `t_task_check_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_check_item` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `content` text,
  `attachment` int(2) DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_comment`
--

DROP TABLE IF EXISTS `t_task_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_comment` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `content` text,
  `attachment` varchar(20) DEFAULT NULL,
  `comment_id` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_log`
--

DROP TABLE IF EXISTS `t_task_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_log` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `type` int(2) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `content` text,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_task_tag`
--

DROP TABLE IF EXISTS `t_task_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_task_tag` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `account` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_icelandic_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `head` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `signature` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `wechat` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `pending1` varchar(20) DEFAULT NULL,
  `pending2` varchar(20) DEFAULT NULL,
  `pending3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_user_role`
--

DROP TABLE IF EXISTS `t_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user_role` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-16 19:54:24

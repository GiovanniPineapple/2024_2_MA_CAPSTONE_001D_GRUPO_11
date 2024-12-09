CREATE DATABASE  IF NOT EXISTS `andesk9` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `andesk9`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: andesk9
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id_appoin` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `service_id` int NOT NULL,
  `address_appoin` varchar(255) NOT NULL,
  `full_address` varchar(255) NOT NULL,
  `date_appoin` datetime NOT NULL,
  `service_price` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `duration_weeks` int NOT NULL,
  `buy_order` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `day` varchar(25) DEFAULT NULL,
  `Name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_appoin`),
  KEY `id_user` (`id_user`),
  KEY `appointments_ibfk_2` (`service_id`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`),
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id_service`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,18,3,'Providencia','Calle Falsa 123','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Lunes','giovanni'),(2,18,3,'Providencia','Calle Falsa 123','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Lunes','giovanni'),(3,18,3,'Nuñoa','Calle Verdadera 456','2024-12-08 14:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Martes','giovanni'),(4,18,3,'Nuñoa','Calle Verdadera 456','2024-12-08 14:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Martes','giovanni'),(5,18,3,'Maipu','Calle Falsa 123','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Miércoles','giovanni'),(6,18,3,'Maipu','Calle Falsa 123','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Miércoles','giovanni'),(7,18,3,'Providencia','Calle Verdadera 456','2024-12-08 14:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Jueves','giovanni'),(8,18,3,'Providencia','Calle Verdadera 456','2024-12-08 14:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Jueves','giovanni'),(15,18,3,'Providencia','asdasd','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Miércoles','giovanni'),(16,18,3,'Providencia','asdasd','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-317042','2024-12-09 01:06:42','Miércoles','giovanni'),(17,18,3,'Maipu','test1','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-891426','2024-12-09 02:54:58','Lunes','giovanni'),(18,18,3,'Maipu','test1','2024-12-08 12:00:00',180000.00,'Pagado',5,'order-891426','2024-12-09 02:54:58','Lunes','giovanni'),(19,18,3,'Providencia','test3','2024-12-09 14:00:00',180000.00,'Pagado',5,'order-160416','2024-12-09 03:03:53','Viernes','giovanni'),(20,18,3,'Providencia','test3','2024-12-09 14:00:00',180000.00,'Pagado',5,'order-160416','2024-12-09 03:03:53','Viernes','giovanni');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 11:12:56

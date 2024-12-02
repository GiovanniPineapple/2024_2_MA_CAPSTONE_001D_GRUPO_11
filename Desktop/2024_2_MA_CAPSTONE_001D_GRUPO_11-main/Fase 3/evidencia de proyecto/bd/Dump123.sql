CREATE DATABASE  IF NOT EXISTS `asdasd1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `asdasd`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: asdasd
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
  KEY `service_id` (`service_id`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`),
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id_service`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,18,2,'Maipu','asdasdsa','2024-12-01 12:00:00',250000.00,'Pagado',5,'order-754208','2024-12-01 21:32:49','Lunes','giovanni'),(2,18,2,'Maipu','asdasdsa','2024-12-01 12:00:00',250000.00,'Pagado',5,'order-754208','2024-12-01 21:32:49','Lunes','giovanni'),(3,18,2,'Ñuñoa','asdasd','2024-12-01 14:00:00',250000.00,'Pagado',5,'order-118848','2024-12-01 21:42:38','Martes','giovanni'),(4,18,2,'Ñuñoa','asdasd','2024-12-01 14:00:00',250000.00,'Pagado',5,'order-118848','2024-12-01 21:42:38','Martes','giovanni'),(5,18,2,'Providencia','asdasd','2024-12-01 12:00:00',250000.00,'Pagado',5,'order-383502','2024-12-01 21:48:21','Miércoles','giovanni'),(6,18,2,'Providencia','asdasd','2024-12-01 12:00:00',250000.00,'Pagado',5,'order-383502','2024-12-01 21:48:21','Miércoles','giovanni');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `available_hours`
--

DROP TABLE IF EXISTS `available_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `available_hours` (
  `id_available_hour` int NOT NULL AUTO_INCREMENT,
  `day_of_week` varchar(15) DEFAULT NULL,
  `comuna` varchar(45) DEFAULT NULL,
  `time_slot` time DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_available_hour`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `available_hours`
--

LOCK TABLES `available_hours` WRITE;
/*!40000 ALTER TABLE `available_hours` DISABLE KEYS */;
INSERT INTO `available_hours` VALUES (1,'Lunes','Maipu','12:00:00',1),(9,'Lunes','Ñuñoa','13:00:00',1),(10,'Lunes','Ñuñoa','14:00:00',1),(11,'Martes','Macul','12:00:00',1),(12,'Martes','Ñuñoa','14:00:00',1),(13,'Miércoles','Providencia','12:00:00',1);
/*!40000 ALTER TABLE `available_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_user`
--

DROP TABLE IF EXISTS `class_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_password` varchar(250) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `user_phone` bigint DEFAULT NULL,
  `user_image_path` varchar(250) DEFAULT NULL,
  `user_role` enum('no_logeado','cliente','admin','entrenador') NOT NULL,
  `id_coupon` int DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `id_coupon` (`id_coupon`),
  CONSTRAINT `class_user_ibfk_1` FOREIGN KEY (`id_coupon`) REFERENCES `coupon` (`id_coupon`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_user`
--

LOCK TABLES `class_user` WRITE;
/*!40000 ALTER TABLE `class_user` DISABLE KEYS */;
INSERT INTO `class_user` VALUES (1,'nelson','$2b$10$32ztFivCxiOat49F5ideaeLEouUKdFZV40wUJ1xeI5vbMFuMq8yFG','Vanni.p.alvarado@gmail.com',958613616,'uploads/img1/1730435786552-719804292-news3.jpeg','admin',NULL),(18,'giovanni','$2b$10$7WAHz/Ik7Z.jwlcJuOjKIOsW7aeM4nfrJoN5utF.MVHiZjw/4kuS6','Vanni.p.alvarado1@gmail.com',958613616,'uploads/img1/1730871807868-930716613-1730337834244-559139517-b695a7d8-1a52-4548-a289-b2db13a2cead.jpg','cliente',NULL),(19,'maria de los angeles','$2b$10$yTLsBfPrFnetxGb9zETTz./IrCc3zOMSM.o6qyU3ZcLs.E0pxyqVq','Vanni.p.alvarado2@gmail.com',958613616,'uploads/img1/1730943889918-818033630-kikiyo.jpg','cliente',NULL);
/*!40000 ALTER TABLE `class_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `confirmed_appointments`
--

DROP TABLE IF EXISTS `confirmed_appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `confirmed_appointments` (
  `id_appointment` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `day_of_week` varchar(15) DEFAULT NULL,
  `comuna` varchar(45) DEFAULT NULL,
  `time_slot` time DEFAULT NULL,
  PRIMARY KEY (`id_appointment`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `confirmed_appointments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirmed_appointments`
--

LOCK TABLES `confirmed_appointments` WRITE;
/*!40000 ALTER TABLE `confirmed_appointments` DISABLE KEYS */;
/*!40000 ALTER TABLE `confirmed_appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `id_coupon` int NOT NULL AUTO_INCREMENT,
  `discount_percent` decimal(5,2) DEFAULT NULL,
  `status` enum('activo','inactivo') DEFAULT 'activo',
  `code_coupon` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_coupon`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (2,10.00,'activo','10101010'),(3,10.00,'activo','10101010');
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id_feedback` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_feedback`),
  KEY `fk_id_user` (`id_user`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,18,'sdasdasdas','2024-11-30 01:07:12'),(2,18,'testestestetstet','2024-11-30 01:11:08');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id_notice` int NOT NULL AUTO_INCREMENT,
  `tipe_notice` varchar(45) DEFAULT NULL,
  `name_notice` varchar(45) DEFAULT NULL,
  `desct_notice` varchar(500) DEFAULT NULL,
  `notice_image_path` varchar(250) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_notice`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `notice_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'noticia','Nuevo método de entrenamiento','Nuevo método de entrenamiento','uploads/img3/1732842199790-842925783-janosch-diggelmann-8xLel9jx3fE-unsplash.jpg',1);
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `id_reservation` int NOT NULL AUTO_INCREMENT,
  `reservation_time` time DEFAULT NULL,
  `duration_weeks` int DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `id_service` int DEFAULT NULL,
  PRIMARY KEY (`id_reservation`),
  KEY `id_user` (`id_user`),
  KEY `id_service` (`id_service`),
  CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`),
  CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_service`) REFERENCES `services` (`id_service`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale` (
  `ide_sale` int NOT NULL AUTO_INCREMENT,
  `id_coupon` int DEFAULT NULL,
  `value_sale` decimal(10,2) DEFAULT NULL,
  `descrt_sale` varchar(100) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`ide_sale`),
  KEY `id_coupon` (`id_coupon`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `sale_ibfk_1` FOREIGN KEY (`id_coupon`) REFERENCES `coupon` (`id_coupon`),
  CONSTRAINT `sale_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `class_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id_service` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(45) DEFAULT NULL,
  `service_description` varchar(1000) DEFAULT NULL,
  `service_price` decimal(10,2) DEFAULT NULL,
  `service_duration` decimal(3,0) DEFAULT NULL,
  `service_image_path` varchar(250) DEFAULT NULL,
  `ide_sale` int DEFAULT NULL,
  PRIMARY KEY (`id_service`),
  KEY `ide_sale` (`ide_sale`),
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`ide_sale`) REFERENCES `sale` (`ide_sale`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (2,'Entrenamiento de 5 pasos','Paso 1: cómo educar a un perro para que orine y haga pis afuera\r\n Paso 2: cómo adiestrar un perro para que coma adecuadamente\r\n Paso 3: cómo educar a un cachorro para que pasee con la correa\r\n Paso 4: cómo enseñar a un perro a no morder\r\n Paso 5: entrenamiento canino y salud emocional',250000.00,5,'uploads/img2/1730435916342-102961043-AndesK9 - rrss-44.jpg',NULL),(3,'Módulo básico','* Educación de cachorros.\r\n* Módulo básico. \r\n* Módulo intermedio. \r\n* Módulo avanzado. \r\n* Modificación de conducta. \r\n* Entrenamientos específicos. \r\n* Cursos. \r\n* Seminarios. \r\n* Actividades outdoor.',180000.00,5,'uploads/img2/1731185538328-687451115-AndesK9 - rrss-18.jpg',NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-02  3:26:58

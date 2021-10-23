-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.2.40-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table restaurante.clientes: ~3 rows (approximately)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT IGNORE INTO `clientes` (`id`, `address`, `cell_phone`, `name`, `password`, `usuario`) VALUES
	(1, 'Cra32#25-8', '3214301231', 'Roberto', 'f%31h', 'roberto1'),
	(2, 'calle43 #9A-12', '3106237981', 'Stephani', 'k&7s3', 'stephani2'),
	(3, 'cra127#103-32', '3189531204', 'Guillermo', 'j$9s7', 'guillermo3');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2022 at 11:02 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ltg2022`
--

-- --------------------------------------------------------

--
-- Table structure for table `contenido`
--

CREATE TABLE `contenido` (
  `idcontenido` int(11) NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_gmateria` int(11) NOT NULL,
  `nombre_materia` varchar(200) DEFAULT NULL,
  `urlimg` varchar(500) NOT NULL,
  `urllibro` varchar(500) DEFAULT NULL,
  `urlpdf` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contenido`
--

INSERT INTO `contenido` (`idcontenido`, `id_nivel`, `id_perfil`, `id_grado`, `id_gmateria`, `nombre_materia`, `urlimg`, `urllibro`, `urlpdf`) VALUES
(0, 2, 1, 1, 1, 'Lengua Materna. Español', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg'),
(1, 2, 1, 1, 1, 'Lengua Materna. Español', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg'),
(2, 2, 2, 1, 1, 'Lengua Materna. Español', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg'),
(3, 2, 2, 1, 1, 'Lengua Materna. Español', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg'),
(4, 2, 1, 1, 2, 'Matemáticas', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `gmateria`
--

CREATE TABLE `gmateria` (
  `idgmateria` int(11) NOT NULL,
  `gmateria` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gmateria`
--

INSERT INTO `gmateria` (`idgmateria`, `gmateria`) VALUES
(1, 'Lengua Materna. Español'),
(2, 'Matemáticas'),
(3, 'Conocimiento del Medio'),
(4, 'Formación Cívica y Ética'),
(5, 'Lecturas');

-- --------------------------------------------------------

--
-- Table structure for table `nivel`
--

CREATE TABLE `nivel` (
  `idnivel` int(11) NOT NULL,
  `nivel` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nivel`
--

INSERT INTO `nivel` (`idnivel`, `nivel`) VALUES
(1, 'Preescolar'),
(2, 'Primaria'),
(3, 'Telesecundaria');

-- --------------------------------------------------------

--
-- Table structure for table `perfil`
--

CREATE TABLE `perfil` (
  `idperfil` int(11) NOT NULL,
  `perfil` varchar(45) NOT NULL,
  `icon` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `perfil`
--

INSERT INTO `perfil` (`idperfil`, `perfil`, `icon`) VALUES
(1, 'Alumno', 'fa fa-user-graduate -alt'),
(2, 'Maestro', 'fas fa-chalkboard-teacher'),
(3, 'Familia', 'fas fa-users'),
(4, 'Aula', 'fas fa-school');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`idcontenido`),
  ADD KEY `F_id_nivel_idx` (`id_nivel`),
  ADD KEY `F_id_pefil_idx` (`id_perfil`),
  ADD KEY `F_id_gmateria_idx` (`id_gmateria`);

--
-- Indexes for table `gmateria`
--
ALTER TABLE `gmateria`
  ADD PRIMARY KEY (`idgmateria`);

--
-- Indexes for table `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`idnivel`);

--
-- Indexes for table `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`idperfil`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contenido`
--
ALTER TABLE `contenido`
  ADD CONSTRAINT `F_id_gmateria` FOREIGN KEY (`id_gmateria`) REFERENCES `gmateria` (`idgmateria`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `F_id_nivel` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`idnivel`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `F_id_pefil` FOREIGN KEY (`id_perfil`) REFERENCES `perfil` (`idperfil`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

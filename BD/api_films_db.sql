-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 01 déc. 2021 à 12:27
-- Version du serveur :  10.4.8-MariaDB
-- Version de PHP :  7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `api_Films_db`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteFilm` (IN `Id` INT)  NO SQL
delete from Films where Films.Id=Id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getFilmById` (IN `Id` INT)  NO SQL
select * from Films where Films.Id=Id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getFilms` ()  NO SQL
select *  from Films$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `setFilm` (IN `Titre` VARCHAR(45), IN `Realisateur` VARCHAR(45))  NO SQL
BEGIN

INSERT INTO Films (Titre,Realisateur)values(Titre,Realisateur);

SELECT LAST_INSERT_ID();

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdFilm` (IN `Id` INT, IN `Titre` VARCHAR(45) CHARSET utf8, IN `Realisateur` VARCHAR(45) CHARSET utf8)  NO SQL
UPDATE Films set Films.Realisateur=Realisateur, Films.Titre=Titre where Films.Id=Id$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `Films`
--

CREATE TABLE `Films` (
  `Id` int(11) NOT NULL,
  `Realisateur` varchar(45) NOT NULL,
  `Titre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Films`
--

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Films`
--
ALTER TABLE `Films`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Films`
--
ALTER TABLE `Films`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

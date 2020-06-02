-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 20-05-14 11:07
-- 서버 버전: 10.3.15-MariaDB
-- PHP 버전: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `lmk`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `project`
--

CREATE TABLE `project` (
  `num` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `url` varchar(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `upload` varchar(200) NOT NULL,
  `contents` text NOT NULL,
  `state` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `project`
--

INSERT INTO `project` (`num`, `title`, `url`, `date`, `upload`, `contents`, `state`) VALUES
(2, 'Mr.wick', 'johnwick', '2020-05-12', '/admin/upload/thum/img_logo.png', 'logo2', ''),
(3, 'mini', 'minideco!', '2020-05-13', '/admin/upload/thum/logo.png', 'logo3', '');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`num`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `project`
--
ALTER TABLE `project`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

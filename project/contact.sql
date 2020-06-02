-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 20-05-14 11:49
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
-- 테이블 구조 `contact`
--

CREATE TABLE `contact` (
  `num` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `contents` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `contact`
--

INSERT INTO `contact` (`num`, `name`, `subject`, `email`, `contents`, `date`) VALUES
(16, 'sdfw', 'sdf', 'eryffff@naver.com', 'dfewwwwetty', '2020-05-13'),
(17, 'uuuuy', 'uuuiyui', 'yuiiiyui@naver.com', 'eeewrt', '2020-05-13'),
(18, 'ddd', 'er', 'werrre@naver.com', 'dfwert', '2020-05-13'),
(19, 'uuuuy', 'uuuiyuiertyudfg', 'yuiiiyui@naver.com', 'eeewrtfgert', '2020-05-13'),
(20, 'uuuuy', 'uuuiyuiertyudfg', 'yuiiiyui@naver.com', 'eeewrtfgerttyu', '2020-05-13'),
(21, 'uuuuy', 'uuuiyuiertyudfg', 'yuiiiyui@naver.com', 'eeewrtfgertjkji', '2020-05-13');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`num`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `contact`
--
ALTER TABLE `contact`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

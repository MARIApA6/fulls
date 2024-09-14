DROP TABLE IF EXISTS `test_grades`;
CREATE TABLE IF NOT EXISTS `test_grades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `testId` int(11) NOT NULL,
  `studentId` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=383 DEFAULT CHARSET=utf8;

INSERT INTO `test_grades` (`id`, `testId`, `studentId`, `grade`) VALUES
(1, 11, 1, 58),
(2, 25, 1, 61),
(3, 17, 1, 93),
(4, 8, 1, 46),
(5, 1, 1, 94),
(6, 23, 1, 42),
(7, 26, 2, 96),
(8, 25, 2, 60),
(9, 2, 2, 55),
(10, 13, 2, 64),
(11, 17, 2, 42),
(12, 22, 2, 69),
(13, 23, 2, 75),
(14, 16, 2, 100),
(15, 15, 2, 85),
(16, 21, 2, 48),
(17, 16, 3, 49),
(18, 14, 3, 59),
(19, 22, 3, 60),
(20, 21, 3, 95),
(21, 4, 3, 48),
(22, 23, 3, 74),
(23, 25, 3, 89),
(24, 19, 3, 67),
(25, 12, 3, 49),
(26, 11, 4, 49),
(27, 25, 4, 94),
(28, 13, 4, 54),
(29, 7, 4, 80),
(30, 26, 4, 46),
(31, 24, 4, 61),
(32, 28, 4, 84),
(33, 15, 4, 96),
(34, 5, 4, 87),
(35, 14, 5, 51),
(36, 12, 5, 66),
(37, 25, 5, 98),
(38, 13, 5, 49),
(39, 2, 5, 59),
(40, 1, 5, 91),
(41, 10, 5, 40),
(42, 19, 5, 77),
(43, 26, 5, 82),
(44, 14, 6, 86),
(45, 10, 6, 95),
(46, 12, 6, 89),
(47, 30, 6, 65),
(48, 23, 6, 47),
(49, 7, 6, 93),
(50, 18, 6, 43),
(51, 1, 7, 100),
(52, 24, 7, 57),
(53, 25, 7, 62),
(54, 4, 7, 61),
(55, 18, 7, 56),
(56, 12, 7, 80),
(57, 7, 8, 94),
(58, 28, 8, 81),
(59, 24, 8, 94),
(60, 2, 8, 42),
(61, 23, 8, 63),
(62, 14, 8, 69),
(63, 11, 8, 75),
(64, 30, 8, 66),
(65, 19, 8, 50),
(66, 15, 8, 58),
(67, 28, 9, 92),
(68, 3, 9, 77),
(69, 4, 9, 69),
(70, 15, 9, 47),
(71, 8, 9, 68),
(72, 27, 9, 73),
(73, 24, 9, 49),
(74, 14, 9, 63),
(75, 29, 10, 69),
(76, 26, 10, 82),
(77, 11, 10, 82),
(78, 20, 10, 55),
(79, 17, 10, 88),
(80, 4, 10, 90),
(81, 23, 10, 93),
(82, 1, 10, 98),
(83, 25, 11, 94),
(84, 4, 11, 51),
(85, 16, 11, 58),
(86, 20, 11, 81),
(87, 17, 11, 72),
(88, 19, 11, 48),
(89, 2, 11, 93),
(90, 26, 11, 41),
(91, 23, 11, 71),
(92, 30, 11, 42),
(93, 10, 12, 71),
(94, 30, 12, 63),
(95, 12, 12, 66),
(96, 17, 12, 54),
(97, 9, 12, 79),
(98, 26, 12, 73),
(99, 13, 12, 62),
(100, 5, 12, 81),
(101, 9, 13, 86),
(102, 16, 13, 41),
(103, 28, 13, 64),
(104, 18, 13, 69),
(105, 1, 13, 55),
(106, 11, 13, 49),
(107, 19, 13, 84),
(108, 14, 13, 59),
(109, 7, 13, 100),
(110, 5, 14, 80),
(111, 14, 14, 52),
(112, 8, 14, 68),
(113, 26, 14, 70),
(114, 27, 14, 87),
(115, 29, 14, 57),
(116, 25, 14, 97),
(117, 7, 14, 40),
(118, 16, 15, 68),
(119, 15, 15, 64),
(120, 2, 15, 70),
(121, 8, 15, 52),
(122, 28, 15, 94),
(123, 13, 15, 64),
(124, 19, 15, 90),
(125, 10, 16, 90),
(126, 30, 16, 83),
(127, 1, 16, 78),
(128, 19, 16, 88),
(129, 8, 16, 93),
(130, 11, 16, 74),
(131, 27, 16, 96),
(132, 6, 16, 65),
(133, 19, 17, 63),
(134, 16, 17, 55),
(135, 9, 17, 60),
(136, 12, 17, 77),
(137, 26, 17, 68),
(138, 23, 17, 84),
(139, 22, 17, 50),
(140, 5, 18, 55),
(141, 14, 18, 44),
(142, 22, 18, 73),
(143, 10, 18, 91),
(144, 15, 18, 47),
(145, 18, 18, 64),
(146, 13, 18, 81),
(147, 29, 19, 53),
(148, 25, 19, 93),
(149, 19, 19, 63),
(150, 26, 19, 93),
(151, 16, 19, 47),
(152, 5, 19, 73),
(153, 6, 19, 68),
(154, 2, 19, 54),
(155, 22, 19, 66),
(156, 19, 20, 56),
(157, 29, 20, 96),
(158, 23, 20, 64),
(159, 20, 20, 93),
(160, 6, 20, 83),
(161, 8, 20, 96),
(162, 19, 21, 86),
(163, 13, 21, 51),
(164, 22, 21, 95),
(165, 15, 21, 84),
(166, 6, 21, 82),
(167, 25, 21, 69),
(168, 21, 21, 75),
(169, 28, 21, 65),
(170, 21, 22, 64),
(171, 12, 22, 44),
(172, 27, 22, 97),
(173, 4, 22, 51),
(174, 11, 22, 60),
(175, 20, 22, 88),
(176, 10, 22, 43),
(177, 3, 23, 53),
(178, 29, 23, 97),
(179, 15, 23, 90),
(180, 12, 23, 90),
(181, 28, 23, 71),
(182, 28, 24, 56),
(183, 7, 24, 87),
(184, 19, 24, 63),
(185, 1, 24, 75),
(186, 11, 24, 98),
(187, 13, 24, 85),
(188, 17, 24, 76),
(189, 16, 24, 59),
(190, 2, 24, 53),
(191, 7, 25, 77),
(192, 9, 25, 83),
(193, 25, 25, 89),
(194, 28, 25, 77),
(195, 10, 25, 79),
(196, 22, 25, 78),
(197, 27, 26, 44),
(198, 24, 26, 98),
(199, 15, 26, 89),
(200, 1, 26, 73),
(201, 19, 26, 59),
(202, 8, 26, 81),
(203, 17, 26, 100),
(204, 24, 27, 78),
(205, 13, 27, 43),
(206, 16, 27, 96),
(207, 10, 27, 41),
(208, 12, 27, 75),
(209, 19, 27, 43),
(210, 9, 27, 47),
(211, 15, 28, 68),
(212, 26, 28, 41),
(213, 18, 28, 49),
(214, 7, 28, 95),
(215, 30, 28, 41),
(216, 19, 28, 98),
(217, 16, 29, 44),
(218, 2, 29, 47),
(219, 10, 29, 65),
(220, 6, 29, 60),
(221, 9, 29, 94),
(222, 28, 29, 59),
(223, 30, 30, 86),
(224, 7, 30, 75),
(225, 22, 30, 64),
(226, 4, 30, 50),
(227, 29, 30, 82),
(228, 19, 30, 65),
(229, 24, 30, 73),
(230, 16, 30, 84),
(231, 6, 31, 40),
(232, 22, 31, 56),
(233, 10, 31, 40),
(234, 30, 31, 59),
(235, 23, 31, 72),
(236, 9, 31, 98),
(237, 19, 31, 72),
(238, 25, 32, 44),
(239, 18, 32, 40),
(240, 10, 32, 66),
(241, 7, 32, 90),
(242, 19, 32, 76),
(243, 22, 32, 64),
(244, 15, 32, 60),
(245, 26, 33, 77),
(246, 14, 33, 57),
(247, 25, 33, 40),
(248, 10, 33, 59),
(249, 20, 33, 75),
(250, 24, 33, 100),
(251, 9, 33, 99),
(252, 1, 33, 79),
(253, 17, 34, 65),
(254, 15, 34, 84),
(255, 23, 34, 83),
(256, 14, 34, 80),
(257, 20, 34, 63),
(258, 22, 34, 75),
(259, 25, 34, 49),
(260, 27, 34, 58),
(261, 6, 34, 87),
(262, 4, 35, 92),
(263, 18, 35, 94),
(264, 1, 35, 79),
(265, 16, 35, 80),
(266, 7, 35, 50),
(267, 27, 35, 48),
(268, 14, 35, 54),
(269, 13, 36, 55),
(270, 14, 36, 62),
(271, 22, 36, 65),
(272, 24, 36, 90),
(273, 17, 36, 49),
(274, 15, 36, 85),
(275, 25, 37, 95),
(276, 22, 37, 62),
(277, 30, 37, 87),
(278, 7, 37, 57),
(279, 1, 37, 51),
(280, 14, 37, 78),
(281, 18, 37, 53),
(282, 26, 37, 54),
(283, 26, 38, 64),
(284, 24, 38, 89),
(285, 7, 38, 94),
(286, 17, 38, 55),
(287, 3, 38, 83),
(288, 1, 38, 65),
(289, 4, 38, 58),
(290, 23, 39, 50),
(291, 2, 39, 96),
(292, 18, 39, 77),
(293, 3, 39, 91),
(294, 17, 39, 51),
(295, 22, 39, 57),
(296, 24, 39, 88),
(297, 13, 39, 73),
(298, 11, 39, 58),
(299, 15, 39, 57),
(300, 11, 40, 91),
(301, 26, 40, 86),
(302, 20, 40, 96),
(303, 13, 40, 54),
(304, 7, 40, 100),
(305, 5, 40, 75),
(306, 18, 41, 67),
(307, 14, 41, 95),
(308, 21, 41, 83),
(309, 12, 41, 73),
(310, 13, 41, 74),
(311, 24, 41, 49),
(312, 20, 41, 95),
(313, 7, 41, 79),
(314, 22, 41, 63),
(315, 23, 41, 43),
(316, 15, 42, 71),
(317, 14, 42, 43),
(318, 18, 42, 41),
(319, 4, 42, 72),
(320, 8, 42, 80),
(321, 13, 42, 74),
(322, 24, 42, 48),
(323, 27, 43, 51),
(324, 6, 43, 60),
(325, 15, 43, 90),
(326, 23, 43, 96),
(327, 7, 43, 85),
(328, 12, 43, 41),
(329, 26, 43, 72),
(330, 4, 43, 95),
(331, 16, 43, 55),
(332, 20, 43, 88),
(333, 21, 44, 57),
(334, 15, 44, 97),
(335, 8, 44, 60),
(336, 12, 44, 76),
(337, 13, 44, 71),
(338, 23, 44, 46),
(339, 10, 44, 41),
(340, 14, 45, 59),
(341, 3, 45, 75),
(342, 26, 45, 65),
(343, 7, 45, 77),
(344, 6, 45, 86),
(345, 22, 45, 83),
(346, 29, 45, 56),
(347, 10, 45, 99),
(348, 26, 46, 41),
(349, 30, 46, 86),
(350, 15, 46, 64),
(351, 2, 46, 50),
(352, 20, 46, 62),
(353, 5, 46, 71),
(354, 27, 47, 58),
(355, 5, 47, 91),
(356, 20, 47, 57),
(357, 2, 47, 57),
(358, 8, 47, 59),
(359, 15, 47, 52),
(360, 13, 47, 53),
(361, 29, 47, 48),
(362, 24, 48, 85),
(363, 23, 48, 78),
(364, 29, 48, 61),
(365, 4, 48, 49),
(366, 15, 48, 62),
(367, 3, 48, 93),
(368, 8, 49, 69),
(369, 29, 49, 97),
(370, 16, 49, 79),
(371, 13, 49, 88),
(372, 14, 49, 85),
(373, 30, 49, 84),
(374, 18, 49, 84),
(375, 26, 49, 73),
(376, 3, 49, 70),
(377, 27, 50, 46),
(378, 7, 50, 42),
(379, 26, 50, 71),
(380, 9, 50, 71),
(381, 17, 50, 53),
(382, 21, 50, 78);
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2025 at 09:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ck_springboot`
--

-- --------------------------------------------------------

--
-- Table structure for table `authorities`
--

CREATE TABLE `authorities` (
  `username` varchar(255) NOT NULL,
  `authority` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `authorities`
--

INSERT INTO `authorities` (`username`, `authority`) VALUES
('hung', 'ROLE_ADMIN'),
('tru', 'ROLE_MANAGER'),
('truong', 'ROLE_STUDENT');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `city`, `region`, `postal_code`, `country`) VALUES
(2, 'hungvo', 'demo', 'acza1', '12313', 'acb11', 'Gia lai'),
(3, 'hungvo13', 'demo', 'aczaa', 'Hungvo', '1231313131', 'USA'),
(0, 'demo', 'demo', 'acza1', 'glaa', 'acb11', 'Gia lai');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `details` text NOT NULL,
  `more_about` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `details`, `more_about`, `image`) VALUES
(2, 'Aglaonema Red Sumatra', 'Eye-catching, low-maintenance houseplant with bold red and green leaves.', 34.99, '- Feature 1: High-quality material\r\n- Feature 2: Robust and elegant design\r\n- Feature 3: Suitable for indoor decoration', 'Aglaonema Red Sumatra is a stunning variety of the Chinese Evergreen, renowned for its vibrant red and lush green foliage. Originating from tropical regions, this plant is appreciated for its unique appearance and effortless maintenance, making it a favorite among indoor plant enthusiasts.', '/img/edad1bbc-871c-489c-925d-91af39ee80bc.jpg'),
(3, 'Caladium bicolor', 'Striking ornamental plant known for its vibrant, heart-shaped leaves.', 24.99, '- Feature 1: High-quality foliage\r\n- Feature 2: Colorful and unique leaf patterns\r\n- Feature 3: Perfect for indoor and outdoor decor', 'Caladium Bicolor, commonly known as Heart of Jesus or Angel Wings, is a popular decorative plant admired for its bold, colorful leaves. Native to South America, this plant features an array of vibrant patterns, making it an eye-catching addition to any garden or indoor space.', '/img/ab32ba3e-cf50-434c-a09e-9cf063373157.jpg'),
(4, 'Aglaonema Rotundum Pink', 'Elegant houseplant with lush, rounded leaves accented by striking pink veins.', 32.99, '- Feature 1: High-quality foliage\r\n- Feature 2: Unique pink and green contrast\r\n- Feature 3: Ideal for indoor decoration', 'Aglaonema Rotundum Pink, a beautiful variety of the Chinese Evergreen, is cherished for its rounded, dark green leaves highlighted by vibrant pink veins. Native to tropical regions, this plant is a favorite among plant enthusiasts for its distinctive appearance and easy-care nature.', '/img/11f430ed-0dea-4e20-9e7d-bda455758f19.jpg'),
(5, 'Perilla frutescens', 'Versatile herb known for its aromatic leaves and unique flavor.', 19.99, '- Feature 1: High-quality, fragrant foliage\r\n- Feature 2: Rich in essential nutrients\r\n- Feature 3: Suitable for culinary and ornamental use', 'Perilla Frutescens, commonly known as Shiso or Beefsteak Plant, is an herbaceous plant native to East Asia. Renowned for its aromatic leaves with a hint of mint and basil, this plant is widely used in Asian cuisine and valued for its medicinal properties and decorative appeal.', '/img/3423cf85-67e0-4188-8cbb-f376b5d4e149.jpg'),
(6, 'tiger nâu', 'Stunning houseplant known for its vibrant, patterned leaves and graceful movements.', 27.99, '- Feature 1: High-quality, decorative foliage\r\n- Feature 2: Unique leaf patterns and colors\r\n- Feature 3: Ideal for indoor environments', 'Calathea, often referred to as the Prayer Plant, is cherished for its striking, patterned leaves that fold up at night, resembling hands in prayer. Native to tropical regions of South America, this plant is loved for its dynamic appearance and ability to thrive indoors with proper care.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbdSKSqOPguLe2I3whiH54B1wq-cclwk0yA&s'),
(7, 'demo', 'demo', 2000000.00, 'demo', 'demo', 'https://minhcaumart.vn/media/com_eshop/products/8934822801335.webp'),
(8, 'ramos gin fizz 1', 'demo', 1000000.00, 'coctails', 'demo', 'https://punchdrink.com/wp-content/uploads/2017/02/Article-Recipe-How-to-Make-Ramos-Gin-Fizz-Cocktail-Recipe-NOLA-Bar-Tonqiue.jpg'),
(9, 'ramos gin fizz', 'demo', 2000000.00, 'demo123\r\n', 'demo', 'https://sieuthitt.com/images/stories/virtuemart/product/tigerbac.jpg'),
(10, 'Mojito', 'Biểu tượng của mùa hè ', 4000000.00, 'thức uống mang đậm biểu tượng mùa hè', 'hãy order sẽ biết', 'https://www.thespruceeats.com/thmb/lFTuUOtCtmUu011vydbsNB2-m5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mojito-cocktail-recipe-759319-hero-01-038a050a144342b9aeea94d266d3527c.jpg'),
(11, 'demo', 'demo', 200000.00, 'demo', 'demo', 'https://www.thespruceeats.com/thmb/lFTuUOtCtmUu011vydbsNB2-m5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mojito-cocktail-recipe-759319-hero-01-038a050a144342b9aeea94d266d3527c.jpg'),
(12, 'demo12', 'demo', 2000000.00, 'demo', 'demo', 'https://punchdrink.com/wp-content/uploads/2017/02/Article-Recipe-How-to-Make-Ramos-Gin-Fizz-Cocktail-Recipe-NOLA-Bar-Tonqiue.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `enabled` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `enabled`) VALUES
('truong', '{bcrypt}$2a$12$Xl3NegfhVpVSB43rJky7Leg6Cb3zew2cJSutggXh9hWzMdDpmKK1W', 'demo12345@gmail.com', b'1'),
('tru', '{bcrypt}$2a$12$Xl3NegfhVpVSB43rJky7Leg6Cb3zew2cJSutggXh9hWzMdDpmKK1W', 'demo1234@gmail.com', b'1'),
('hung', '{bcrypt}$2a$12$Xl3NegfhVpVSB43rJky7Leg6Cb3zew2cJSutggXh9hWzMdDpmKK1W', 'demo123@gmail.com', b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

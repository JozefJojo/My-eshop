CREATE TABLE `User` (
  `id` text UNIQUE PRIMARY KEY NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `city` text NOT NULL,
  `address` text NOT NULL,
  `role` ENUM ('USER', 'ADMIN'),
  `cartId` text
);

CREATE TABLE `Producer` (
  `id` text,
  `name` text NOT NULL
);

CREATE TABLE `Product` (
  `id` text UNIQUE PRIMARY KEY NOT NULL,
  `title` text NOT NULL,
  `description` text,
  `thumbnail` text,
  `categoryId` text,
  `price` float NOT NULL,
  `productType` ProductType,
  `producerId` text
);

CREATE TABLE `Order` (
  `id` text NOT NULL,
  `totalCost` float NOT NULL,
  `DeliveryAddress` text NOT NULL,
  `UserAddress` text NOT NULL,
  `SubmissionDate` date,
  `orderLines` list,
  `status` ENUM ('AVAILABLE', 'UNAVAILABLE'),
  `userId` text
);

CREATE TABLE `OrderToOrderline` (
  `orderId` text,
  `orderlineId` text
);

CREATE TABLE `Orderline` (
  `id` text NOT NULL,
  `productId` text,
  `amount` int,
  `totalPrice` float
);

CREATE TABLE `Cart` (
  `id` text UNIQUE PRIMARY KEY NOT NULL,
  `orderLines` text NOT NULL
);

CREATE TABLE `CartToOrderline` (
  `orderLineId` text,
  `cartId` text
);

CREATE TABLE `Category` (
  `id` text UNIQUE PRIMARY KEY NOT NULL,
  `name` text NOT NULL
);

ALTER TABLE `User` ADD FOREIGN KEY (`cartId`) REFERENCES `Cart` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`producerId`) REFERENCES `Producer` (`id`);

ALTER TABLE `Order` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`id`);

ALTER TABLE `OrderToOrderline` ADD FOREIGN KEY (`orderId`) REFERENCES `Order` (`id`);

ALTER TABLE `OrderToOrderline` ADD FOREIGN KEY (`orderlineId`) REFERENCES `Orderline` (`id`);

ALTER TABLE `Orderline` ADD FOREIGN KEY (`productId`) REFERENCES `Product` (`id`);

ALTER TABLE `CartToOrderline` ADD FOREIGN KEY (`orderLineId`) REFERENCES `Orderline` (`id`);

ALTER TABLE `CartToOrderline` ADD FOREIGN KEY (`cartId`) REFERENCES `Cart` (`id`);

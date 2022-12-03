CREATE TABLE [User] (
  [id] text UNIQUE PRIMARY KEY NOT NULL,
  [email] text NOT NULL,
  [password] text NOT NULL,
  [city] text NOT NULL,
  [address] text NOT NULL,
  [role] nvarchar(255) NOT NULL CHECK ([role] IN ('USER', 'ADMIN')),
  [cartId] text
)
GO

CREATE TABLE [Producer] (
  [id] text,
  [name] text NOT NULL
)
GO

CREATE TABLE [Product] (
  [id] text UNIQUE PRIMARY KEY NOT NULL,
  [title] text NOT NULL,
  [description] text,
  [thumbnail] text,
  [categoryId] text,
  [price] float NOT NULL,
  [productType] ProductType,
  [producerId] text
)
GO

CREATE TABLE [Order] (
  [id] text NOT NULL,
  [totalCost] float NOT NULL,
  [DeliveryAddress] text NOT NULL,
  [UserAddress] text NOT NULL,
  [SubmissionDate] date,
  [orderLines] list,
  [status] nvarchar(255) NOT NULL CHECK ([status] IN ('AVAILABLE', 'UNAVAILABLE')),
  [userId] text
)
GO

CREATE TABLE [OrderToOrderline] (
  [orderId] text,
  [orderlineId] text
)
GO

CREATE TABLE [Orderline] (
  [id] text NOT NULL,
  [productId] text,
  [amount] int,
  [totalPrice] float
)
GO

CREATE TABLE [Cart] (
  [id] text UNIQUE PRIMARY KEY NOT NULL,
  [orderLines] text NOT NULL
)
GO

CREATE TABLE [CartToOrderline] (
  [orderLineId] text,
  [cartId] text
)
GO

CREATE TABLE [Category] (
  [id] text UNIQUE PRIMARY KEY NOT NULL,
  [name] text NOT NULL
)
GO

ALTER TABLE [User] ADD FOREIGN KEY ([cartId]) REFERENCES [Cart] ([id])
GO

ALTER TABLE [Product] ADD FOREIGN KEY ([categoryId]) REFERENCES [Category] ([id])
GO

ALTER TABLE [Product] ADD FOREIGN KEY ([producerId]) REFERENCES [Producer] ([id])
GO

ALTER TABLE [Order] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([id])
GO

ALTER TABLE [OrderToOrderline] ADD FOREIGN KEY ([orderId]) REFERENCES [Order] ([id])
GO

ALTER TABLE [OrderToOrderline] ADD FOREIGN KEY ([orderlineId]) REFERENCES [Orderline] ([id])
GO

ALTER TABLE [Orderline] ADD FOREIGN KEY ([productId]) REFERENCES [Product] ([id])
GO

ALTER TABLE [CartToOrderline] ADD FOREIGN KEY ([orderLineId]) REFERENCES [Orderline] ([id])
GO

ALTER TABLE [CartToOrderline] ADD FOREIGN KEY ([cartId]) REFERENCES [Cart] ([id])
GO

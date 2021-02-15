-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, Category.CategoryName
FROM Product
JOIN Category ON Product.CategoryId = Category.Id;

/* with substitutions (i.e. table-name abbreviations): */

SELECT ProductName, c.CategoryName
FROM Product AS p
JOIN Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT "Order".Id, Shipper.CompanyName
FROM "Order"
JOIN Shipper ON "Order".ShipVia = Shipper.id
WHERE "Order".OrderDate < "2012-08-09";

/* with substitutions (i.e. table-name abbreviations): */

SELECT o.Id, s.CompanyName
FROM "Order" AS o
JOIN Shipper AS s ON o.ShipVia = s.id
WHERE o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT Quantity, Product.ProductName
FROM OrderDetail
JOIN Product ON OrderDetail.ProductId = Product.Id
WHERE OrderDetail.OrderId = "10251";

/* with substitutions (i.e. table-name abbreviations): */

SELECT Quantity, p.ProductName 
FROM OrderDetail AS o
JOIN Product AS p ON o.ProductId = p.Id
WHERE o.OrderId = "10251";

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT 
	"Order".Id AS OrderId,
	Customer.CompanyName AS CustomerCompanyName,
	Employee.LastName AS EmployeeSurname
From "Order" 
JOIN Customer ON "Order".CustomerId = Customer.Id
JOIN Employee ON "Order".EmployeeId = Employee.Id;

/* with substitutions (i.e. table-name abbreviations) and without 'AS' keyword before column-name aliases: */ 

SELECT 
	o.Id OrderId,
	c.CompanyName CustomerCompanyName,
	e.LastName EmployeeSurname
From "Order" AS o
JOIN Customer AS c ON o.CustomerId = c.Id
JOIN Employee AS e ON o.EmployeeId = e.Id;
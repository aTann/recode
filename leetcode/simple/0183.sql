-- 183. 从不订购的客户
-- https://leetcode-cn.com/problems/customers-who-never-order/

-- 左联，CustomerId 是 null 的
-- 664ms	
SELECT Name AS Customers 
FROM Customers left join Orders 
  ON CustomerId = Customers.Id 
WHERE CustomerId IS NULL

-- 题解
-- 使用子查询和 NOT IN 字句
-- 681ms
SELECT Customers.Name as Customers
FROM Customers
where Customers.Id NOT IN
(
  SELECT customerid FROM Orders
)

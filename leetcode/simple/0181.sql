-- 181. 超过经理收入的员工
-- https://leetcode-cn.com/problems/employees-earning-more-than-their-managers/

# Write your MySQL query statement below
-- 内嵌查询，先查有有经理的雇员，然后再用 WHERE
-- 401 ms
SELECT 
b.Name Employee 
FROM 
Employee AS a , (SELECT Name, ManagerId, Salary FROM Employee HAVING ManagerId IS NOT NULL) AS b
WHERE a.Id = b.ManagerId AND a.Salary < b.Salary

-- JOIN
-- 417 ms	
SELECT 
b.Name Employee 
FROM 
Employee AS a JOIN (SELECT Name, ManagerId, Salary FROM Employee HAVING ManagerId IS NOT NULL) AS b
ON a.Id = b.ManagerId AND a.Salary < b.Salary


-- 题解1 使用 WHERE 语句
-- 525 ms
SELECT 
  a.Name AS 'Employee'
FROM
  Employee AS a,
  employee AS b
WHERE
  a.ManagerId = b.Id
    AND a.Salary > b.Salary

-- 题解二 使用 JOIN 语句
-- JOIN 是一个更常用也更有效的将表连起来的办法，我们使用 ON 来指明条件
-- 430 ms
SELECT
  a.Name AS Employee
FROM Employee AS a JOIN Employee AS b
  ON a.ManagerId = b.Id
  AND a.Salary > b.Salary

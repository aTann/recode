-- 182. 查找重复的电子邮箱
-- https://leetcode-cn.com/problems/duplicate-emails/

-- 使用 GROUP BY 和临时表
-- 443 ms
SELECT 
  Email 
FROM 
  (
    SELECT 
      Email, COUNT(Email) AS Count 
    FROM Person GROUP BY Email
  ) AS a 
WHERE Count > 1

-- 题解
-- 使用 GROUP BY 和 HAVING 条件
-- 671 ms
SELECT Email
FROM Person
GROUP BY Email
HAVING COUNT(Email) > 1

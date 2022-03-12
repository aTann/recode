-- 175. 组合两个表
-- https://leetcode-cn.com/problems/combine-two-tables/

SELECT 
  FirstName, 
  LastName, 
  City, 
  State 
FROM Person left join Address -- 外连接（outer join），默认 inner join
on Person.PersonId = Address.PersonId -- 使用 where 右边内容出现不存在，会失败


-- inner join：2表值都存在
-- outer join：附表中值可能存在null的情况。
-- 总结：
-- ①A inner join B：取交集
-- ②A left join B：取A全部，B没有对应的值，则为null
-- ③A right join B：取B全部，A没有对应的值，则为null
-- ④A full outer join B：取并集，彼此没有对应的值为null
-- 上述4种的对应条件，在on后填写。

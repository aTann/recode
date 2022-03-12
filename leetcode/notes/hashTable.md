1. [你还应该知道的哈希冲突解决策略](https://zhuanlan.zhihu.com/p/135248487)

   - 冲突技术：
     - 开散列方法（open hashing，也称拉链法，separate chaining）
     - 闭散列方法（closed hashing，也称开地址方法，open addressing）
   - 解决策略：
     - 线性探测(Linear probing)，闭散列法
     - 双重哈希(Doudle hashing)，闭散列法
     - 随机散列(Random hashing)，闭散列法
     - 分离链接(Separate chaining)，开散列法

2. [散列表](https://zh.wikipedia.org/wiki/哈希表)
3. [解决哈希冲突必须知道的几种方法](https://juejin.cn/post/6957625915295842317)
4. [哈希冲突解决方案之 HashMap](https://www.dbhc-doman.club/archives/130/hashmap-java/)
5. [HashMap 的扩容机制](https://zhuanlan.zhihu.com/p/114363420)
   > 一般情况下，当元素数量超过阈值时便会触发扩容。每次扩容的容量都是之前容量的 2 倍。
   >
   > HashMap 的容量是有上限的，必须小于 1<<30，即 1073741824。如果容量超出了这个数，则不再增长，且阈值会被设置为 Integer.MAX_VALUE（ [公式] ，即永远不会超出阈值了）。

# 195. 第十行
# https://leetcode-cn.com/problems/tenth-line/

# 4ms/3.8MB
awk 'NR == 10' file.txt # NR在awk中指行号
# 0ms/3.4MB
sed -n 10p file.txt #-n表示只输出匹配行，p表示Print
# 4ms/3.6MB
tail -n+10 file.txt|head -1 # tail -n +10表示从第10行开始输出
# 4ms/3.7MB
awk '{if(NR==10){print $0}}' file.txt
# 4ms/3.5MB
grep -n "" file.txt | grep -w '10' | cut -d: -f2 # -w 单词锚定

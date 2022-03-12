#!/bin/bash
# (001)  345-0000 通不过，中间有多个空格
re=[0-9]{3}-[0-9]{3}-[0-9]{4}
re1=[0-9]{3}-[0-9]{4}
re2=^\([0-9]{3}\)$
temp=''
for line in `cat ./notes/leetcode/simple/file.txt`
do
  if [[ "$line" =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]]; then
    echo $line
  elif [[ "$line" =~ ^[0-9]{3}-[0-9]{4}$ && $temp  ]]; then
    echo $temp $line
    temp=''
  elif [[ "$line" =~ ^\([0-9]{3}\)$ ]]; then
    temp=$line
  fi
done

# grep
grep -P '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt
awk '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/' file.txt
gawk '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/' file.txt

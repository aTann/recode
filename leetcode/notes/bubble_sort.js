var arr = [49, 38, 65, 97, 76, 13, 27, 49];

function bubbleSort(list) {
  let len = list.length;
  let begin = 0, end = len;

  for (begin = 0; begin < len; begin++) {
    for (end = 0; end + 1 < len - begin; end++) {
      if (list[end] > list[end + 1]) {
        [list[end], list[end + 1]] = [list[end + 1], list[end]]
      }
    }
  }
}

bubbleSort(arr)

console.log(arr);

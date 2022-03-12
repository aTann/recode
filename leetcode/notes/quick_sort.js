var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8, 9];

function quickSort(list, begin, end) {
  if (begin < end) {
    let key = list[begin];
    let left = begin;
    let right = end;

    while (left < right) {

      while (left < right && list[right] > key) {
        right -= 1
      }

      if (left < right) {
        list[left] = list[right]
        left += 1
      }

      while (left < right && list[left] < key) {
        left += 1
      }

      if (left < right) {
        list[right] = list[left]
        right -= 1
      }
    }

    list[left] = key;

    quickSort(list, begin, left - 1);
    quickSort(list, left + 1, end);
  }
}

quickSort(arr, 0, arr.length - 1);

console.log(arr);


// 算法导论实现方式
function qc(A, p, r) {
  if (p < r) {
    let q = pn(A, p, r);

    qc(A, p, q - 1);
    qc(A, q + 1, r);
  }
}

function pn(A, p, r) {
  let x = A[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i = i + 1;
      [A[i], A[j]] = [A[j], A[i]];
    }
  }


  [A[i + 1], A[r]] = [A[r], A[i + 1]];

  return i + 1;
}

var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
qc(arr, 0, arr.length - 1);

console.log(arr);

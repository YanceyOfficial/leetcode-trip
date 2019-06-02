// <1>.从第一个元素开始，该元素可以认为已经被排序；
// <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
// <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
// <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// <5>.将新元素插入到该位置后；
// <6>.重复步骤2~5。

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

// 复杂度 o(n^2) 稳定
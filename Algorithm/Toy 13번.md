## insertionSort

<br/>

> 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴한다. <br/>

<br/>

```js
const insertionSort = function (arr) {
  let result = [...arr];

  for (let i = 1; i < result.length; i++) {
    let temp = result[i];
    console.log(temp);
    let index = i - 1;

    while (index >= 0 && result[index] > temp) {
      console.log(result[index]);
      result[index + 1] = result[index];
      console.log(result[index + 1], index + 1);
      index--;
    }

    result[index + 1] = temp;
    console.log(result[index + 1]);
    console.log(temp);
  }

  return result;
};
let output = insertionSort([3, 1, 21]);
console.log(output);

// 로직 풀이
// i = 1

// temp = 1
// index = 0
// result[1] = 3
// index = -1
// result[0] = 1

// i = 2
// temp = 21
// index = 1
// result[2] = 21
```

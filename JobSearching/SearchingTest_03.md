## JobSearching Conding Test

<br/>

> 콜라츠 추측 <br/>

<br/>

```js
function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count > 500) {
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count;
}
```

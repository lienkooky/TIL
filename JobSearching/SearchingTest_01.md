## JobSearching Conding Test

<br/>

> 수박수박수박수박수박수? <br/>

<br/>

```js
function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += '박';
    } else {
      result += '수';
    }
  }
  return result;
}

console.log(solution(5));

// function solution(n) {
//     return "수박".repeat(n).substring(0,n)
//     }
```

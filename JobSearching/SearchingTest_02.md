## JobSearching Conding Test

<br/>

> K번째수 <br/>

<br/>

```js
function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0];
    let end = commands[i][1];
    let idx = commands[i][2];
    result.push(array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1]);
  }
  return result;
}
```

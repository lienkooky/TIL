## K번째수

<br/>

> 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. <br/>
> 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.<br/>
> 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다. <br/>
> 2에서 나온 배열의 3번째 숫자는 5입니다. <br/>
> 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요. <br/>

 </br>

> 제한사항</br>
> array의 길이는 1 이상 100 이하입니다. </br>
> array의 각 원소는 1 이상 100 이하입니다. </br>
> commands의 길이는 1 이상 50 이하입니다.</br>
> commands의 각 원소는 길이가 3입니다.포자는 수학을 포기한 사람의 준말입니다.</br>

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

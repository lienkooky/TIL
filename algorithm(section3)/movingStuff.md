## Greedy하게 짐 나르기

<br/>

> 박스를 최대한 적게 사용하여 모든 짐을 옮긴다. <br/>
> 무게를 담은 배열 stuff <br/>
> 무게 제한 limit <br/>
> 모든 짐을 옮기기 위한 박스의 최소 개수를 구한다. <br/>

```js
function movingStuff(stuff, limit) {
  // 우선 stuff의 요소들을 오름차순으로 정렬한다.
  // 그래야 박스가 몇 개 필요한지 알게 된다.
  let sorted = stuff.sort((a, b) => a - b);

  // stuff의 요소의 맨 끝 index(index는 0부터 시작)
  let largeIdx = sorted.length - 1;

  // stuff의 요소의 맨 앞 index(index는 0부터 시작)
  let smallIdx = 0;

  // count이다. 여기서는 박스에 2개 이상의 물건이 담긴 경우를 의미한다.
  let package = 0;

  // stuff의 첫 요소부터 마지막 요소까지 while문을 돌려준다.
  while (largeIdx > smallIdx) {
    // 박스에 2개를 담았을 때 limit보다 작거나 같은 경우를 뽑는다.
    if (sorted[largeIdx] + sorted[smallIdx] <= limit) {
      package++;
      largeIdx--;
      smallIdx++;
    } else {
      // 만약 limit을 넘는다면 배열의 최대길이에서 -1을 한다.
      largeIdx--;
    }
  }

  // 기본적으로 박스 한 개당 한개의 stuff요소를 넣는다.
  // 하지만 package는 박스 한 개에 2개의 stuff요소를 넣는다.
  // 따라서 전체 배열의 길이에서 package한 것(다중) 빼주면 필요한 박스의 개수가 나온다.
  return sorted.length - package;
}
```

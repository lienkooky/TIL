## (Advanced)[DP] 금고를 털어라 ocean

<br/>

> 훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type을 입력받아, <br/>
> 조지가 target을 훔칠 수 있는 방법의 수를 리턴한다. <br/>

<br/>

```js
// operation은 말을 움직이게 한다.(string 타입)
function boardGame(board, operation) {
  // 말을 상, 하, 좌, 우로 움직이게 하기 위한 배열을 만든다.
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  // 말이 움직일 때 놓일 x축 좌표, y축 좌표
  let X = 0;
  let Y = 0;
  // 말이 움직일 때 획득하게 될 점수
  let score = 0;

  const LEN = operation.length;

  // x,y는 0이상이어야하고 LEN의 길이보다는 작아야 한다.
  // 즉, 맵의 크기 안에서 돌아야 한다. 나가면 `OUT`
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  for (let i = 0; i < LEN; i++) {
    // 말이 움직인 좌표를 꺼낸다.
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;

    // 맵의 크기를 벗어나면
    if (isValid(Y, X) === false) return `OUT`;

    // 맵의 크기를 벗어나지 않았다면
    score += board[Y][X];
  }

  return score;
}
```

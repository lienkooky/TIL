## [GCD] 빼빼로 데이 divideChocolateStick

<br/>

> 먼저 출근해 있는 직원들에게 구매한 빼뺴로를 전부 나누어 주려고 한다. <br/>
> 출근한 직원 수에 따라 어떻게 빼빼로를 나누어 줄지 고민하고 있다. <br/>
> 직원 수에 따라 빼빼로를 나누어 주는 방법을 구하는 솔루션을 제공한다. <br/>

 <br/>

```js
function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}

function divideChocolateStick(M, N) {
  const result = [];
  // 최대공약수를 구한다.
  // M, N의 순서는 상관없다.
  const GCD = gcd(M, N);
  let temp = 0; //

  // 약수는 대칭적이므로 제곱근까지만 반복해도 된다.
  // 예) 36의 약수는 1, 2, 3, 4, 6, 9, 12, 18, 36이다.
  // 제곱근을 기준으로 양쪽의 값 하나씩 곱했을 때 36이 되기 때문에
  // 제곱근 보다 큰 약수는 제곱근보다 작은 약수에서 구할 수 있다.
  const sqrt = Math.floor(Math.sqrt(GCD));
  for (let left = 1; left <= sqrt; left++) {
    if (GCD % left === 0) {
      // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
      result.push([left, M / left, N / left]);
      if (left * left < GCD) {
        // 제곱근이 아닌 경우(제곱근 보다 작은)
        right = GCD / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
        result.push([right, M / right, N / right]);
      }
    }
  }

  // '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬
  result.sort((op1, op2) => op1[0] - op2[0]);

  return result;
}
```

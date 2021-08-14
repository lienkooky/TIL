## [조합] 블랙잭은 지겨워 boringBlackjack

<br/>

> 여러 장의 카드 중 세 장씩 조합해 소수가 되는 경우의 수를 리턴하는 함수를 완성한다. <br/>

 <br/>

```js
function boringBlackjack(cards) {
  let count = 0;

  // 1. cards 에서 카드 3장 뽑기
  let length = cards.length;
  // 카드 뽑는 방식은 첫 카드를 cards 의 0번 index 부터 고정해 놓고 1씩 뒤로 옮겨간다
  for (let i = 0; i < length; i++) {
    // 두 번째 카드의 인덱스는 첫 카드 + 1에서 시작해야 하고
    for (let j = i + 1; j < length; j++) {
      // 세 번째 카드의 인덱스는 두 번째 카드 + 1에서 시작해야 한다
      for (let k = j + 1; k < length; k++) {
        const number = cards[i] + cards[j] + cards[k];
        // 세 카드의 합이 소수이면 경우의 수 + 1
        if (isPrime(number)) count++;
      }
    }
  }

  //2. 소수 판별
  function isPrime(number) {
    // 2부터 비교하기 시작해서 나누어 떨어지는 수가 있으면 소수가 아니다
    // for 문 조건을 number/2 로 해도 되는 이유는 i > number/2 가 되면 몫이 절대 0이 될수 없기 때문에
    // number/2 까지만 비교해 보아도 소수 판별이 가능하다
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}
```

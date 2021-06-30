//algorithm basic 20번 문제
function compressString(str) {
  // 연속되는 문자를 기록하기 위한 변수
  // 첫 번째 문자로 초기화
  let before = str[0];

  // 동일한 문자의 반복 횟수
  let count = 1;

  // 정답으로 리턴할 문자열
  let result = '';

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + ' ';
  for (let i = 1; i < str.length; i++) {
    // 동일한 문자가 반복될 경우
    if (before === str[i]) {
      count++;
    } else {
      // 이전과 다른 문자일 경우,
      // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
      if (count >= 3) {
        result = result + `${count}${before}`;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }

  return result;
}

let output = compressString('abc');
console.log(output);

// 이해가 안되었던 부분은 before = str[i]
// 처음에는 before가 str[i]와 다를 때 countbefore해주고 다시 before로 돌아가니까 str[0]이 아닌가?
// 아래에 before = str[i]가 있으면 countberfore에 before가 str[0] 이 들어간다는건지 str[i] 가 들어간다는 건지 헷갈렸음
// 결론은, else안에 if문을 거치던 else문을 거치던 그 조건을 수행하고 나면 before는 str[i]가 된다 그러면 str[i]부터 다시 반복문이 시작된다.

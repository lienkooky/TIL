// 알고리즘 기본 13번 문제
// 문제 : 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴

function readVertically(arr) {
  // 0,0 1,0// 0,1 1,1// 0,2 1,2
  // code goes here
  let newStr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (newStr.length === j) {
        newStr.push(str[j]); // str = arr[0] 이 'hello' 라면 newStr = [] 여기에 ['h', 'e', 'l', 'l', 'o']
      } else {
        newStr[j] = newStr[j] + str[j]; // str = arr[1] 이 'world' 라면 newStr = ['h', 'e', 'l', 'l', 'o'] 여기에
      } // newStr[0] = newStr[0] + str[0] => ['hw', 'e', 'l', 'l', 'o']
    } // 이렇게 h가 바뀌는게 아니고 h에 뒤에 붙게 된다.
  }

  let result = '';
  for (let i = 0; i < newStr.length; i++) {
    result = result + newStr[i]; // 이 부분은 위에서 작업했던 newStr의 요소들을 문자열값으로 바꿔주는 작업니다.
  }

  return result;
}

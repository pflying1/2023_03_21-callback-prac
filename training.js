const stringExample = "참깨빵위에 순쇠고기 패티 두장 특별한 소스 양상추"

function splitString(stringParams) {
  //split 공백을 기준으로 판단함
  let result = stringParams.split(' ');
  return result;
}

function appendString(stringArray, callback){
  let body = "";
  //차례대로 실행시키는 역할 forEach
  stringArray.forEach(function(element){
    //밑에 elementMaker로 요소를 만들어 주는 이유가 이거 인거 같음
    body = body + element;
  });
  //function 안에 function이 있어서 여기서 불러와줌
  callback(body);
}
//템플릿 리터럴 값이 들어올자리
let bodyTemplate = ``;
let bodyTemplate2 = ``;
let resultCase = appendString(splitString(stringExample), function(body){
  // console.log(body);
  bodyTemplate += body.substring(body.matchAll());
  //indexOf 는 원하는 값을 찾아준다.
  //+1을 안넣어주면 "한"을 빼먹고 값이 나온다.
  //substring (0,??)0부터 ?? 까지 
  //끝 위치는 문자열의 길이보다 작아야한다.
  //앞에 0을 빼고 뒤에 값만 입력하면 "한"뒤에 문자열을 출력해준다.
  bodyTemplate2 += body.substring(0,body.indexOf("한")+1);

});

// 요소를 만들어 주는 이유? 
//함수 호출도 안해서 모르겠음
//아마 위에 body+ element 부분에서 요소를 만들어주면 위에서 판단하는 듯
function elementMaker(string) {
  return `<div>${string}</div>`;
}
console.log(bodyTemplate);
console.log(bodyTemplate2);
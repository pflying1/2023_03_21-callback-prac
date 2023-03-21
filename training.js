const stringExample = "참깨빵위에 순쇠고기 패티 두장 특별한 소스"

function splitString(stringParams) {
  //split 공백을 기준으로 판단함
  let result = stringParams.split(' ');
  return result;
}

function appendString(stringArray, callback){
  let body = "";
  //차례대로 실행시키는 역할 forEach
  stringArray.forEach(function(element){
    body = body + element;
  });
  callback(body);
}
let bodyTemplate = ``;
let resultCase = appendString(splitString(stringExample), function(body){
  console.log(body);
  //indexOf 는 원하는 값을 찾아주고 
  bodyTemplate += body.substring(0, body.indexOf("한")+1);

});

function elementMaker(string) {
  return `<div>${string}</div>`;
}
console.log(bodyTemplate);
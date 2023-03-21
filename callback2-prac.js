const exampleArray = [5,2,7,3,9,342,66,325];
function minValue(array,callback) {
  let min = array[0];
  for(let i =1; i < array.length; i++){
  if(array[i] < min) {
    min = array[i];
    }
  }
callback(min);
}
const minValueExample = minValue(exampleArray, function(result){
  return result *2;
})
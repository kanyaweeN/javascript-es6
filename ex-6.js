let height = undefined;
let result;

function isUndefined(num) {
  return num ?? "Height is not defined";
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
console.log(isUndefined(height));

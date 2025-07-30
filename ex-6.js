let height = undefined;
let result;
// let result = height ?? `Height is not defined`

function check(h){
    return h?? `Height is not defined`;
}

result = check(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

// console.log(Object.prototype.toString.call('123')); //[object String]
// console.log(Object.prototype.toString.call([])); //[object Array]
// console.log(Object.prototype.toString.call({})); //[object Object]
// console.log(Object.prototype.toString.call(123)); //[object Number]
// console.log(Object.prototype.toString.call(new Date())); //[object Date]

Array.myIsArray=function(obj){
    return Object.prototype.toString.call(obj)
}

console.log(Array.myIsArray('123')); //[object String]
console.log(Array.myIsArray([])); //[object Array]
console.log(Array.myIsArray({})); //[object Object]
console.log(Array.myIsArray(123)); //[object Number]
console.log(Array.myIsArray(new Date())); //[object Date]

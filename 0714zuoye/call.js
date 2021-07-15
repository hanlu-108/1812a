let a = {
    value: 1
}

function parent(sex, weight) {
    this.name = 'zcc'
    this.age = 23
    this.sex = sex ? sex : null
    this.weight = weight ? weight : null
    console.log('123')
}

//call的实现 接受参数的方式为 call(obj,params1,params2,......)
Function.prototype.myCall = function (context) {
    let currentObj = context ? context : window //这里就是传入的第一个参数
    currentObj.fn = this //将parent函数存起来 parent调用的myCall，此时this指向的就是该方法
    let arg = [...arguments].slice(1) //将参数中除了第一个之后的全部存起来 第一个就是上下文要用的这个对象
    console.log(...arg) //zyr 20
    currentObj.fn(...arg) // 将参数传入 此时调用fn的是currentObj 即为传入的对象a 所以parent中的this会指向a
    delete context.fn //将函数删除
}

//测试代码
parent.myCall(a, 'zyr', '20')
console.log(a); //{ value: 1, name: 'zcc', age: 23, sex: 'zyr', weight: '20' }
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

// 实现bind()方法 调用bind()必须是一个函数   可以通过new修改this  new的优先级最高 bind()可以将参数分两次传递进来
Function.prototype.myBind = function (context) {
    if(typeof this !== "function") { // 如果不是函数则直接抛出
        throw new TypeError('Error')
    }
    let self = this // 保存this,即为parent
    let arg = [...arguments].slice(1) // 将参数中除了第一个之后的全部存起来
    // bind()返回的是一个函数，所以可以使用new，并且会修改this的指向
    return function F() {
        if(this instanceof F) { // 如果new执行此时即为true
            return new self(...arg, ...arguments) // 返回new parent(第一次传递的参数， 第二次传递的参数) =》  arguments是执行返回的函数时的参数
        }
        return self.apply(context, [...arg, ...arguments]) // 如果没有执行new  那么直接执行parent,通过apply会将this执行最初传进来的对象a
    }
}

// 测试代码
let bindResult = parent.myBind(a, 'zyr')
let result = new bindResult('666')
console.log(result); //parent { name: 'zcc', age: 23, sex: 'zyr', weight: '666' }
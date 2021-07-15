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

//apply的实现 接受参数的方式为 apply(obj, [params1, params2, ......])
Function.prototype.myApply = function (context) {
    let currentObj = context ? context : window // 这里就是传入的第一个参数
    currentObj.fn = this // 将parent函数存起来,parent调用的myCall，此时this指向的就是该方法
    console.log(arguments) //[Arguments] {
                           //  '0': { value: 1, fn: [Function: parent] },
                           //  '1': [ 'zyr', '20' ]
                           //}
    if (arguments[1]) {
        currentObj.fn(...arguments[1])
    } else {
        currentObj.fn()
    }
    delete currentObj.fn
}

// 测试代码
parent.myApply(a, ['zyr', '20'])
console.log(a) //{ value: 1, name: 'zcc', age: 23, sex: 'zyr', weight: '20' }
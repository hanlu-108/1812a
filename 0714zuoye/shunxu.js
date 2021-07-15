// Event Loop执行：
//          同步任务
//          异步任务
//               宏任务：setTimeout, setInterval, ajax, requestAnimationFrame
//               微任务: promise的then，mutationObserve
//          执行顺序
//                同步任务 > 异步任务
//                微任务 > 宏任务


console.log(1);  //1.第一个同步任务
Promise.resolve(2).then(res => console.log(3)); //4.第一个微任务
new Promise((resolve, reject) => {
    console.log(4) //2.第二个同步立即执行的同步任务
    resolve(5) //5.第二个微任务
}).then((data) => {
    console.log(data);
    Promise.resolve().then(() => {
        console.log(6) //6.第三个微任务
    }).then(() => {
        console.log(7) //7.第四个微任务
        setTimeout(() => {
            console.log(8) //9.第四个微任务里的宏任务
        }, 0);
    });
})
setTimeout(() => {
    console.log(9); //8.宏任务
})
console.log(10); //3.第三个同步任务
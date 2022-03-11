
//冒泡排序
// var arr = [3, 4, 1, 2];
// function bubbleSort (arr) {
//     for (var j = 0; j < arr.length - 1; j++) {
//       // 这里要根据外层for循环的 j，逐渐减少内层 for循环的次数
//       var c = false
//       for (var i = 0; i < arr.length - 1 - j; i++) {
//         if (arr[i] > arr[i + 1]) {
//           var temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
            // [arr[i],arr[i++]] = [arr[i++],arr[i]]
//           c= false
//         }
        
//       }
//       if(c){
//         break
//       }
//     }
//     return arr;
//   }
//   bubbleSort(arr);
//   console.log(bubbleSort(arr));


//defineProperty 使用
// var obj ={}

// Object.defineProperty(obj ,"newKey" ,{
//   value:'hello',
//   writable:false
// });
// obj.newKey = "word"
// console.log(obj.newKey)

// 过滤唯一值
// const array = [1,2,3,1,2,3,1];
// const uniquerArra = [...new Set(array)];
// console.log(uniquerArra);

//类型转换字符串
// const val =1+"";
// console.log(typeof val);
// 转换number
// val1 = val*1;
// console.log(typeof val1);
// val2 = '12';
// val2 = +val2
// console.log(typeof val2);
// es7 幂 的简写 **
// es7前的写法 Math.pow(2,3)
// console.log(2**2);//result：8
//浮点转整数，以前 Math.floor()、Math.ceil()、Math.round()
// console.log(23.3 | 0);//23
// console.log(-23.3 | 0);//23
//删除最后一位数
// console.log(2355/10 | 0);
//删除最后两位
// console.log(2355/100 | 0);

//类型强制转换
// 可以用*1来转化为数字(实际上是调用.valueOf方法) 然后使用Number.isNaN来判断是否为NaN，
// 或者使用 a !== a 来判断是否为NaN，因为 NaN !== NaN

//使用boolean过滤数组中的所有假值(false、null、0、""、undefined、NaN)

// const funArr = arr => arr.filter(Boolean)
// const arrs = funArr([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])             // [ 1, 2, 3, 'a', 's', 34 ]
// console.log(arrs);
//双位运算符~~
// ~~4.5 //4
// ~~-4.5//-4

//短路运算符 逻辑运算符 与 && 或 ||
//判断寄偶
// const num=3;
// !!(num & 1)					// true
// !!(num % 2)					// true

//强制参数
// mandatory = ( ) => {
//   throw new Error('Missing parameter!');
// }
// foo = (bar = mandatory( )) => {            // 这里如果不传入参数，就会执行manadatory函数报出错误
//   return bar;
// }
//隐式返回值
//不能使用{} ，若要返回多行则使用()
// fun = ()=> 12 //12
//惰性载入函数
//  const funar = function(){
//    if(1==2){
//     funar = function(){
//       console.log(12);
//     }
//    }else{
//     funar = function(){
//       console.log(13)
//     }
//    }
//  } 
//精确到指定小数位小数
// const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
// console.log(round(123.146,1));

//数字补0
// const addZero1 = (num, len = 2) => (`0${num}`).slice(-len)
// const addZero2 = (num, len = 2) => (`${num}`).padStart(len , '0')
// console.log(addZero2(3434,7));

//reduce方法实现map 、filter
//reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// const numbers = [10, 20, 30, 40];
// const doubledOver50 = numbers.reduce((finalList, num) => {
//   num = num * 2;
//   if (num > 50) {
//     finalList.push(num);
//   }
//   return finalList;
// }, []);
// doubledOver50;            // [60, 80]

//统计数组中相同的个数

// var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
// var carsObj = cars.reduce(function (obj, name) {
//   obj[name] = obj[name] ? ++obj[name] : 1;
//   return obj;
// }, {});
//  console.log(carsObj); // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1}

//使用解构来交换参数值
// let param1 = 1;
// let param2 = 2;
// [param1, param2] = [param2, param1];
// console.log(param1) // 2
// console.log(param2) // 1

//数组去重
//includes 判断数组中是否包含指定的值
//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// var arr = [1,2,2,2,3,4,5,5,6,6,5]
//  let arrFun = arr.reduce((pre,cur)=>{
//     if(!pre.includes(cur)){
//       return pre.concat(cur)
//     }else{
//       return pre
//     }
//  },[])
//  console.log(arrFun);

 //二维数组转换为一维数组
// let arr = [[1,2],[3,4],[4,5],[5,6],[6,7]]

// const newArr = arr.reduce((pre,cur) =>{
  // return pre.concat(cur)
// },[])

//数组闭包的理解
//1、可以在一个函数的外部访问函数内部的变量的函数，被访问的变量可以和函数一通存在，即使这个函数运行结束导致，环境的销毁，这个变量也依然存在，，直到这个访问的函数运行结束才会销毁

// function add(){
//   var sum = 0;
//   return function operation(){
//     return sum = sum ? sum+1 : 1  
//   }

// }
// var a = add()
// console.log(a());//1
// console.log(a());//2
// console.log(a());//3
// console.log(a());//4

//js 作用域链 在函数中所访问的变量，按照层级关系所组成的一条有着先后顺序的链子，所以每个函数最先访问到的变量是当前函数活动的对象
//js 原型链

//js const 、let 、var
//1、var 可以使变量提升 cosnt let 不可以 
//2、cosnt 变量一经申明不可更改 且申明时必须赋值，
//3、var申明的全局变量，var let 申明变量 块级作用域

//切割字符串split()
//trim(),干掉字符串两端的空格
//toUpperCase()字符串转大写 
//toLowerCase()字符串转小写

//媒体查询@media
// viewport(视窗)的宽高
//设备的宽高
//设备朝向(手机横屏，竖屏)
//设备分辨率

//语法和操作符
// @media 查询条件表达式｛ CSS样式 ｝
//操作符not only and
//not 表示 除···以外 即排查某些特定的设备 如 @media not print（非打印设备），注意：not是针对一整条媒体查询语句，而非其中某一个条件

//and 表示并且 要求必须满足所有的表达式要求时，才能使用media定义的样式

//only 表示只有仅仅 表示只有某一种设备设备应用指定样式

//外链media属性
//浅拷贝：浅拷贝只复制指向某个对象的指针而不复制对象本身，新旧对象还是共享同一块内存。
//深拷贝：但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

//call、bind、apply 三种方法都是改变this的指向问题

//区别 bind 方法返回的是一个函数，还需要在调一次
//  apply 第二个参数接受一个数组

// function cat() { }

//   cat.prototype = {
//   food: "fish",
//   say: function(){
//       return("I love " + this.food);
//     }
//   };
//   var blackCat = new cat;
//   //blackCat.say();
//   var whiteDog = { food: "bone" };
//   console.log(
//   blackCat.say.call(whiteDog))

  //promise 利用promise可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，promise对象提供统一的接口，使得控制异步操作更加容易。

  // var promise = new Promise(function(resolve,reject){
  //   resolve(2)
  // })

  // promise.then(
  //         res => {
  //           return res*2
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           return Promise.resolve('aassa')
  //         }).then((res) => {
  //           console.log(res);
  // });

  //数组 方法filter 返回一个满足条件的数组

// var arr =[{
//   name:"小王",age:12},
//  {name:"小王",age:14},
//  {name:"小王",age:16},
//  {name:"小王",age:18}
// ]

// arr = arr.filter(item => item.age > 14)
// console.log(arr);

// // Object.keys(obj) 返回一个由给定对象自身可枚举属性组成的数组
// var a = ['倚天屠龙记','射雕英雄传','神雕侠侣']

// const b = Object.keys(a) // ['0','1','2',]
// console.log(b);

// var obj = { key1: 'a', key2: 'b', key3: 'c' };
// console.log(Object.keys(obj));//['key1','key2','key3']

// Vue 属性排放
//vue获取数据 管理加载状态

// async beforeMount(){
//   // 开始加载
//   this.loading = true
//   try {
//     const data = await getUserInfo()
//   } 
//   //失败
//   catch (error) {
//     console.log(error)
//   //成功失败都会执行
//   } finally {
//       // 停止加载
//   }
// }
// Proxy跨域
// proxy: {
//   "/api": {
//     target: 'http://.......',
//     changeOrigin: true, // 是否改变域名
//     ws: true, // socket
//     pathRewrite: {
//       // 路径重写
//       "/api": '' // 对拼接内容进行重写
//     }
//   },
// }

// var arr = [];
// console.log(Array.isArray(arr));

// 绝对全局对象globalThis
// console.log(globalThis);//window 适用复杂环境下直接操作window

//bigint 类型

//动态import

// bnt.onclick = function(){
//   //使用是引入，动态引入 。 返回一个promise
//     import('./test1').then((module) => {
//         module.test1()
//     })
      
// }

//可选链操作符
//相当于一个判断符，如果前面的有，就进入下一层级
// function main(config) {
//   const dbHost = config?.db?.host
//   console.log(dbHost) //192.168.1.100
// }

// main({
//   db: {
//     host: '192.168.1.100',
//     username: 'root',
//   },
//   cache: {
//     host: '192.168.1.200',
//     username: 'admin',
//   },
// })

//js class 类 属性的私有公有

//  class Person {
//     name = "halbt"//公共属性
//     #age = 18//私有
//     #weight = '100kg'

//     constructor(){//初始化构造器
//       console.log(this.name,this.#age,this.#weight);
//     }
// }

// var grl = new Person() // 实例化类
// console.log(grl.#age);

// Sybold 添加描述的description 获取描述
// let s = Symbol('字符串描述')
// console.log(s.description);

//数组方法flat 降低数组维度

// var arr= [[1,1,2],[1],[3,4,[4,3,4]]]

// const arr2 = arr.flat(2)
// console.log(arr2);

//字符串扩展方法
// let str = ' asd '
//清空头部空格
// console.log(str.trimStart());
//清除尾部空格
// console.log(str.trimEnd());

//对象扩展方法
// const obj = {
  // name:['哈利波特','邓布利肯'],
  // age:[23,113,],
  // Profession:['法师','校长']
// }
// const obj1 = Object.values(obj)//获取对象的所有值，返回一个数组
// const obj2 = Object.keys(obj)//获取对象的所有键，返回一个数组
// console.log(obj1);
// console.log(obj2);
// 
// console.log(JSON.stringify({name:'小王',age:12}));
// console.log(JSON.parse('{"name":"小王","age":12}'));
// JSON.stringify()//对象转json字符串
// JSON.parse()//json字符串转对象

//js对象与数组的转换

// var arr= [{name:'老王',age:"22"}] 

// await async 表达式 可以让异步操作，变为同步操作
//async 返回一个pramis 对象
// Promise.resolve 相当于 new promise(resolve => resolve(x))

 function getSomething() {
  return new Promise((resolve,reject)=>{
     setTimeout(() => { 
          resolve ("小王")
    }, 1000);
  })
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();




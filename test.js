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
//2、cosnt 变量一经声明不可更改 且声明时必须赋值，
//3、var声明的全局变量，var let 声明变量 块级作用域

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
// 
//  class Person {
//     name = "halbt"//公共属性
//     #age = 18//私有
//     #weight = '100kg'
// // 
//     constructor(){//初始化构造器
//       console.log(this.name,this.#age,this.#weight);
//     }
//       get name(){
//           return this.name
//       }
//       set name(val){
//         this.name = val 
//       }
// }

// var grl = new Person() // 实例化类
// console.log(grl.name = "麻瓜");set
// console.log(grl.name);get

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
//这是一个异步的操作
//  function getSomething() {
//   return new Promise((resolve,reject)=>{
//      setTimeout(() => { 
//           resolve ("小王")
//     }, 1000);
//   })
// }

// async function testAsync() {
//   return Promise.resolve("hello async");
// }

// async function test() {
//   const v1 = await getSomething();//等待定时器结束在执行
//   const v2 = await testAsync();
//   console.log(v1, v2);
// }
// test();

// Array.prototype.includes：用来检测数组中是否包含某个元素，返回布尔类型值

// const books = ['水浒传','西游记','三国演义','红楼梦']
// console.log(books.includes('西厢记'));//false
// console.log(books.includes('红楼梦'));//true

//es6引入方式
//通用引入方式
// import * as m1 from "./src/js/m1.js"
//结构赋值的方式
// import {test,test1} from "./src/js/m1.js"
//直接引入
// import m3 from "./src/js/m3.js"


//暴露语法汇总
// 统一暴露
//  const fun = ()=>{
//   console.log("语法");
// }

// const a = {
//   name:"乔峰",
//   age:12
// }
//export {fun,a}
//默认暴露
// export default function(){
// console.log("我是默认导出的");
// }

//1.Object.is 判断两个值是否完全相等
//2.Object.assign 合并对象
//3.Object.setPrototypeOf 设置原型对象 Object.getPrototypeof

//数值扩展

//对象的简化写法
// es6允许在大括号中直接写入变量和函数，作为对象的属性和方法，这样的书写更加简介

// let testname = "伏地魔"
// let Profession = function(){
//   console.log("黑魔法师");
// }   

// const obj = {
//   testname,
//   Profession,
//   age(){
//     console.log(200);
//   }
// }
// console.log(obj);

//模板字符串
// 采用``的形式定义字符串

//变量拼接
// let string = "我是一个" 

// console.log(`${string}模板`,typeof string);

//解构赋值es6允许按照一定模式从数组和对象中提取，对变量进行赋值，这被称为解构赋值
// 数组解构
// const arrName = ['郭靖','黄蓉','杨康','杨过','小龙女']

// const [a,b,c,d] = arrName

// console.log(a,b,c,d);
//对象解构赋值
// let obj = {
//   name:'张三',
//   age:18,
//   fun(){
//     console.log('条件');    
//   }
// }
// const {name,age,fun} = obj
// console.log(name,age,fun);

//箭头函数 
//箭头函数不会创建自己的this ，并始终指向上一层
//  var name = "教育"
//      function fun(){
//       console.log(this.name);
//     }

//     const fun1 = () => {
//       console.log(this.name);
// }

// fun();
// fun1()
//箭头函数不能构造实例化对象
// let fun = (name,age)=>{
// console.log(name,age);
// }

// var a = new fun("哈利波特",22)//err
//可以省略括号当形参只有一个，的时候可以省略括号
//当代码只有一句话时可以了省略大括号，并且return 也必须省略（函数的隐试返回）
// const fun = name => name = "哈利波特"

// console.log(fun("李华"));

//函数也可以使用解构赋值传参
//要是用解构赋值，参数必须加上{}
// const fun = ({name,age,height,KG=100})=>{
//     console.log(name+age+height+KG)
// }

//   fun({
//     name:"tome",
//     height:'180',
//     age:'12'
//   })

// rest参数 也叫剩余参数 一般放在参数最后面 也可以再函数内对rest参数重新赋值
// const fun = (a,...args)=>{
// args = 1
// console.log(a,args);
// }

// fun(1,2,3,5)//1  1
// const A = [1,2,3]
// const B = [4,5,6]
// 数组合并
// const C = [...A,...B];
// console.log(C);
//数组克隆
// const D = [...A] ;
// console.log(D);

//伪数组，就是像数组一样有 length 属性，也有 0、1、2、3 等属性的对象，看起来就像数组一样，但不是数组，比如
// var fakeArray = {
//   length: 3,
//   "0": "first",
//   "1": "second",
//   "2": "third"
// };

// <***===扩展运算符,也可以用来展开对象和字符串等, 方法与数组类似
// 值得注意的是, 扩展运算符在拷贝对象时为部分只有第一层是深拷贝其他层级为浅拷贝===***>

//ts class 的继承和修饰符
// 1、ts中class 定义使用关键字 class （定义一个类）extends（继承父类） super（重写父类方法）
// 2、子类方法名和父类方法名相同表示重写父类，不同表示继承
// 3、ts类中修饰符为三种 public 公有（默认）、protected 

// class person {
//   constructor(brand, price) {
//     this.brand = brand
//     this.price = price
//   }

//   call() {
//     console.log('我可以打电话')
//   }
// }

// let a = new person('1+', 1999)
// console.log(a) //person { brand: '1+', price: 1999 }

// Map集合
// es6提供的Map数据结构
// let m = new Map()
// m.set('name','ran')


// // 防抖
// const douc = function(fn,delay){
//   let val = null //借助闭包
//   return ()=>{ 
//       if(val){
//         clearTimeout(val)
//       }
//       val = setTimeout(fn,delay)
//   }
// }

// //防抖
// const debounce = function(fun,delay){
//   var val = true
//   return ()=>{
//     if(!val){
//      return false
//       }
//     }
//     val = false
//     setTimeout(() =>{
//       fun()
//       val = true
//     },delay)

// }

// 枚举类型
//数字枚举，字符串枚举
// 枚举的声明
// 数字枚举的声明可以分为两大类，带有初始化器和不带初始化器
// 不带初始化器，枚举成员默认冲零开始，依次递增;
// enum NumEnuml {one,two}
// NumEnuml.one//0
// NumEnuml.two//1

// enum NumEnum2 {
//   one = 10,
//   two,
//   three = 20,
//   four
// }
//初始化为赋值的时候取上一个枚举的值+1
// NumEnum2.two//11
// NumEnum2.four//21

//vue 过滤器
// Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。
// 过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。
// 过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：
// 使用 在双大括号中使用 
// {{message | capitalize}}
{ /* <div v-bind:id = 'rawId | formatId'></div> */ }

// 你可以在一个组件的选项中定义本地的过滤器：

// filters: {
//   capitalize: function (value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   }
// }

// 全局过滤器
// 当全局过滤器和局部过滤器重名时，会采用局部过滤器。
// Vue.filter('capitalize', function (value) {
//   if (!value) return ''
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })

// new Vue({
//   // ...
// })
// 过滤器可以串联 message的值会传入filterA中A的值回会
// 传入filterB中
// {{ message | filterA | filterB }}
// 过滤器是 JavaScript 函数，因此可以接收参数：
// {{ message | filterA('arg1', arg2) }} 

//over   

// 面试题

// 考题一延迟加载js的方式
// async defer
// async与html同步加载， 谁先加载完成谁先执行
// defer先执行 html在顺次执行js
// console.log(true + 1);//2
// consol.log("name" + true) //nametrue ;字符串有任何数据类型相加会变为字符串
// console.log(undefined + 1);//NaN

// 基本数据类型： string、 number、 boolean、 undefined、 null Symbol
// 引用数据类型： object
// NaN 是一个数值类型 但是一个数字

// console.log(typeof(null)); //object 

// null undefined 区别
// null 会被隐式的转为0 很不容易发现错误
// 现有的null后出的undefined 后者是为了填补之前的坑
// null表示 '无'// 的对象（ 空对象指针） 转换为数值时为0； undefined为 '未定义'转换为数值时为NaN

// == 与 === 区别、
// == 比较值 === 比较值和数据类型 
// ==
// 会别valuof 隐式转换数据的基本类型
// eg：
// string == Number || boolen..都会隐式转换
// console.log(1 == "1"); //true
// console.log([1, 2] == '1', '2');true
// ===
// console.log([1, 2] == '1', '2');false
// js 的微任务和宏任务
// js是单线程的语言
// js 代码执行流程 同步执行完成 ==》在执行事件循环
// 同步执行完成完成后才会执行时间循环的内容
// 进入事件循环： 请求、 定时器、 事件、、、

// 事件循环中包含了：【 宏任务、 微任务】
// 微任务： promis.then
// 宏任务： setTimeout
// 要执行宏任务的前提是清空了所有的微任务
// 流程： 同步-- > 事件循环【 微任务； 宏任务】-- > 微任务-- > 宏任务-- > 微任务...

// js作用域考题
// js 是没有块级作用域的出了函数
// 作用域链：内容部可以访问外部，外部不能访问内部
// *注意：内部如果有优先访问内部
// function() {
//     var a = 10
// }
// console.log(a);打印不出来 a is nodfind
// 注意： 声明变量时用var还是没写（ window.）是没有作用域的

// function() {
// var a = b = 10
// }
// console.log(b);//10
// 注意： js有变量提升机制（ 变量悬挂声明）、
// console.log(a);undefined
// var a = 10
// 优先级： 声明变量 > 声明普通函数>参数>变量提升
//申明普通函数是不看写的顺序的
// console.log(a); //fun a() {}
// a = 10;
// function a() {};

// js 对象
// 1、 对象是通过new操作符构建出来的，{除了引用的对象} 所以对象之间不相等
// eg： console.log([1, 2, 3] === [1, 2, 3]) //false
// var obj = {
//     a: 1
// }
// var obj1 = obj
// console.log(obj === obj1); //true
// 对象的key都是字符串类型
// var a = {
//     key: 'a'
// }
// var b = {}
// b[a] = "123"

// console.log(b[a]); //[obj,obj]:"123"

// 对象如何查找方法|属性的
// 先找本身的对象 = 》构造函数中去找 = 》对象自身原型上找 = 》构造函数的原型 = 对象上一次原型查找

// js 的作用域 + this指向 + 原型
// function a() {
// console.log('aaa');
// }
// 二者注意区别
// a() ///aaa
// a //返回函数体本身
// 2022.3 .24
// js 判断数组有哪些方法
// arr = [1, 2, 3]
// 方式一：  Array.isArray(arr)
// 方式二：  arr instanceof Array
// 方式三：原型上找Object.prototype.toSrting.call(arr).indexOf('Array' > -1)
// 方式四：Array.prototype.isPrototypeOf(arr)
// 方式五：arr.constructor.toString().indexOf("Array>-1")

// 数组slice 截取数组 arr.slice(1,3)//2,3 并返回一个新的数组
// splice 插入、删除、替换 会改变原数组 返回删除的元素
//找出二维数组最大值
// arr = [
//     [4, 5, 6],
//     [1, 2, 3], 
//     [7, 8, 9],
//     [1, 1, 2, 4]
// ]

// function funArr(arr) {
//     newArr = []
//     arr.forEach(item => {
//         newArr.push(Math.max(...item))
//     });
//     return newArr;
//}
// 123
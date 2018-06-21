/**
 * 一 ：Web前端面试之 原型和原型链 
 * 
 * javascirpt中万物皆对象，但对象也有区别，有 普通对象 和 函数对象！
 * 
 * Object，Function是js自带的函数对象
 * 
 * 目标：区分 函数对象  和 普通对象
 * 重点：通过 new Function()的方式进行创建的都是  函数对象
 * 
 * js自带的 Function Object函数对象，也是通过 new Function()创建的
 * 
 */
var o1 = {};
var o2 = new Object();
var o3 = new f1();

function f1(){};
var f2 = function(){};
var f3 = new Function("str","console.log(str)");

console.log(typeof Object);//js自带函数对象
console.log(typeof Function);//js自带函数对象

/*以下对象类型皆为 function*/
console.log(typeof f1);
console.log(typeof f2);
console.log(typeof f3);

/*以下对象类型皆为 object*/
console.log(typeof o1);
console.log(typeof o2);
console.log(typeof o3);


/**
 * 二：js 构造函数
 */
//父类函数(构造函数)
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.jod = job;
	this.sayName = function(){
		alert(this.name);
	}
}
//实例函数
var person1 = new Person("javascript","23","webengineer");
var person2 = new Person("java","25","backendengineer");
/*实例的构造函数属性（constructor）指向构造函数*/
console.log(person1.constructor == Person);//都是返回 true
console.log(person2.constructor == Person);

/**
 * 三：原型对象
 * js每当定义一个对象的时候，对象中都会包含一些预定义的属性，其中每个函数都有一个
 * prototype(原型)属性，这个属性指向函数的原型对象
 * 
 * 重点：每个对象都有_proto_属性，但是只有函数对象才有 prototype 属性
 * 
 * 在默认情况下，所有的原型对象都会自动获得一个 constructor(构造函数)属性，这个属性
 * （是一个指针）指向 protortype属性所在的函数(Person)
 * 
 * 结论：原型对象（也就是 普通对象）是构造函数（函数对象）的一个实例。
 */
function Person3(){};
console.log(Person3.prototype)
console.log(typeof Person3.prototype);//object
console.log(typeof Function.prototype);//function
console.log(typeof Object.prototype);//object
console.log(typeof Function.prototype.prototype);//Function.prototype是特殊的函数对象，因为她没有prototype属性

function Person2(){};
Person2.prototype.name = "javascript";
Person2.prototype.age = "25";
Person2.prototype.job = "webengineer";
Person2.prototype.sayName = function(){
	alert(this.name);
//这里还有一个默认的属性 constructor	
	
}

/**
 * Person2.prototype={
 * 	name:'Zaxlct',
   	age:28,
   	job:'Software Engineer',
   	sayName:function(){
   		alert(this.name);
   	}
   	
 * }
 */

var person3 = new Person2();
person3.sayName();

var person4 = new Person2();
person4.sayName();

console.log(person1.sayName() === person4.sayName());




































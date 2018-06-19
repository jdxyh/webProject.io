/**
 * 1 JavaScript算法练习:字符串反转
 * 
 * 目标：将提供的字符串反转输出
 * 思路：1 将字符串转转化为数组
 * 		 2 将数组元素反转
 * 		 3 将反转后的数组元素重新组成字符串
 * 
 * 方法1:使用内置函数：String.prototype.split()
 * 				Array.prototype.reverse()
 * 				Array.prototype.join()
 * 
 * 方法2:使用递减循环遍历将字符串反转
 * 
 * 方法3:使用递归方法实现字符串反转（略）
 */

function reverseString(str){
/*	//将传入的字符串转化为数组
	var inputArray = str.split("");
	//将数组元素反转
	var outputArray = inputArray.reverse();
	//将反转后的数组元素重新组成字符串
	var outString = outputArray.join("");
	
	return outputArray;*/
	
	//将上面算法简写：
	return str.split("").reverse().join("");
}

function reverseString2(str){
	var newString = "";
	
	for(var i = str.length-1; i>=0; i--){
		newString += str[i];
	}
	
	return newString;
}

/**
 * 2 JavaScript算法练习:数字阶乘
 * 
 * 目标：输入数字，计算出该数字的阶乘
 * 
 * 方法1：使用递归方法进行计算
 * 
 * 方法2：使用for循环进行计算
 */

function factorial(num){
	
	return num > 1 ? num * factorial(num - 1) : 1;
}

function factorial2(num){
	var result = 1;
	
	for(var i = 1;i <= num;i++){
		result *= i;
	}
	
	return result;
}

alert(factorial2(3));

alert(factorial(5));

alert(reverseString("hello"));

alert(reverseString2("javascript"));

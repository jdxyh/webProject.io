/**
 * javascript冒泡排序算法
 * 
 * 目标：通过冒泡排序方法重新排列数组元素
 * 思路：创建函数，嵌套一个双层for循环
 * 
 */

var array=[10,2,100,34,21];

function Bubblesort()
{
	this.mySort = function(array)
	{
		for(var i = 0; i < array.length;i++)
		{
			for(var j = 0;j < array.length -1 - i;j++)
			{
				if(array[j] > array[j+1])
				{
					//对两个变量进行调换
					var temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
		}
		return array;
	};
	
}

//创建对象
var bubblesort = new Bubblesort();

bubblesort.mySort(array);

alert(array);


var dt = new Date();
//通过调用valueOf()返回boolean对象的原始值
alert(dt.valueOf());//得到一个毫秒数
console.log(dt.valueOf());

var dt2 = new Date(dt.valueOf());
alert(dt2);





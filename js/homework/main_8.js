"use strict";

// 1 օրինակ
const review = {
	count(x,y){
		console.log(this.x >= this.y);
	}
};
review.count(8,20);


// 2 օրինակ 
const homeWork = {
	num(a,b,c){
       return a * b !== (c + b) / a;
	}
};
console.log(homeWork.num(4,5,6));



// 3 օրինակ
const sum = {
	sum_1(a,b,c,d){
       return (a + c) * b / d + a * (c + d);
	}
};
console.log(sum.sum_1(4,8,7,2));



// 4 օրինակ
const homeWork_2 = {
	sum(x,y,z){
       return x * (y + z) <= z / z;
	}
};
console.log(homeWork_2.sum(70, 15, 5));



// 5 օրինակ
const num = {
	num_2(value_1,value_2){
		return this.value_1 != this.value_2;
	}
};
console.log(num.num_2(25,"25"));


"use strict";

// 5 հատ for loop

//1
for(let i= 0; i <= 10; i++){
	console.log(i);
}

//2
for(let x = 25; x >= 5; x--){
	console.log(x);
}

//3
for(let y = 20; y >= 5; y--){
	if(y === 15){
		continue;
	}
	console.log(y);
}

//4
for(let j = 5; j <= 10; j += 1){
	console.log(j);
}

//5
for(let d = 45; d <= 55; ++d){
	console.log(d);
	if(d === 49){
		break;
	}
}

// 5 հատ while loop
//1
let o = 54;
while(o >= 41){
	if(o === 42){
		break;
	}
	console.log(o);
	o = o - 1;
}

//2
let s = 47;
while(s <= 64){
	if(s === 55){
		break;
	}
	console.log(s);
	s += 1;
}

//3
let z =52;
while(z <=60){
	console.log(z);
	z += 2;
}

//4
let d = 45;
while(d >= 30){
   console.log(d);
   d -= 5;
}

//5

let f = 78;
while(f < 100){
	if(f >= 90){
		break;
	}
	f++;
	console.log(f);
}

//do while loop
let r = 15;
do{
    console.log(r);
	r--;
} while(r >= 0 );
"use strict";


/*1․ ստեղծում ենք Object, որը իր մեջ կունենա Method և property-ներ,
 Method-ը պետք ա ինչ-որ տվյալներ վերադարձնի կանսոլում որոնք վերցնելու ա 
 property-ներից։*/

const num = {
	sum(a,b,c,d,e){
		return a >= c && c <= d || d !== b && e < a && d > a ;
	}
};
console.log(num.sum(2,15,4,5,6));

//2․ ստեղծում եք 10 հատ if, else if, else հրամաններով, օգտագործել այդ երեքը 

//2-1 օրինակ
let x = 15;
let y = 47;
let z = 14;

if(x <= y && z > x){
	console.log ("Ծրագրավորումը իմը չի։");
} else if (x === y || y < z){
	console.log("Ամեն դեպքում ճանապարհից հետ կանգնել չի կարելի։");
} else{
	console.log("Ես սիրում եմ ծրագրավորումը։");
}


// 2-2 օրինակ
let pers = {
	numberEmployees: 4,
    manager:{
		firstName:"Armen",
		lastName: "Pogkosyan",
		age: 45
	},
	asistant: {
		firstName:"Eva", 
		lastName: "Martirosyan",
		age: 27
	},
	accountant: {
		firstName:"Lily",
		lastName: "Sogkomonyan",
		age: 38
	},
	seller:{
		firstName:"Astgkik",
		lastName: "Petrosyan",
		age: 35
	},
	
};

if(pers.seller.age > 45){
	console.log("Նա ամենամեծ աշխատակիցն է կազմակերպության");
} else if(pers.asistant > pers.manager){
	console.log("Եվան ամենամեծն է մեր անձնակազմում։");
}else{
	console.log("Կազմակերպության ամենամեծ աշխատակիցը Արմեն Պողոսյանն է։");
}
	
//2-3 օրինակ
let lessonNumb = 20;

if(lessonNumb > 20){
	console.log("Աշակերտների թվաքանակը շատ մեծ է։");
} else if(lessonNumb >=50){
	console.log("Աշակերտների թվաքանակը 50-ն է։");
} else{
	console.log("Դասարանի աշակերտների թվաքանակը 20-ն է։");
}

// 2-4 օրինակ
let theMostHorsePower = {
	LotusEvija: 2000,
	AsparkOwl: 1985,
	RimacC_Two: 1914,
	ElationFreedom: 1903,
	PininfarinaBattista: 1900
};
let power = theMostHorsePower;
if(power.PininfarinaBattista >= power.ElationFreedom){
   console.log("Ամենամեծ ձիաուժով մեքենան Pininfarina Battista-ն է");
} else if(power.AsparkOwl < power.RimacC_Two){
	console.log("Ամենահզոր մեքենան Aspark Owl-ն է։");
} else{
    console.log("Lotus Evija-ն 2021թ-ի տվյալներով աշխարհի ամեամեծ ձիաուժ ունեցող մեքենան է, հզորությունը՝ 2000։");
}

//2-5 օրինակ
let bestNumb = [6, 4, 87, 95, 56, 41, 25, 35];

if(bestNumb[0] > bestNumb[3]){
   console.log("Զանգվածի ամենամեծ թիվն է");
} else if(bestNumb[2] === bestNumb[3]){
	console.log("Զանգվածի ամենամեծ թիվն է"); 
}else{
    console.log("Զանգվածի ամենամեծ թիվը 95-ն է");
}

//2-6 օրինակ
let myArray = [41, 4, 7, 89, 56];

if(myArray[0] < myArray[1] && myArray[3] < myArray[2]){
    console.log();
  }  else if(myArray[1] === myArray[4] || myArray[2] > myArray[4]){
      console.log();
	} else{
      console.log(`Ամենափոքր թիվը ${myArray[1]}-ն է։`);
	}

// 2-7 օրինակ
let f = 451;
let j = 497;
let I = 500;

if(f === 500){
	console.log("Ամենամեծ թվի փոփոխականը f-ն է։");
} else if(j === 500){
	console.log("Ամենամեծ թվի փոփոխականը J-ն է։");
} else{
	console.log("Ամենամեծ թվի փոփոխականը I-ն է։");
}

//2-8

const bestCountry = [
	{economic:"Զարգացած"},
	{nation: "Ապահովված"},
	{birthRate: "Ծնելիությունը բարձր"},
	{army: "հզոր"}
];
let best = bestCountry;

if(best.length === 3 ){
	console.log("Այս դեպքում երկիրը համարվում է ուժեղ երկիր");
} else if(best.economic + best.nation + best.birthRate + best.army === best.length){
	console.log("Նման երկիրն է համարվում ամենաուժեղ երկիրը։");
}else {
	console.log("Երկրի տնտեսությունը պետք է կայուն զարգանա,ազգը լինի ապահովված,ծնելիությունը՝բարձր,իսկ բանակը՝հզոր:");
}

//2-9

const topTouristCountry2021 =[
	{franceWithoutMilion:89},
	{spainWithoutMilion:82.8},
	{usaWithoutMilion: 79.1},
	];

let france = topTouristCountry2021.franceWithoutMilion;
let spain = topTouristCountry2021.spainWithoutMilion;
let usa = topTouristCountry2021.usaWithoutMilion;

if(spain === 89){
	console.log("2021թ-ին ամենաշատ տուրիստ ունեցել է Իսպանիան։");
} else if(usa === 89){
	console.log("2021թ-ին ամենաշատ տուրիստ ունեցել է Ամն-ն։");
} else {
	console.log("2021թ-ին ամենաշատ տուրիստ ունեցել է Ֆրանսիան։");
}

// 2-10
if(40/5 >= 10 && 45*5 < 87){
	console.log("True");
} else if(47 + 65*4 - (52+27) >= 3650 || 50*25 >= 30*85){
	console.log("True");
} else {
	console.log("Մենք չունենք True արժեքով հավասարում։");
}

//3․ ստեղծում եք 1 հատ if, else և ապահովում եք ճյուղավորում
let x1 = 4;
let y1 = 52;
let z1 = 2;
let x2 = 30;
let y2 = 65;
let z2 = 5;
if(x1 + y1 >= y2 || x2/z2 <= x1){
	console.log("true is the first 'if' ");
} else{
	if(z1 !== x2 && z1 + z2 < x1){
       console.log("in the 'if' of the 'else' is true");
	}else if((x1 + y1)*z1 === y2 || y2/z2 > y1){
       console.log("in the 'else if' of the 'else' is true");
	} else{
       console.log("in the 'else' of the 'else' is true");
	}
}

/*4․ Ստեղծում ենք 10 հատ ternary օպերատորով ստուգումներ, որոնցից 2ը պետք է 
լինի սթրինգի մեջ։ */

//4-1
let worker_1 ={
   firstName: "Artak",
   lastName: "Aramyan",
   age:47
};
console.log(worker_1.age >= 40 ? "He is Artak who is 47 age": "He is not Artak who is 47 age.");

//4-2

let productsOfMarket = {
	product_1 : {
	   name: "apple",
       price: "300AMD",
	   color:"yellow",
	   sort: "Demerjyan"
	},
	product_2 : {
	   name:"banana",	
       price: "700AMD",
	   color:"yellow",
	   sort:"Big"
	}

};

console.log(productsOfMarket.product_1.price === "300AMD" ? "I want to buy it" : "I don't want it.");

//4-3 
let prodMod = 45*5 +(65-41)/3;

console.log( prodMod <= 300 ? 233 : 350);

//4-4
const userName_1 = "Armen";
const userName_2 = "Armine";
const userName_3 = "Astgkik";
const userName_4 = "Anahit";

console.log(userName_1 === "Armen" ? "Armen" : "Astgkik");

//4-5
const group = {
	firstGroup: 400,
	secondGroup: 350,
	thirdGroup: 450
};
console.log(group.firstGroup <= group.thirdGroup ? "The third group is the most group" : "The first group is the most group");

// 4-6
let mostSalaryWorkForDeveloper = {
   usa: 63000,
   australia: 31000,
   switzerland: 62000
};
let salary = mostSalaryWorkForDeveloper;
console.log(salary.usa > salary.switzerland && salary.usa > salary.australia ? "The best salary for front-end developer is got in Usa." : "The best salary for front-end developer is got in Australia.");

//4-7
let myNumb = (45 + 74) - 855/5*(20) <= 520-45 / 25 + 41*25;
console.log(myNumb === true ? "'myNumb' variable is true" : "It is false");

//4-8
/*https://worldpopulationreview.com/country-rankings/oldest-countries*/
const theOldestCountryOfTheWorld = {
	Iran: "3200 BCE",
	Egypt: "3100 BCE",
	Vietnam: "2879 BCE",
	Armenia: "2492 BCE"
};
let oldest = theOldestCountryOfTheWorld;

console.log(oldest.Armenia === "2492 BCE" ? "Armenia is one of the oldest country in the world." : "Turkey is the oldest country of the world.");

//4-9
let e = 5, j = 10, p = 45, k = 4, l = 41, r = 52, s = 2, m = 5;
        //    15        9       164       
console.log(e + j !== p / m || k * l <= r / s ? true : false);

//4-10
const product= {
   a: {
	name:"apple",
	price: 300,
	from: "Armenia"
   },
   b: {
	name:"banana",
	price:650,
	from: "South Africa"
   }
};

product.c = {
	name:"grapes",
	price: 900,
	from: "France"
};
console.log(product.c.price > product.a.price && product.c.price > product.b.price ? "Խաղողը ամենաթանկ միրգն է մեր խանութում։" : "Ես չեմ գտել ամենաթանկ միրգը մեր խանութում։");


   







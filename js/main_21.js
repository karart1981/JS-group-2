"use strict";
/* 
+ 1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես 
forEach-ը
+ 2. ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով
+ 3. ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով
+ 4. ստեղծել ֆունկցիա, որը կաշխատի split-ի նման (տողը կվերցնի, կկտրի կդարձնի զանգված)
🔥 Ոչ պարտադիր / Բարդ
+ 5. ստեղծել ֆունկցիա SORT անունով, որը կաշխատի այնպես ինչպես SORT ալգորիմթը */ 

// 1
const arr = [45, 25, 87, 25, 14, 96];
function fe(mainArr){
  for(let i = 0; i<mainArr.length;i++){
	console.log(mainArr[i]);
  }
}
fe(arr);

//2
// version 1 of copy object
const product = {
	name:"Low Height Waterproof Hiking Shoe",
	descript:"100% Leather",
	size:[15, 16, 17],
	price:"50 euro",
	color:["grey", "black"],
	isAvailable:true
};

function copyFunc(mainObj){
  const copyMainObj = {};
  for(let key in mainObj){
	copyMainObj[key] = mainObj[key];
  }
  return copyMainObj;
}
const copyProduct = copyFunc(product);
product.size = [18, 19, 20];
product.price = "45 euro";
product.color = "black";
console.log(copyProduct);
console.log(product); 



//version 2 of copy object
const user_1 = {
name: "Anna",
lastName: "Minasyan",
age: 19,
location: "Armenia"
};
const copeUser_1 = Object.assign({},user_1);
user_1.name = "Arevik";
user_1.lastName = "Karapetyan";
user_1.age = 7;
user_1.location = "Cyprus";
console.log(user_1);
console.log(copeUser_1);


//version 3 of copy object
const country = {
  name:"Armenia",
  capitalCity: "Yerevan",
  population: 2963900,
  area: "29,743 km²",
  OfficialLanguages: "armenian"
};
const advisable = {...country};

country.name = "Great Armenia";
country.population = "50 million";
country.area = "3 million sq. km",

console.log(advisable);
console.log(country);


//version 1 of copy array
const colors = ["yellow", "blue", "green", "red"];

function copyArr(mainArr){
const copyArray = [];
for(let i in mainArr){
	copyArray[i] = mainArr[i];
}
return copyArray;
}
const copyColors = copyArr(colors);
colors[0] = "orange";
colors[1] = "dark blue";
colors[2] = "brown";
colors[3] = "pink";

console.log(colors);
console.log(copyColors);



//version 2 of copy array
const names = ["Gohar", "Ani", "Nazeli"];
const copyNames = Object.assign([], names);
names[0] = "Arevik";
names[1] = "Lucy";
names[2] = "Eva";
console.log(names);
console.log(copyNames);



//version 3 of copy array
const build = ["Garni", "Zvartnots", "Tatev Monastery"];
const newBuild = build.slice();
build[0] = "Yerevan circus";
build[1] = "Cascade museum";
build[2] = "Matenadaran";
console.log(newBuild);
console.log(build);



//version 4 of copy array
const menu1 = ["Qabab", "Barbecue", "Khashlama"];
const menu2 = ["Tolma", "Kufta", "Ghapama"];
const mainMenu = ["Spas", "Bread with jingyal", ...menu1, ...menu2];

console.log(mainMenu);



//version 5 of copy array
const numbers = [12, 13, 45, 46];
const copyNum = [...numbers];
numbers[0] = 54;
numbers[1] = 544;
numbers[2] = 5444;
numbers[3] = 54444;
console.log(numbers);
console.log(copyNum);



// function look like split operator

const str = "Armine Lusine Karine";
function sp(str, arr){
  const i = str.indexOf(" ");
  if (i > -1) {
    arr.push(str.slice(0, i));
    sp(str.slice(i + 1), arr);
  } else {
    arr.push(str);
  }
  return "";
};
function parts(str){
  const arr = [];
  sp(str, arr);
  return arr;
};
console.log(parts(str));
  


// function look like sort method
const n = [54, 12, 41];

function s(array) {
	let done = false;
	while (!done) {
	  done = true;
	  for (let i = 1; i < array.length; i++) {
		if (array[i - 1] > array[i]) {
		  done = false;
		  let tmp = array[i - 1];
		  array[i - 1] = array[i];
		  array[i] = tmp;
		}
	  }
	}
  
	return array;
  }
  
  console.log(s(n));






"use strict";
//destructuring
// տնային օր 1 / destucturing / array
const genresOfFilms = ["action", "documentary", "comedy", "horror", "romance", "thriller", "crime", "drama"];

const [act, doc, com, hor, rom, thril, crim , dram] = genresOfFilms;

console.log(`I love films of ${act}, ${doc}, ${com}, ${crim}, ${dram}.`);


// օր 2 / array
const userProfile = {
   name: "Armine",
   lastName: "Phogkosyan",
   age: 17,
   preferences: ["sport", "reading", "movie"]
};
const [sport, read, movie] = userProfile.preferences;

console.log(`${userProfile.name} have some preferences - ${sport}, ${read}, watching ${movie}s.`);


// օր 3 / array
const arr = [14, 52, -5, 87, 63, [4, 62, 52], 74];
const [a, b, c, d, e, f, g] = arr;
console.log(a, b, c, d, e, f, g);

// օր 4 / array
const newArr = [5, 78, 65, 4];
const [q,w,t,p] = newArr;
const i = q;
console.log(i,w,t,p);

// օր 5 / array
const names = ["Astgkik", "Mila", "Lucy", "Karine"];
const [ast, mil, luc, kar] = names;
let mer = ast;
mer = "Mery";
console.log(mer, mil, luc, kar);
console.log(ast, mil, luc, kar);

// օր 6 / array
const lastName = ["Simonyan", "Martirosyan", "Pogkosyan", [[[[["Karapetyan"]]]]]];
const [sim,mar,pogk,kar] = lastName;
console.log(`Hello ${kar}`);

// օր 7 / array / 6-ի օրինակը loop-ով
for(let i = 0; i < lastName.length; i++){
	console.log(`Your lastName is ${kar}.`);
	break;
}

// օր 8 / array 
const num = [1, 2];

const [num1, num2, ...rest] = [1, 2, 3, 4, 5];

console.log(rest); 

// օր 9 / array
const sumNum = [54, 52, 41];
const [sum1, sum2,sum3, sum4=5, sum5=87] = sumNum;
console.log(sum5);

// օր 10 / array
const arrLoop = [
	{name:"Artur"},
	{name:"Karen"},
	{name:"Arshavir"},
	{name:"Manuk"}
];
const [a1,a2,a3,a4] = arrLoop;
console.log(a1, a2, a3, a4);


// օր 1 / object
const userInfo_1 = {
	name_1:"Mila",
	lastName_1:"Minasyan",
    age_1:25,
	country_1:"Spain",
};
const {name_1,lastName_1,age_1,country_1} = userInfo_1;
console.log(`My name is ${name_1},lastName is ${lastName_1}, I am ${age_1} year age.`);


// օր 2 / object
const userInfo_2 = {
   name:"Arevik",
   "last-name":"Karapetyan",
   age:18,
   country:"Armenia"
};
const {name, a =userInfo_2["last-name"], age, country} = userInfo_2;

console.log(name, a);

// օր 3 / object
const userInfo_3 = {
	name_3:"Lilit",
	lastName_3:"Pogkosyan",
	age_3:45,
	country_3:"Italy",
	firiends_1:[
		{name_4:"Margar",lastName_4:"Yesayan",age_4:47,country_4:"Cyprus",friends_2:[]},
		{name_5:"Petros",lastName_5:"Minasyan",age_5:41,country_5:"Great Britain",friends_3:[]}
	]
};
const {name_4} = userInfo_3.firiends_1[0];
console.log(`${name_4} is my friend.`);

// օր 4 / object / 3 օրինակից
const {name_5, lastName_5, age_5, country_5, friends_3} =userInfo_3.firiends_1[1];
console.log(`Username is ${name_5} ${lastName_5}, he is ${age_5} year age,he lives in ${country_5}.`);


// օր 5 / object 
const famousBuildings ={
  name_b1: "Tower of Pisa",
  height_b1: "59 m",
  architect_b1: "	Bonanno Pisano",
  location_b1:"Pisa, Italy"
};

function printBuildInfo({name_b1,height_b1,architect_b1,location_b1}){
	console.log(`${name_b1} is in ${location_b1},it's height is ${height_b1}, architect-${architect_b1}.`);
}
printBuildInfo(famousBuildings);


// օր 6 / object
const famousBuildings2 = {
name_b2:"Tatev Monastery",
location_b2: "Syunik Province, Armenia",
style_b2: "armenian",
groundbreaking_b2: "8th century"
};

const {name_b2, location_b2, style_b2, groundbreaking_b2} = famousBuildings2;

if(style_b2 === "armenian"){
	console.log(`${name_b2} is in ${location_b2}.`);
} else{
	console.log(style_b2);
}

// օր 7 / object
const anyObj = {
	name:"Lily",
	hobby:["tennis", "reading book", "walking in the park"]
};
const {name, hobby} = anyObj;
const [tennis, book, walk] = anyObj.hobby;
console.log(`${name} has some hobby,she like play ${tennis}, ${book}, ${walk}.`);


// օր 8 / object
const famousBuildings3 ={
 name_b3:"the Great Wall",
 location_b3: "China",
 built_3: "over 2000 years",
};
const{name_b3,location_b3,built_3} = famousBuildings3;

console.log(`Being the longest man-made structure ever built, ${name_b3} is a global tourist attraction. Its great length and historic value define its uniqueness.It is a series of fortifications built by different emperors for ${built_3}, which were then joined together, resulting in ${name_b3}. The purpose of this wall was to protect the people of ${location_b3} from its enemies. It also served as a barrier for the Country to separate the Chinese people and their culture from the rest of the World.`);


// օր 9 / object
const options = {
	title: "Car",
	model: "BMW M5",
	year: 2020
  };
  const {title, model, year} = options;
  console.log(title); 
  console.log(model); 
  console.log(year); 

 // օր 10 / object
 const options_2 = {
	title_2:"Menu",
	size: {
	  width: 100,
	  height: 200
	},
	items: ["Cake", "Donut"],
	extra: true
  };
  
  const {title_2 ,size: {width,height},items: [item1, item2]} = options_2;
  
  console.log(title_2);  
  console.log(width);  
  console.log(height); 
  console.log(item1);  
  console.log(item2);  
















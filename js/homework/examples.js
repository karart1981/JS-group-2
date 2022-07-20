"use strict";
//toUppercas(),tolowercase
const text = "Armine learn java Script.";
const copyText = text.toUpperCase();
console.log(copyText);
const lo = copyText.toLowerCase();
console.log(lo);


// indexOf()
const t = "Պատմությունները մեջ Աշխարհը ձեզանից չի պահանջում բոլորը տեղի են ունենում Մերիլենդ նահանգի Կրոս Ռիվեր քաղաքի մտացածին քաղաքում, որը կառուցվել է երկրի միակ հաջողված ստրուկների ապստամբության առաջնորդների կողմից: Յուրաքանչյուր պատմություն հետևում է տարբեր հմայիչ բնակիչների `պայքարող երաժիշտի, որը նաև Աստծո վերջին որդին է, դոկտորի թեկնածու, որի ատենախոսությունն ակամայից քաոս է առաջացնում, ռոբոտ; Ընդհանուր առմամբ, հավաքածուն հյուսում է սուր քննադատություն, մռայլ հումոր և կախարդական ռեալիզմ ՝ հավատքի, սիրո, արդարության և բռնության խորը հետազոտությունների մեջ:";
console.log(t.indexOf("Աշխարհը"));


//slice(), substring
const anyText = "I have two girls: Arevik & Lucy. I love them very much.";
console.log(anyText.indexOf("Arevik"));
console.log(anyText.indexOf("Lucy"));
console.log(anyText.slice(18,24));
console.log(anyText.slice(18,24) + " " + anyText.slice(27,31));

console.log(`I love ${anyText.slice(18,24)} & ${anyText.slice(27,31)}.`);
console.log(anyText.substring(18,31));


//trim()
const newText = "     I have two girls.        ";
const cn = newText.trim();
console.log(cn);


// Math.floor, Math.round, Math.ceil
const a = 24.6;
console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));



// parseInt(), parseFloat()
const b = "1547.4A52";
console.log(parseInt(b));
console.log(parseFloat(b));


// toFixed
const c = 415;
console.log(c.toFixed(5));


//push()
const d = [14, 52, 25, 4];
d.push("Armine");
console.log(d);
d.push(function(){});
console.log(d);


//sort
const arr = [41, 25, 63, 12, 5];



console.log(arr.sort((a,b) => a-b));


const name = ["Karine", "Marine", "Armine", "Lusine"];
console.log(name.sort());

const anyNumb = [624,2, 45, 87, 1, 23, 4, 258];
const sortNumb = anyNumb.sort((a,b) => a-b );
console.log(sortNumb);


const any = Math.min(41,12,21,58,4,3,96);
console.log(any);
let newArr = [];
function sort(arr){
for(let i=0; i < arr.length;i++){
	if(Math.min(arr[i])){
		newArr = newArr.push(arr[i]);
		any - Math.min(any[i]);
	} 
      return newArr;
}
}
console.log(sort(any));


let x = [11, 13, 15, 17];
let y = [];

function mySpread_2(arr,copyArr){
	for(let i in arr){
		copyArr.push(arr[i]);
	}
	console.log(copyArr);
	
}
mySpread_2(x,y);


//splice() - վերցնում է զանգվածից էլէմենտներ ու ստեղծում նոր զանգված

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2,2);

console.log(days); // ["Monday", "Tuesday"]


// loop example 1
let arr_1 = [10, 11, 12, 13, 14, 15];
let result = 1;
for(let i = 0;i < arr.length;i++){
	result = result * arr[i];
}
console.log(result);

// loop example2
for(let i = 1; i <= 10;i++){
	if(i%2 !==0){
		console.log(i);
	}else{
		continue;
	}
	
}
// loop example 3
for(let i = 0; i<3; i++){
	for(let j = 0; j<3; j++){
		console.log(j);
	}
	
}

// loop example 4
let res = "";
let count = 10;
let counter = 0;
for(let i = 0; i < count;i++){
	if(count === counter){
		break;
	}
	res += i + " ";
	if(i === 2){
		console.log(res);
		res = "";
		i = -1;
		counter++;

	}
}

// splice example

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2,2);

console.log(days); // ["Monday", "Tuesday"]
console.log(months);















"use strict";

// Array methods
// զանգվածը իր մեջ դասավորում է էլեմենտները 100 հետո էլի 100 ․․․

1. pop() =>  /* այս մեթոդը զանգվածի վերջի էլեմենտը ջնջում է */

const arr = [14, 45, 62, 4, 48, 87, 65];
console.log(arr);
const some = arr.pop();//ջնջելով զանգվածի item-ը,հնարավոր է այն առանձին պահել /65
console.log(some);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
  


2. push() => /* այս մեթոդը զանգվածի վերջում ավելացնում է նոր էլեմենտ */

const newArr = [52, 42, 78, 5];
newArr.push(12);
console.log(newArr);
newArr.push(45,14,52); // հնարավոր է միաժամանակ մի քանի item-ներ ավելացնել
console.log(newArr); 



3. unshift() => //զանգվածի սկզբից ավելացնում է էլեմենտ 
//զգույշ պետք է օգտագործել,որովհետև ինդեքսների թվերը փոխում է
const myArr = [21, 5, 6, 8];
myArr.unshift(24);
console.log(myArr);



4. shift() => //զանգվածի սկզբից ջնջում է էլեմենտ
//զգույշ պետք է օգտագործել,որովհետև ինդեքսների թվերը փոխում է
const someArr = [41, 2, 5, 8, 96];
const u = someArr.shift();
console.log(someArr);
console.log(u); // նաև ջնջված էլեմենտը հնարավոր է պահել ուրիշ փոփոխականի մեջ



5.  forEach() => /* այն մեթոդ է,որը loop չի,բայց իր մեջ ունի loop: Այն իր մեջ
ստանում է call back: Այն մեթոդային loop է*/

const arr1 = [45, 2, 54, 62, 8, 7];
arr1.forEach(function(item, index, array){                
  console.log(`${index}: ${item} from ${arr1}`);
  console.log(item + 1); //item-ի արժեքը ավելացրեցինք 1-ով
});
//արգումենտների հերթականությունը կարևոր է



6. split(/*մեջը նշվումա են սիմվոլը,որով առանձնացնելու է սթրինգը և դարձնի զագված*/)
 => /* այս մեթոդը սթրինգը դարձնում է զանգված։ */

const str = "խնձոր բանան դեղծ ծիրան";
console.log(str.split(" ",4)); /* երկրորդ պարամետրով նշում ենք քանակը item-ների,
որոնք մտնելու են զանգվածի մեջ */



7. join() => // այս մեթոդը զանգվածը վերածում է string-ի

const any = ["բանան", "խնձոր", "անանաս", "ծիրան"];
console.log(any.join(", "));


8. splice() => /*այս մեթոդը ջնջում է զանգվածի տարրերը, բայց ջնջելով կարող ենք այն 
ուրիշ փոփոխականի մեջ պահենք։ */
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2,2);

console.log(days); // ["Monday", "Tuesday"]
console.log(months);


9. concat() => /* Այս մեթոդը մի զանգվածը միացնում է մյուսին*/
let A = [2, 13, 20];
let B = [7, 9];
let Z = A.concat(B); // Z ն այժմ ունի [2, 13, 20, 7, 9];
console.log(Z);


//array algoritms

1. sort() => /* letter - այս մեթոդով սորտավորում ենք տառերը ըստ հերթականության */

const tar = ["գ", "ե", "ա", "ֆ", "ու", "դ", "15", "Գ"];
console.log(tar.sort());

const letter = ["y", "f", "g", "j", "a", "15", "F"];
console.log(letter.sort());

// առաջնահերթություն ունի սկզբից թիվը, հետո մեծատառը, հետո փոքրատառը


2. sort() => /* number - թվերի դեպքում պետք է այլ ալգորիթմով սորտավորենք */

const number = [41, 4, 78, 3, 569, 254];
console.log(number.sort((a,b) => a - b ));




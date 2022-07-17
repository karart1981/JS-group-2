"use strict";
length/*string-ը ունի միայն մեկ property`*/ 

let str = "test string";
console.log(str.length); /* տառերի քանակ / ինդեքսերի քանակ + 1,քանի որ ինդեքսները 
սկսվում են 0-ից */

/*   property-ն այն է,որ մենք գրում ենք ինչ-որ բան ու չենք կանչում,իսկ մեթոդը 
մենք կանչում ենք   */
// length => index + 1
const arrLeng = [4, 21, 52, 63, 8];
arrLeng[99] = 41;
console.log(arrLeng.length);
console.log(arrLeng);
//{[․․․]} - array,որը իր մեջ ունի անսահման քանակի ինդեքսներ,որոնք չունեն արժեք


// string methods
 1. toUpperCase() - /* այս մեթոդով մենք տեքստի բոլոր տառերը դարձնում ենք մեծատառ */

 let text = "հանրագիտարան";
console.log(text.toUpperCase()); 
console.log(text); // վերևի փոփոխականը ինչ արժեք որ ուներ մնումա նույնը

const Upper = text.toUpperCase();
console.log(Upper); /*  ստեղծեցինք նոր փոփոխական,որ մենակ մեծատառով կգրի 
տվյալ տեքստը  */



2. tolowerCase() -  /* այս մեթոդով տեքստի բոլոր տառերը դարձնում ենք փոքրատառ */
console.log(Upper.toLowerCase());
console.log(Upper); // հինփոփոխականը մնումա նույն արժեքին
//տեքստի մեջի ինդեքսը հնարավոր չի փոխել, օր՝
let text = "հանրագիտարան";
text[0] = "Գ";
console.log(text); // տեքստի արժեքը մնում է նույնը



3. indexOf() - /*այս մեթդը ցույց է տալիս string-ի ինդեքսը */

let newString = "continue";
console.log(newString.indexOf("N"));  /* -1  նշանակում է չի գտել,քանի որ բառի մեջ
c տառն է իսկ մենք C մեծատառ ենք փնտրել  */
/* կարող ենք գրել*/ 

console.log(newString.toUpperCase().indexOf("N")); /* 2 - այսինքն 2 ինդեքսում է
N տառն է */

console.log(newString.indexOf("c"));  // 0, այսինքն 0 ինդեքսում է

console.log(newString.indexOf("tinu")); /* 3 - այսինքն 3րդ ինդեքսից այս բառն է */
// եթե տառից բառի մեջ երկու կամ ավել կա,նա բերում է առաջինը

let tex = "Text Text";
console.log(tex.indexOf("T"));  // 0 ինդեքսում




4. slice() -/* այս մեթոդով մենք նախադասությունից կտրում ենք առանձին բառեր */

const aboutMe = "My name is Artur, I am from Armenia.";
//կտրում ենք "I am from Armenia"

console.log(aboutMe.indexOf("I")); // 18
console.log(aboutMe.slice(0, 17));
console.log(aboutMe.slice(18, 36));  // I am from Armenia. 

//եթե կտրվում է վերջին բառը,կարող ենք վերջին ինդեքսը չգրել

//կարող ենք գրել այսպես
console.log(`${aboutMe.slice(18, 35)}, m${aboutMe.slice(1, 16)}.`);
console.log(aboutMe.slice(-13,-1));  //from Armenia



5. substring() - /*այս մեթոդը նույն է ոնց որ slice-ը,այսինքն նախադասությունից կտրում է 
բառեր,սակայն մի տարբերությամբ, որ substring-ը մինուսային թվեր չի հասկանում,
այսինք նախադասության հետևի ինդեքսից հաշված։*/


6. trim() - /*այս մեթդը դիմացից և հետևից նախադասության բացատները հանում է */

const info = "       The capital of Armenia, is Yerevan.       ";
console.log(info.trim()); // նախադասության մեջի բացատները հանեց


/* Number-ի մեթոդներ */

// Math => Object,իրեն js-ում գրադարան են ասում, ունի իր մեջ մեթոդներ
const someNum = 15.845;


1. Math.round   
console.log(Math.round(someNum)); /* մաթեմատիկայի օրենքների 
նման,եթե 1,4 - կլորացնում է դեպի ներքև, եթե 1,5 կամ 1,6 կամ ավել կլորացնում է 
դեպի վերև */


2. Math.ceil   
console.log(Math.ceil(someNum)); // կլորացնում է դեպի վերև


3. Math.floor   
console.log(Math.floor(someNum)); // կլորացնում է դեպի ներքև


4. parseInt() - /*այս մեթոդը string-ը դարձնում է թիվ և կլորացնում, բայց միայն
այն դեպքում, եթե սթրինգի առաջին ինդեքսը տառ չէ։Կամ եթե մջտեղում է տառ,ապա կտպի 
մինչև տառը  */
const n1 = "16.7px";
const int = parseInt(n1);
console.log(int);


5. parseFloat() - /* այս մեթոդը string-ը դարձնում է թիվ և գրում այդ թիվը */
const n2 = "16.7px";
const pars = parseFloat(n2);
console.log(pars);


6. toFixed() - /*այս մեթոդը թվի վերջում կետից հետո ավելացնում է 0-ներ,իսկ փակագծի
մեջ նշում ենք 0-ների քանակը  */
 
const price = 1500.62547;
console.log(`${price.toFixed(2)} $`); // վերջին թիվը կլորացնում է դեպի վերև



7. Math.min() - /* Այս մեթոդը վերադարձնում է ամենափոքր թիվը */

const any = Math.min(41,12,21,58,4,3,96);
console.log(any);



8. Math.max() - /* Այս մեթոդը վերադարձնում է ամենամեծ թիվը */

const maxNumb = console.log(Math.max(4, 56, 2, 47, 25, 9));




























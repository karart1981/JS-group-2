"use strict";
//1 call back անունով պատրաստի ֆունկցիա չկա js-ում,մենք իրան ստեղծում ենք
/* 2․ call back-ը ինքն իրեն չի աշխատում․ ստեղծվում է ֆունկցիա,որը մենք չենք 
կանչում,այլ փոխանցում ենք ուրիշ ֆունկցիայի,որ երբ այն կանչվի,կանչվի նաև call back
ֆունկցիան */
// 3. իրականում պարտադիր չի ֆունկցիայի անունը լինի callBack
/* callBack անունով արգումենտ ֆունկցիայի մեջ կարող ենք գրել ինչպես սկզբից,այպես էլ
հետո */
// օրինակ 1
function learnCallBack(text,callBack){
 console.log(text);
 callBack();
}

learnCallBack("Ես սովորում եմ Call Back",function(){
	console.log("Ես գիտեմ Call Back");
});

// օրինակ 2
function learn (someText,someF){
  console.log(someText);
  someF();

}
function finish(){
  console.log("I know Call Back.");
}
learn("I learn Call Back.", finish);

// 3 օրինակ
function proto(){
	console.log("https://");
}
function domain(){
	proto();
	console.log("www.google.com");
	
}
domain();


// 4 օրինակ
function person(name,ID,age,isAdult){
  console.log(`
  Անուն։ ${name},
  ID: ${ID},
  Տարիք։ ${age},
  Չափահաս է՞։ ${isAdult(age)}
  `);
}

function adult(val){
	if(val<18){
		val = "Ոչ";
	} else{
		val = "Այո";
	}
	return val;
}

const ara = person("Արա","ar18457i",25,adult);
const lili = person("Լիլի","liok5247",17,adult);






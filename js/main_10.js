"use strict";

/*1. Ստեղծում եք օբջեքթ, ու մեջը տարբեր փրոփերթիներ (ցանկացած) եք 
ստեղծում 5 հատ, ու if, else if, else-ով ստուգում եք, հետո նույնը թերնարի 
օպերատորով։ Գոնե 5 հատ*/
//1 օրինակ
const statitsticsOfRating = {
   fiveRating: 10,
   fourRating: 7,
   threeRating: 5,
   twoRating: 2
};

if(statitsticsOfRating.fiveRating >= 15){
	console.log("The class has a good index");
} else if(statitsticsOfRating.fourRating >= 15){
	console.log("The class has an average index");
} else{
    if(statitsticsOfRating.fiveRating <=15){
		console.log("The class has an average index");
	} else if(statitsticsOfRating.threeRating >=7 || statitsticsOfRating.twoRating >=7) 
		console.log("The class has a bad index");
}
switch(statitsticsOfRating.fiveRating){
   case statitsticsOfRating.fiveRating = 15: console.log("The class has a good index");break;
   case statitsticsOfRating.fourRating = 15: console.log("The class has an average index");break;
   case statitsticsOfRating.fiveRating <15: console.log("The class has an average index");break;
   case statitsticsOfRating.threeRating >7 || statitsticsOfRating.twoRating >=7: console.log("The class has a bad index");break;
   default: console.log("The class has an average index");
}

//2 օրինակ
const interestFacts = {
   fact_1: "Ելակը հատապտուղ չէ, իսկ բանանը՝ հատապտուղ է:",
   fact_2: "Միջին շոկոլադե բատոնը պարունակում է ութ կտոր միջատ։",
   fact_3: "Երկնքում ավելի շատ աստղ կա, քան ավազի հատիկ՝ ամբողջ աշխարհի ծովափերում, իրար հետ վերցրած։",
   fact_4: "Մեր մաշկն ամեն ամիս ամբողջությամբ թարմանում է։",
   fact_5: "Մոծակներն ավելի շատ մարդ են սպանել, քան պատմության բոլոր պատերազմները։"
};

if(interestFacts.fact_2 === 0){
   console.log("Ելակը հատապտուղ չէ, իսկ բանանը՝ հատապտուղ է:");
} else if(interestFacts.fact_3 === interestFacts.fact_5){
   console.log("Երկնքում ավելի շատ աստղ կա, քան ավազի հատիկ՝ ամբողջ աշխարհի ծովափերում, իրար հետ վերցրած։");
}else{
   console.log("Մոծակներն ավելի շատ մարդ են սպանել, քան պատմության բոլոր պատերազմները։");
}
switch(interestFacts.fact_5){
   case "Ելակը հատապտուղ չէ, իսկ բանանը՝ հատապտուղ է:": console.log("Ելակը հատապտուղ չէ, իսկ բանանը՝ հատապտուղ է:");break;
   case "Միջին շոկոլադե բատոնը պարունակում է ութ կտոր միջատ" : console.log("Միջին շոկոլադե բատոնը պարունակում է ութ կտոր միջատ։"); break;
   case "Երկնքում ավելի շատ աստղ կա, քան ավազի հատիկ՝ ամբողջ աշխարհի ծովափերում, իրար հետ վերցրած։" : console.log("Երկնքում ավելի շատ աստղ կա, քան ավազի հատիկ՝ ամբողջ աշխարհի ծովափերում, իրար հետ վերցրած։");break;
   case "Մեր մաշկն ամեն ամիս ամբողջությամբ թարմանում է։": console.log("Մեր մաշկն ամեն ամիս ամբողջությամբ թարմանում է։");break;
   case "Մոծակներն ավելի շատ մարդ են սպանել, քան պատմության բոլոր պատերազմները։": console.log("Մոծակներն ավելի շատ մարդ են սպանել, քան պատմության բոլոր պատերազմները։");break;
   default: console.log("Բոլոր տվյալները ճշգրիտ են։");
}


//2. ստեղծում եք 4 հատ switch 2ը թվերի դեպքում, երկուսը սթրինգների
//1 օրինակ
const tradition = {
   trndez:"փետրվարի 13",
   saltyBiscuits: "փետրվարի 14",
   vardavar: "հունիսի 10",
   tsaghkazard: "ապրիլի 10"
};

switch(tradition.vardavar){
	case "փետրվարի 13": console.log(`${tradition.vardavar}-ը վարդավառի օրն է`); break;
	case "փետրվարի 14": console.log(`${tradition.vardavar}-ը վարդավառի օրն է`);break;
    case "հունիսի 10": console.log(`${tradition.vardavar}-ը վարդավառի օրն է`); break;
	case "ապրիլի 10": console.log(`${tradition.vardavar}-ը վարդավառի օրն է`); break;
	default: console.log("Նշվածներից ոչ մեկ ավանդույթ չէ։");
}

//2 օրինակ
const capitalOfCountry = {
	armenia:"Yerevan",
	cyprus: "Nicosia",
	italy: "Rome",
	france: "Paris"
};

switch(capitalOfCountry.armenia){
  case "Paris": console.log(`${capitalOfCountry.armenia} is the capital of Armenia.`); break;
  case "Nicosia": console.log(`${capitalOfCountry.armenia} is the capital of Armenia.`);break;
  case "Rome": console.log(`${capitalOfCountry.armenia} is the capital of Armenia.`);break;
  case "Yerevan": console.log(`${capitalOfCountry.armenia} is the capital of Armenia.`);break;
  default: console.log("I don't know"); break;
} 

//3 օրինակ
let myArray = [10, 25, 45, 87];
switch(myArray[2]){
	case myArray[0] = 25: console.log(25); break;
	case myArray[1] = 10: console.log(10); break;
	case myArray[3] = 45: console.log(45); break;
	case myArray[2] = 87: console.log(87); break;
	default: console.log(45);
}

//4 օրինակ
const oneofMyDaughterAge = 5;
const olderMyDaughter = 7;

switch(oneofMyDaughterAge,olderMyDaughter){
	case 8: console.log("My little daughter is 5 age."); break;
	case 10: console.log("My older daughter is 7 age.");break;
	default: console.log("I have two daughter,Arevik & Lucy.");
}



/*3. ստեղծում եք առանձին switch ու փորձում եք միաժամանակ երկու բան ստուգել`
 թիվ և սթրինգ*/

 let x = 452;
 let y = "Armine";
 let z = 524;
 let o = "Astgkik";

 switch(x,y){
	case 524: console.log("This is a true number.");break;
	case "Astgkik": console.log("This is a string.");break;
	case 452: console.log("This is a true number.");break;
	case "Armine": console.log("This is a true string"); break;
	default: console.log("This is a number & a string.");
	}
 


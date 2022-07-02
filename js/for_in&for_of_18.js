"use strict";

const { values } = require("lodash");

// 1 օրինակ
const countryForTourism = {
  nameCountry:"Արգենտինա",
  capital:"Բուենոս Այրես",
  currency:"արգենտինական պեսո ( ARS )",
  largestCities:{
	city_1:"Բուենոս Այրես",
	city_2:"Կորդովա",
	city_3:"Ռոսարիո",
	city_4:"Մենդոսա",
	city_5:"Լա Պլատա" },
  officialLanguage:"իսպաներեն",
  aboutVisa:function(country){
     if(country === "Արգենտինա"){
		console.log(`Կես տարվա ընթացքում առնվազն 90 օր Արգենտինա այցելելու համար ՀՀ քաղաքացիներին վիզա անհրաժեշտ չէ։ Երկարաժամկետ այցելության համար անհրաժեշտ փաստաթղթերը պետք է ներկայացվեն Հայաստանում Արգենտինայի Հանրապետության դեսպանատուն։`);
	 }
  }
};

for(let key in countryForTourism){
	if(typeof countryForTourism[key] === "object"){
		for(let nkey in countryForTourism[key]){
		  console.log(`property: ${key} => ${nkey}, value: ${countryForTourism[key][nkey]}`);
		}	
} else{
	console.log(`property: ${key}, value: ${countryForTourism[key]}`);
}
}
countryForTourism.aboutVisa("Արգենտինա");

console.log(Object.keys(countryForTourism)); // գրել եմ մոտս ունենալու համար
console.log(Object.values(countryForTourism)); // գրել եմ մոտա ունենալու համար

// 2 օրինակ
const myArr = [45, 62, -4, 47, [5, 41, 32], 8, [7, 5, 65]];
for(let x in myArr){
	console.log(myArr[x]);
}
for(let y of myArr){
	console.log(y);
}

// 3 օրինակ
const someArr = [40, 50, 60, 70, 80];
let counter=0;
for(let j of someArr){
  counter++;
}
console.log(counter);
console.log(someArr.length);


//4 օրինակ
const test = [5, 10, 15, 20];

const [, , , a] = test;
console.log(a); // ուղղակի օրինակը գրել եմ,որ մոտս լինի

// 5 օրինակ
const count ={
    countryName_1:"Արաբական Միացյալ Էմիրություններ",
    capital_1: "Աբու Դաբի",
    currency_1: "ԱՄԷ դիրհամ ( AED )",
    largestCities_1:{
	    city_1: "Աբու Դաբի",
	    city_2: "Դուբայ"
    },
    officialLanguage_1: "արաբերեն",
    sightseeing_1:{
	    s_item1:"Բուրջ Խալիֆա (Դուբայ)",
        s_item2:"Արմավենու կղզիներ (Դուբայ)",
	    s_item3:"Մադինաթ Ջումեյրա (Դուբայ)"
    },
  aboutVisaOf(country){
    if(country=== "ԱՄԷ"){
		console.log("Կախված այցի տևողությունից և նպատակից՝ ՀՀ քաղաքացիներին ԱՄԷ վիզա կարող է տրամադրվել առցանց՝ https://www.instadubaivisa.com/dubai-visa-application-form.php կամ Հայաստանում ԱՄԷ-ի միգրացիոն ծառայության կողմից։");
	}
  },
  seeSightseeing:function(c){
	for(let x in count){
		if(c === "ԱՄԷ"){
			console.log("");
		}
	}
      
  },
  sayOfficialLang({countryName_1}){
     if(countryName_1 === "ԱՄԷ"){
        console.log();
	 } else{
		console.log(count.officialLanguage_1);
	 }
  }

};


const {aboutVisaOf} = count;
aboutVisaOf("ԱՄԷ");

const {seeSightseeing} = count;
seeSightseeing("ԱՄէ");

const {sayOfficialLang} = count;
sayOfficialLang("ԱՄէ");
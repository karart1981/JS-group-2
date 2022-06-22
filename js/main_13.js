"use strict";

//declaration function 1-1
//acquaintanceWithTheClient("Արմինե","Սարգսյան","ArmSag","52426574ADS",38,"Երևան,Կիևյան 28-12","098-45-14-12-11");
function acquaintanceWithTheClient(name,lastName,login,parol,age,address,telephone){
	console.log(`
	Բարև Ձեզ հարգելի հաճախորդ, դուք գրանցվել եք մեր խանութի կայքում,
	Ձեր անձնական տվյալներն են՝
	Անուն՝ ${name},
	Ազգանուն՝ ${lastName},
	Մուտքանուն՝ ${login},
	Գաղտնաբառ՝ ${parol},
	Տարիք՝ ${age},
	Հասցե՝ ${address},
	Հեռ՝ ${telephone}
`);
     console.log("Շնորհակալություն մեր կայքում գրանցվելու համար");
}



//declaration function 1-2
//loyalCustomer("Արմեն","Մարտիրոսյան",250000);
function loyalCustomer(name,lastName,purchaseAmount){
   if(purchaseAmount >= 500000){
      console.log(`
	Բարև Ձեզ հարգելի ${name} ${lastName},քանի 
	որ դուք մեր մոտից գնել եք ${purchaseAmount}-ի ապրանք 
	ստանում եք 40% զեղչի քարտ։`);
   } else if (purchaseAmount >=200000 && purchaseAmount<500000){
      console.log(`
	Բարև Ձեզ հարգելի ${name} ${lastName},քանի որ 
	դուք մեր մոտից գնել եք ${purchaseAmount}-ի ապրանք,ստանում եք
	20% զեղչի քարտ։`);
   } else(
	console.log(`
	Բարև Ձեզ հարգելի ${name} ${lastName},շնորհակալություն գնումների համար`));
}




//declaration function 1-3
//const September = (productBalance(5,6,7,101,250,320));
function productBalance(item_1,item_2,item_3,balance_1,balance_2,balance_3,newBalance_1,newBalance_2,newBalance_3){
	newBalance_1 = balance_1 + item_1;
    if(balance_1 < newBalance_1){
		console.log(newBalance_1);
	}
	if (balance_2 < balance_2 + item_2){
		newBalance_2 = balance_2 + item_2;
		console.log(newBalance_2);
	}
	if(balance_3 < balance_3 + item_3){
		newBalance_3 = balance_3 + item_3;
		console.log(newBalance_3);
	}

}




//declaration function 1-4
//deliveryTerms("Արտակ","Պողոսյան","Գյումրի");
function deliveryTerms(name,lastName,location){
	const city = ["Երևան","Գյումրի","Վանաձոր","Էջմիածին"];
	if(location === city[0] ){
	 console.log(`Հարգելի ${name} ${lastName} Ձեր առաքումը անվճար է`);
	} else if (location === city[1] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 5000 դրամ:`);
	} else if (location === city[2] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 4000 դրամ:`);
	}else if (location === city[3] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 1500 դրամ։`);
	} else{
	console.log(`Հարգելի հաճախորդ մենք ձեր բնակավայր չենք առաքում։`);
	}
  }
  


//declaration function 1-5
//companyYieldForMonth(company2021Year.January.income,company2021Year.January.cost);

function companyYieldForMonth(income,cost,netProfit){
   netProfit = income - cost;
   console.log(netProfit);
} 
const company2021Year = {
	January:{
		income: 450000,
		cost: 100000
	},
	February:{
		income: 550000,
		cost: 80000
	},
	March:{
		income: 600000,
		cost: 120000
	},
	April:{
		income: 700000,
		cost: 70000
	},
	May:{
		income: 450000,
		cost: 80000
	},
	June:{
		income: 450000,
		cost: 150000
	},
	July:{
		income: 600000,
		cost: 150000
	},
	August:{
		income: 350000,
		cost: 90000
	},
	September:{
		income: 450000,
		cost: 100000
	},
	October:{
		income: 700000,
		cost: 200000
	},
	November:{
		income: 550000,
		cost: 100000
	},
	December:{
		income: 250000,
		cost: 80000
	}
	
};



//expression function 2-1
const acquaintanceClient = function(name,lastName,login,parol,age,address,telephone){
	console.log(`
	Բարև Ձեզ հարգելի հաճախորդ, դուք գրանցվել եք մեր խանութի կայքում,
	Ձեր անձնական տվյալներն են՝
	Անուն՝ ${name},
	Ազգանուն՝ ${lastName},
	Մուտքանուն՝ ${login},
	Գաղտնաբառ՝ ${parol},
	Տարիք՝ ${age},
	Հասցե՝ ${address},
	Հեռ՝ ${telephone}
`);
     console.log("Շնորհակալություն մեր կայքում գրանցվելու համար");
};
//acquaintanceClient("Արմինե","Սարգսյան","ArmSag","52426574ADS",38,"Երևան,Կիևյան 28-12","098-45-14-12-11");


//expression function 2-2
const Customer = function(name,lastName,purchaseAmount){
	if(purchaseAmount >= 500000){
	   console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},քանի 
	 որ դուք մեր մոտից գնել եք ${purchaseAmount} դրամի ապրանք 
	 ստանում եք 40% զեղչի քարտ։`);
	} else if (purchaseAmount >=200000 && purchaseAmount<500000){
	   console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},քանի որ 
	 դուք մեր մոտից գնել եք ${purchaseAmount} դրամի ապրանք,ստանում եք
	 20% զեղչի քարտ։`);
	} else(
	 console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},շնորհակալություն գնումների համար`));
 };
 
//Customer("Արսեն","Պետրոսյան",150000);


//expression function 2-3
const productOfBalance = function(item_1,item_2,item_3,balance_1,balance_2,balance_3,newBalance_1,newBalance_2,newBalance_3){
	newBalance_1 = balance_1 + item_1;
    if(balance_1 < newBalance_1){
		console.log(newBalance_1);
	}
	if (balance_2 < balance_2 + item_2){
		newBalance_2 = balance_2 + item_2;
		console.log(newBalance_2);
	}
	if(balance_3 < balance_3 + item_3){
		newBalance_3 = balance_3 + item_3;
		console.log(newBalance_3);
	}

};

//const September = (productOfBalance(5,6,7,110,240,230));


//expression function 2-4
const ourDeliveryTerms = function(name,lastName,location){
	const city = ["Երևան","Գյումրի","Վանաձոր","Էջմիածին"];
	if(location === city[0] ){
	 console.log(`Հարգելի ${name} ${lastName} Ձեր առաքումը անվճար է`);
	} else if (location === city[1] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 5000 դրամ:`);
	} else if (location === city[2] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 4000 դրամ:`);
	}else if (location === city[3] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 1500 դրամ։`);
	} else{
	console.log(`Հարգելի հաճախորդ մենք ձեր բնակավայր չենք առաքում։`);
	}
  };
  //ourDeliveryTerms("Արտակ","Պողոսյան","Գյումրի");


//expression function 2-5
const companyYieldOfMonth = function(income,cost,netProfit){
	netProfit = income - cost;
	console.log(netProfit);
 };

 const companyIn2021Year = {
	 January:{
		 income: 450000,
		 cost: 100000
	 },
	 February:{
		 income: 550000,
		 cost: 80000
	 },
	 March:{
		 income: 600000,
		 cost: 120000
	 },
	 April:{
		 income: 700000,
		 cost: 70000
	 },
	 May:{
		 income: 450000,
		 cost: 80000
	 },
	 June:{
		 income: 450000,
		 cost: 150000
	 },
	 July:{
		 income: 600000,
		 cost: 150000
	 },
	 August:{
		 income: 350000,
		 cost: 90000
	 },
	 September:{
		 income: 450000,
		 cost: 100000
	 },
	 October:{
		 income: 700000,
		 cost: 200000
	 },
	 November:{
		 income: 550000,
		 cost: 100000
	 },
	 December:{
		 income: 250000,
		 cost: 80000
	 }
	 
 };
 
 //companyYieldOfMonth(companyIn2021Year.January.income,companyIn2021Year.January.cost);
 

//arrow function 3-1
const acquaintanceOfClient = (name,lastName,login,parol,age,address,telephone) => 
	console.log(`
	Բարև Ձեզ հարգելի հաճախորդ, դուք գրանցվել եք մեր խանութի կայքում,
	Ձեր անձնական տվյալներն են՝
	Անուն՝ ${name},
	Ազգանուն՝ ${lastName},
	Մուտքանուն՝ ${login},
	Գաղտնաբառ՝ ${parol},
	Տարիք՝ ${age},
	Հասցե՝ ${address},
	Հեռ՝ ${telephone}
`);
//acquaintanceOfClient("Արմինե","Սարգսյան","ArmSag","52426574ADS",38,"Երևան,Կիևյան 28-12","098-45-14-12-11");
//console.log("Շնորհակալություն մեր կայքում գրանցվելու համար");


//arrow function 3-2
const _loyalCustomer = (name,lastName,purchaseAmount) =>{
	if(purchaseAmount >= 500000){
	   console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},քանի 
	 որ դուք մեր մոտից գնել եք ${purchaseAmount} դրամի ապրանք 
	 ստանում եք 40% զեղչի քարտ։`);
	} else if (purchaseAmount >=200000 && purchaseAmount<500000){
	   console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},քանի որ 
	 դուք մեր մոտից գնել եք ${purchaseAmount} դրամի ապրանք,ստանում եք
	 20% զեղչի քարտ։`);
	} else(
	 console.log(`
	 Բարև Ձեզ հարգելի ${name} ${lastName},շնորհակալություն գնումների համար`));
 };

// _loyalCustomer("Կարինե","Մուրադյան",540000);


//arrow function 3-3
const _productBalance = (item_1,item_2,item_3,balance_1,balance_2,balance_3,newBalance_1,newBalance_2,newBalance_3) =>{
	newBalance_1 = balance_1 + item_1;
    if(balance_1 < newBalance_1){
		console.log(newBalance_1);
	}
	if (balance_2 < balance_2 + item_2){
		newBalance_2 = balance_2 + item_2;
		console.log(newBalance_2);
	}
	if(balance_3 < balance_3 + item_3){
		newBalance_3 = balance_3 + item_3;
		console.log(newBalance_3);
	}

};

//const may = (_productBalance(17,54,21,110,240,230));


//expression function 3-4
const _ourDeliveryTerms = (name,lastName,location) => {
	const city = ["Երևան","Գյումրի","Վանաձոր","Էջմիածին"];
	if(location === city[0] ){
	 console.log(`Հարգելի ${name} ${lastName} Ձեր առաքումը անվճար է`);
	} else if (location === city[1] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 5000 դրամ:`);
	} else if (location === city[2] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 4000 դրամ:`);
	}else if (location === city[3] ){
	console.log(`Հարգելի ${name} ${lastName} ձեր առաքումը կկազմի 1500 դրամ։`);
	} else{
	console.log(`Հարգելի հաճախորդ մենք ձեր բնակավայր չենք առաքում։`);
	}
  };
 // _ourDeliveryTerms("Լուսինե","Միքայելյան","Վանաձոր");


//arrow function 3-5
const _companyYieldOfMonth = (income,cost,netProfit)=>{
	netProfit = income - cost;
	console.log(netProfit);
 };

 const _companyIn2021Year = {
	 January:{
		 income: 450000,
		 cost: 100000
	 },
	 February:{
		 income: 550000,
		 cost: 80000
	 },
	 March:{
		 income: 600000,
		 cost: 120000
	 },
	 April:{
		 income: 700000,
		 cost: 70000
	 },
	 May:{
		 income: 450000,
		 cost: 80000
	 },
	 June:{
		 income: 450000,
		 cost: 150000
	 },
	 July:{
		 income: 600000,
		 cost: 150000
	 },
	 August:{
		 income: 350000,
		 cost: 90000
	 },
	 September:{
		 income: 450000,
		 cost: 100000
	 },
	 October:{
		 income: 700000,
		 cost: 200000
	 },
	 November:{
		 income: 550000,
		 cost: 100000
	 },
	 December:{
		 income: 250000,
		 cost: 80000
	 }
	 
 };
//_companyYieldOfMonth(_companyIn2021Year.March.income,_companyIn2021Year.March.cost);



/*ստեղծել առանձին ֆունկցիա date անունով, ու էդ ֆուկցիան կանչել 
mig ֆունկցիայի մեջ ու էնպես անել որ 2 ֆունկցիաներն էլ աշխատեն*/
const data = (name)=>{
	console.log(`Բարև Ձեզ ${name}`);
};

const mig =(age,location)=>{
	console.log(`Ձեր տարիքն է ${age},դուք ${location}ից եք:`);
};
mig(19,"ք․Երևան",data("Արմինե"));
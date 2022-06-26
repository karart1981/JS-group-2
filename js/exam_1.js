// ՔՆՆՈՒԹՅՈՒՆ N1

/* 1. Թվարկել բոլոր թայփերը մեկնաբանելով և սահմանելով յուրաքանչյուրի աշխատանքը 
(բացառությամբ Symbol) 

Primitive types / Պարզունակ տիպեր / պարզունակ տվյալների տեսակը այն տվյալն է, 
որը օբյեկտ չէ և չունի մեթոդներ կամ հատկություններ:

 1․ Number - թվեր / թվերի typeof-ը number է / number-ի typeof-ը function է
 2. String - բառեր / String-ի typeof-ը function է / բառերի typeof-ը string
 3. Boolean - true / false   / true-ի , false-ի typeof-ը boolean է,իսկ boolean-ի 
 typeof-ը function
 4. Null - ոչինչ չկա
 5․ undefined - չի գտնվել
 6. BigInt - շատ մեծ թվերի հետ է աշխատում 
 
 Reference types/ Object types

 1. Array - զանգված
 2․ function - ֆունկցիա
 3․ new Date() - օր, ամիս, վարկյան, միլիվարկյան
 4․ new RegExp - regular expresion - object - կոդերը կարճացնում է
 5. new Error - object
 6. objects   

2. Ինչ տարբերություններ կան LET-ի, CONST-ի և VAR-ի միջև  
Երբ մենք ստեղծում ենք փոփոխական և նրան տալիս ենք ինչ-որ արժեք:Եթե մենք 
վստահ չենք,որ ինչ-որ ժամանակ հետո փոխելու ենք նրա արժեքը, փոփոխականը հայտարարում 
ենք Let-ով, եթե վստահ ենք, որ տվյալ փոփոխականը արժեքը չի փոխվելու ապա գրում ենք 
const: Սա է let-ի և const-ի տարբերությունը։Երկուսի արժեքն էլ հասանելի են իրենց 
հայտարարելուց հետո, ի տարբերություն var-ի,որը global է և նրա արժեքը հասանելի է 
ցանկացած տեղ function-ից դուրս և նրա արժեքը կարելի է փոխել։ 

3. Թվարկել տեսանելիության դաշտերը և սահմանել իրենց տարբերությունները  
Տեսանելիության դաշտերը երեքն են՝ գլոբալ, ֆունկցիայի ներսում և բլոկի ներսում։
Գլոբալը տեսանելիության դաշտում փոփոխականը հայտարարելուց հետո հասանելի է այն 
հայտարարելուց հետո ցանկացած սկոպի մեջ,բացառությամբ var-ի,որը հասանելի է նաև իրենից
վերև։ ֆունկցիայի ներսում հայտարարված փոփոխականը հասանելի է ֆունկցիայի ներսում։
Ֆունկցիայի ներսում հայտարարված փոփոխականը նույնիսկ var-ի դեպքում դուրս չի գալիս 
ֆունկցիայից դուրս և հասանելի չէ։իսկ Բլոկ սկոպի մեջ հայտարարված փոփոխականները 
հասանելի են սկոպի մեջ,բացառությամբ var-ի։

4.  Ի՞նչ տարբերություն կա Block Scope-ի և Function scope-ի միջև  
Function scope-  Երբ փոփոխականը հայտարարվում է ֆունկցիայի ներսում, այն հասանելի է 
միայն այդ ֆունկցիայի ներսում և չի կարող օգտագործվել այդ ֆունկցիայից դուրս:
Դա վերաբերում է նույնիսկ var-ին:
Block Scope - Փոփոխականը կամ հաստատունը(let, const) որը հայտարարվում է if կամ 
switch պայմանների ներսում կամ  for, while օղակների ներսում, որը առանձնանում է 
ձևավոր փակագծերով, հասանելի է այդ սահմաններում,այսինքն բլոկի մեջ։

5. Ինչո՞վ են վտանգավոր գլոբալ փոփոխականներն ու var-երը 
Վտանգավոր են,քանի որ var-ով ներքևում հայտարարված փոփոխականի արժեքը հասանելի է 
վերևում,իսկ դա կարող է խառնել մեր project-ը և մեր ցանկացած արդյունքը չենք ստանա։

6. Թվարկել ֆունկցիաները ըստ իրենց անունների ու մեկնաբանել իրենց աշխատանքը
Ֆունկցիաները JS-ում երեքն են՝ function declaretion, function expression և 
function arrow: function decration-ի գրելաձևը հետևյալն է՝ function f(a,b,c){}
ձևաավոր փակագծերի ներսում գրվում է ֆունկցիան,իսկ ձևավոր փակագծերից դուրս գրվում է
ֆունկցիայի անունը և ()-այս փակագծերով կանչում ենք ֆունկցիան։function declaretion-ը
կարելի է կանչել նաև իրենից վերև,ի տարբերություն մյուս երկուսի,որոնց պետք է կանչել
ֆունկցիայից ներքև։function expression-ի գրելաձևը հետևյալն է՝ const calc = function
(a,b){որի մեջ գրվում է ֆունկցիան}; ։ Այն հայտարավում է ֆունկցիայից հետո՝ calc(); :
function arrow-ն գրվում է հետևյալ ձև՝ const f = (a,b)=> {փակագծերի մեջ գրվում է 
ֆունկցիան}; f();։ function arrow-ն ունի կարճ գրելաձևեր՝ const f =(a,b)=>a+b; f(); 
նաև՝ const f = a => a*2; f();

7. ինչ տարբերություն կա postfix և prefix գրելաձևի միջև, ու որ դեպքերում ենք 
իրենց օգտագործում
օր՝ 
let x = 0;
x++;
console.log(x++); - սա postfix է,որը սկզբից ընդունում է x-ի արժեքը,նոր ավելացնում 
է արժեքը, իսկ console.log(++x)- սա prefix է,երբ արժեքը ավելանում է,նոր տպվում։

8. Մեկնաբանել null-ի և undefined-ի տարբերությունները
 JavaScript-ն օգտագործում է null-ը՝ ցանկացած օբյեկտի արժեքի դիտավորյալ
 բացակայությունը ներկայացնելու համար: Եթե ​​գտնում եք փոփոխական կամ ֆունկցիա, որը 
 վերադարձնում է null, դա նշանակում է, որ ակնկալվող օբյեկտը չի կարող ստեղծվել:
Undefined նշանակում է, որ փոփոխականը հայտարարված է, բայց դեռ արժեք չի նշանակվել : 
undefined-ը ինքնին տեսակ է (անսահմանված): Չնշանակված փոփոխականները սկզբնավորվում
են JavaScript-ի կողմից՝ undefined արժեքով:

9. HTML-ում script թեգը միացնելու ամենահարմար վայրը դա ... շարունակել միտքը և 
սահմանել թե ինչու: օր՝
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>lesson2</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
	
	<script src="./js/main.js"> </script>
</body>
</html> - script թեգը միացնելու ամենահարմար վայրը </body թեգը փակելուց մի տող վերև,
որպեսզի պրոյեկտը արագ բացվի բրաուզերի կողմից։Քանի որ JS-ում բրաուզերը վերևից ներքև
է կարդում կոդերը,եթե script թեգը դնենք <head> ում </head> մեր պրոյեկտը
կդանդաղեցնենք։

10. JavaScript-ը արդյո՞ք կարող է բրաուզերում աշխատել առանց HTML-ի, գրեք այո կամ ոչ
Պատասխան՝ Այո։

11. թվարկեք Boolean օպերատորները և սահմանեք նրանց նշանակություններն ու անունները
Boolean օպերատորը ունի երկու արժեք՝ true(ճիշտ կամ 1) և false(սխալ կամ 0):Այն 
անհրաժեշտ է համեմատական և տրամաբանական օպերատորների հետ աշխատելու համար։


12. ինչ տարբերություն կա այս օպերատոների միջև ==, ===
== JavaScript-ում օգտագործվում է երկու փոփոխականներ համեմատելու համար, բայց այն
անտեսում է փոփոխականի տվյալների տեսակը: === օգտագործվում է երկու փոփոխականներ 
համեմատելու համար, բայց այս օպերատորը նաև ստուգում է տվյալների տեսակը և համեմատում
երկու արժեք:

13. ինչ տարբերություն կա պրիմիտիվ և հղումային թայփերի միջև
Javascript-ն ունի երկու տեսակի արժեքներ՝ պարզունակ արժեքներ և հղման արժեքներ : 
Դուք կարող եք ավելացնել, փոխել կամ ջնջել հատկությունները հղման արժեքին, մինչդեռ 
դուք չեք կարող դա անել պարզունակ արժեքով: Պարզունակ արժեքի պատճենումը մի 
փոփոխականից մյուսը ստեղծում է առանձին արժեքի պատճեն:Բոլոր տեսակները, բացի 
օբյեկտներից, սահմանում են անփոփոխ արժեքներ:

14. ինչի՞ համար են օգտագործվում BREAK և CONTINUE օպերատորները և ո՞րտեղ
Break և continue օպերատորները օգտագործվում են loop-ի մեջ if կամ while օգտագործելուց,
break-ը նաև switch-ի:
Կբացատրեմ օրինակով՝
for(let x = 0; x > 10; x++){
	if(x === 5){
		break;  / continue;
	}
	console.log(x);
} - այս դեպքում console կտպի 0 1 2 3 4  և դուրս կգա loop-ից
իսկ continue-ի դեպքում չի տպի 5-ը
օր 2՝ 
let x = 5;
switch(x){
case 1: console.log(1); break;
case 3: console.log(3); break;
case 5: console.log(5); break;
default console.log(5);
} այս դեքում switch-ը գտնում է առաջին ճիշտ պատասխանը և դուրս է գալիս բլոկից։Եթե 
չդնենք break,կարող է տպել երկու ճիշտ պատասխան։

15. Ո՞ր մաթեմատիկական օպերատորի դեպքում և ո՞ր պագայաում console-ում կարող ենք 
ստանալ infinity
Թիվը հասնում է անսահմանության , երբ այն գերազանցում է թվի վերին սահմանը՝ 
1.797693134862315E+308: Թիվը հասնում է անսահմանության, երբ այն գերազանցում է թվի 
ստորին սահմանը՝ -1.797693134862316E+308: 
օր՝
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // արդյունք: "Սա անսահմնաություն է։"
}
console.log(1 / maxNumber);
// արդյունք : 0 

16. ի՞նչ է նշանակում NaN և ո՞ր դեպքում կարող ենք իրեն ստանալ
NaN-ը հապավում է և նշանակում է Not A Number,այսինքն թիվ չի։ Այն կարող ենք ստանալ
հետևյալ գործողությունների արդյունքում։օր՝
console.log(parseInt("Բարև ձեզ")); 
console.log(Math.sqrt(-1));
console.log(0 * Infinity);
console.log("foo" / 3);
Այսինքն գործողություն,որի արդյունքը թիվ չի։

17. ի՞նչ է նշանակում NPM
NPM հապավումը վերծանվում է որպես Node Package Manager,այսինքն փաթեթների կառավարիչ 
է Node.js-ում։Այն բաղկացած է հրամանի տողից, որը նաև կոչվում է npm, և հանրային և 
վճարովի մասնավոր փաթեթների առցանց տվյալների բազայից, որը կոչվում է npm ռեեստր: 

18. Ինչպե՞ս ենք NPM-ը միացնում մեր պրոյեկտին
Սկզբից մենք ներբեռնում ենք node.js-ը,որը իր հետ բերում է մեր համակարգիչ նաև npm։Երբ
տերմինալի մեջ գրենք npm -v,կբերի npm-ի վերսիան,թե որն է install եղել։npm-ը մեծ 
գրադարանա,որտեղ կա միլիարդավոր package-ներ,որոնցից կարող ենք օգտվել։Կան package-ներ,
որ մեզ պետք են կայքը ստեղծելու համար,որից հետո կարող ենք դրանք ջնջենք,կան package-եր,
որոնցից կախվածություն ունի մեր պրոյեկտը ու եթե ջնջենք,չի աշխատի մեր պրոյեկտը։
Package-ներ կան,որ պետք է նախ գլոբալ ինսթալ անել,նոր լոկալ,իսկ package-ներ կան,որ
միանգամից լոկալ ենք անում։Դրա համար,նախ կարդում ենք package-ի դոկումենտացիան։

19. Ի՞նչ package-ներ գիտեք և ինչպե՞ս եք դրանք ավելացրել ձեր պրոյեկտի մեջ
օր՝ jshint, տերմինալի մեջ գրում ենք npm install -g jshint, այսինքն մենք npm-ին
խնդրում ենք install անել jshint գլոբալ։Այսքանից հետո,եթե տերմինալում գրենք jshint -v
կբերի jshint-ի վերսիան։Դրանից հետո գնում ենք մեր պրոյեկտի մեջ,բացում ենք տերմինալը
և գրում ենք npm init:npm-ը մեզ հարցերա տալիս,թե ով ենք մենք,ինչա մեր պրոյեկտը,ինչ
վերսիայի է պատկանում։Նախ նշում ենք պրոյեկտի անունը,վերսիան նշում ենք 1․0․3։
Նկարագրության բաժնում նշում եք թե ինչ նպատակով է պրոյեկտը։Հեղինակը բաժնում գրում ենք 
մեր անունը։Enter տալուց հետո մեր մոտ հայտնվում է package.json file:որի մեջ էն 
ամենինչնա,որ գրել ենք npm-ին պատասխանելուց։Կարող ենք ուղղակի գրել npm init -yes և
ստանում ենք package.json-ի default տարբերակը։Դրանից հետո տերմինալում գրում ենք
npm i --save-dev jshint։Երբ տալիս ենք enter,նոր ֆոլդերա ավելանում մեր պրոյեկտում՝
node_modules,նաև package-lock.json:Այսինքն jshint-ը լոկալ install արեցինք մեր
 պրոյեկտի մեջ։node_modeles-ում այն package-ներն են,որ jshint-ը իր հետ քաշումա,որ
 կարողանա աշխատի։Երբ պրոյեկտը հանձնում ենք back-end developer-ին,մենք node_modules-ը
 չենք հանձնում նրան։Դրանից հետո vs-ում միացնում ենք jshint-ը։Այնուհետև jshintrc-ի
 սարքենք,այսինքն ֆայլը բերենք քցենք պրոյեկտի մեջ։Այն json-a js-ի,որտեղ կան կանոններ։


20. Ի՞նչ տարբերություն կա DevDependecy-ի և Dependecy-ի միջև
Dependecy-ի մեջ գնում է այն կախվածությունները,որը ունի պրոյեկտը և առանց որոնց 
պրոյեկտը չի աշխատի,իսկ DevDependecy այն կախվածություններն են,որ մենք ունենք,այսինքն
մեր աշխատանքը հեշտացնելու համար է և առանց որոնց մեր պրոյեկտը կաշխատի։


21. for loop-ով աստղանիշներով console-ում ստանալ լիարժեք՝ կլորանման բան 
(անկյունները կոտրած), քառակուսի, եռանկյունի, 
ուղղանկյուն, երկու քառակուսի իրար կողք և ցանկացած տառ (latin)

//քառակուսի
const NUMBER = 7
let square = "";
for (let i = 1; i <= NUMBER; i++) {
  square += "    ";
    for(let j = 0; j < NUMBER; j++){
        square += " " + "*";
    }
  square += "\n";
}
console.log(square);

// երկու քառակուսի
const NUMBER = 7;
let squareTwo = "";
for (let i = 1; i <= NUMBER; i++) {
    for(let j = 0; j < NUMBER; j++){
        squareTwo += "  " + "*";
    }
  squareTwo += "        ";
   for(let k = 1; k <= NUMBER; k++){
  squareTwo += "  " + "*";
    }
  squareTwo += "\n";
}

console.log(squareTwo);


22. ստեղծում ենք փոփոխական, որի մեջ ստեղծում եք սթրինգ 500 բառից բաղկացած 
պատմություն, ու էդ սթրիգի մեջ օգտագործում եք ${} սրանցից ու մեջը գրում եք 
տարատեսակ JS կոդեր, որոնք կարող են ձեր պատմության հետ կապ ունենալ, օրինակ 
(տարեթվեր, անուններ և այլն)

const Tigran = {
	name:"Տիգրան Մեծ (Տիգրան Բ Մեծ)",
	born:"(մթա 140թ - մթա 55թ)",
	reign: "մթա 95թ-ից մինչև մահ",
	anyReign: "(մթա 83թ - մթա 69թ)",
	whenDidHeWinTheTitle: "մթա 85թ",
	dynasty: "Արտաշեսյան",
	father: "Տիգրան Ա"
}
const kingOfKings = `${Tigran.name}-ը ծնվել է ${Tigran.born}, Մեծ Հայքի արքա ${Tigran.reign}ը, Ասորիքի և Փյունիկիայի արքա ${Tigran.anyReign}, ${Tigran.whenDidHeWinTheTitle}-ից կրել է արքայից արքա տիտղոսը։ Հանդիսացել է ${Tigran.dynasty} հարստության հզորագույն ներկայացուցիչը, հաջորդել է հորը՝ ${Tigran.father}-ին։${Tigran.name}-ի օրոք Մեծ Հայքի թագավորությունը հասավ իր հզորության գագաթնակետին: Պարտության մատնելով Պարթևական թագավորությանը և ստանալով Սելևկյան գահը՝ Հայաստանը կարճ ժամանակով դարձավ Առաջավոր Ասիայի հզորագույն պետությունը: ${Tigran.name}-ի տերությունը տարածվում էր Կասպից ծովից մինչև Միջերկրական ծով, Կովկասյան լեռներից մինչև Միջագետքի անապատները:`;
console.log(kingOfKings);

23. ստեղծում եք ֆունկցիա, որը կաշխատի ֆակտորիալ ֆորմուլայով 
function factorial(number) {
	let result = 1;
  
	for (let i = 2; i <= number; i++) {
	  result = result * i;
	}
  
	console.log(result);
  }
factorial(5);

24. ստեղծում եք ֆունկցիա, որը կաշխատի ֆիբոնաչի ֆորմուլայով
const fibonacci = n => {
	let a = 0, b = 1, c = n;
	
	for(let i = 2; i <= n; i++) {
	  c = a + b;
	  a = b;
	  b = c;
	}
	
	console.log(c);
  };
  fibonacci(3);
  

25. ստեղծում եք ֆունկցիա, որը որպես արգումենտ ստանում ա ինչ-որ հայտնի շենք/կառույց,
 ու վերադարձնում ա էդ շենքի պարամետրերը (բարձրություն, լայնություն, քմ և այլն)

 const famousBuilding_1 ={
	name:"Բուրջ Խալիֆա",
	height:"828 մ",
	floor:"163 հարկ",
	sqrt:"344000 ք/մ"
 }
 const famousBuilding_2 ={
	name:"Էյֆելյան աշտարակ",
	height:"324 մ",
	floor:"3 հարկ",
	sqrt:"5093 ք/մ"
 }
 const famousBuilding_3 ={
	name:"Շանհայի աշտարակ",
	height:"632 մ",
	floor:"128 հարկ",
	sqrt:"380000 ք/մ"
 }
function build(name,height){
	if(name === "Բուրջ Խալիֆա"){
		console.log(famousBuilding_1);
	  } else if(name === "Էյֆելյան աշտարակ"){
		console.log(famousBuilding_2);
	  } else {
		console.log(famousBuilding_3);
	}
}
build("Բուրջ Խալիֆա"); 

26. ստեղծում եք ֆունկցիա, որը իր մեջ ստեղծում է մեքենաներ (արգումենտներով), որ ամեն
 կանչելուց կարողանաք այլ պարամետրեր տալ ու ստանալ տարբեր մեքենաներ

const theBestModelOfBmw2021 = {
	name: "bmw 4 series coupe",
	acceleration: "4.5 seconds",
	topSpeed: "250 km/h (155 mph)"
 }
const theBestModelOfTesla2021 = {
	name: "Tesla Model Y",
	acceleration: "3.5 seconds",
	topSpeed: "155 mph (249 km/h)"
 }
 function theBestCar(topSpeed){
	if(topSpeed >= "(250 km/h (155 mph)"){
		console.log(theBestModelOfBmw2021);
	} else{
		console.log(theBestModelOfTesla2021);
	}
}
theBestCar("260 km/h"); 


27. ստեղծում եք 2 զանգված, որտեղ առաջինում պետք է լինեն և բացասական և դրական թվեր,
 ու for loop-ի միջոցով զանգվածից հանեք դրական թվերը, իսկ բացասականները դրեք 2րդ
  դատարկ զանգվածի մեջ.

  let myArray = [5,-7,-89,45,-8,52];
  //minus
  function getMinusNumber(arr) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < 0) {
		newArr.push(arr[i]);
	  } else {
		arr.splice(i, 1);
		i--;
	  }
	}
	return newArr;
  }
  console.log(getMinusNumber(myArray));

  let myArray = [5,-7,-89,45,-8,52];

  //plus
 function getPlusNumber(arr) {
	const newArr2 = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] >= 0) {
		newArr2.push(arr[i]);
	  } else {
		arr.splice(i, 1);
		i--;
	  }
	}
	return newArr2;
  }
  console.log(getPlusNumber(myArray));
 
  28. ստեղծում եք օբյեկտ, որտեղ նկարագրում եք մարդու, որը ունի ընկերներ, ստատուսներ,
 սև ցուցակի մեջ մարդիկ, լայքեր, էլ. հասցե, հեռախոս, գաղտնաբառ և այլն 
 (նմանեցնել Ֆեյսբուքին)
let userName = {
	name:"Արմենուհի",
	LastName:"Մանուկյան",
	age:24,
	login:"armenuhiM24",
	parol:"ArmMan24",
	eMail:"armman@gmail.com",
	tel:"066-44-11-22",
	likes:[{},{},{},{},{}],
	blackList:[
		{
		   name:"Արմեն",
		   lastName:"Պետրոսյան",
		   age:27,
		   login:"armpet1110",
		   parol:"armpet252525",
		   eMail:"armpet27@gmail.com",
		   tel:"041-41-41-41",
		   likes:[{},{},{},{},{}],
		   blackList:[{},{},{},{},{}],
		   status:["Կյանքը պայքար է։"],
		   friends:[{},{},{},{},{}],
		}
	],
	statuses:[
		"Անցյալը երբեք չես կարող ջնջել, Ինչպես չես կարող տեսնել ապագան: Շատ ենք ետ նայում, ու նայում առաջ, ՈՒ մոռանում ենք ապրել մեր ներկան:", 
	    " Սիրել նշանակում է տեսնել մի հրաշք, որը անտեսանելի է ուրիշների համար…", 
		"Մարդկանց փոխելու համար հարկավոր է սիրել նրանց: Նրանց վրա ներգործելը համամասնական է նրանց նկատմամբ սիրուն:"
	],
	friends:[
		{
            name:"Աշոտ",
	        LastName:"Կարապետյան",
	        age:30,
	        login:"ashotKar30",
	        parol:"444Ash",
	        eMail:"ashkar@gmail.com",
	        tel:"076-44-13-42",
	        likes:[{},{},{},{},{}],
	        blackList:[{},{},{},{},{}],
			status:["Նպաատակիդ հետևիցց գնա։"],
			friends:[{},{},{},{},{}]
		},
		{
			name:"Արտակ",
			lastName:"Եսայան",
			age:29,
			login:"artyes1120",
			parol:"4747yes",
			eMail:"artyes141@gmail.com",
			tel:"044-45-71-45",
			likes:[{},{},{},{},{}],
			blackList:[{},{},{},{},{}],
			status:["Եղիր միշտ առաջինը"],
			friends:[{},{},{},{},{}]
		}
	]
}
		
29. Ստեղծում եք զանգված, ու մեջը 10 հատ օբյեկտ, ամեն օբյեկտում ձեր նախընտրած 
մարդկանց մասին մի քանի ինֆորմացիա՝ անուն ազգանուն, տարիք, մասնագիտություն ու 
ազգություն, հետո loop-ի միջոցով էդ օբյետկտերի մարդկանց անունները տպում եք
կոնսոլում 
const famousArmenian =[
{
	name:"Դիանա",
	lastName:"Աբգար",
	birthDate:1859,
	dateOfDeath:1937,
	profession:"Աշխարհի առաջին կին դիվանագետ",
	nationality:"հայ",
	location:"Ճապոնիա"
},
{
	name:"Հովհաննես",
	lastName:"Ադամյան",
	birthDate:1879,
	dateOfDeath:1932,
	profession:"ճարտարագետ և գյուտարար,գունավոր հեռուստատեսության հիմնադիրներից մեկը",
	nationality:"հայ",
	location:"Ռուսաստան"
},
{
	name:"Շառլ",
	lastName:"Ազնավուր",
	birthDate:1924,
	dateOfDeath:2018,
	profession:"նշանավոր երգիչ,շանսոնիե,երգահան,բանաստեղծ,գրող,կինոդերասան և հասարակական գործիչ",
	nationality:"հայ",
	location:"Ֆրանսիա"
},
{
	name:"Արմեն",
	lastName:"Ալչյան",
	birthDate:1914,
	dateOfDeath:2013,
	profession:"նշանավոր տնտեսագետ",
	nationality:"հայ",
	location:"ԱՄՆ"
},
{
	name:"Վիկտորյա",
	lastName:"Աղանուր",
	birthDate:1855,
	dateOfDeath:1910,
	profession:"բանաստեղծուհի",
	nationality:"հայ",
	location:"Իտալիա"
},
{
	name:"Անդրե",
	lastName:" Աղասի",
	birthDate: 1970,
	dateOfDeath:+"",
	profession:"պրոֆեսիոնալ թենիսիստ",
	nationality:"հայ",
	location:"ԱՄՆ"
},
{
	name:"Տարոն",
	lastName:"Աճեմօղլու",
	birthDate:1967,
	dateOfDeath:+"",
	profession:"աշխարհահռչակ տնտեսագետ",
	nationality:"հայ",
	location:"ԱՄՆ"
},
{
	name:"Հովհաննես",
	lastName:"Այվազովսկի",
	birthDate:1817,
	dateOfDeath:1900,
	profession:"հանճարեղ ծովանկարիչ",
	nationality:"հայ",
	location:"Ռուսաստան"
},
{
	name:"Բորիս",
	lastName:"Բաբայան",
	birthDate:1933,
	dateOfDeath:+"",
	profession:"կիրառական մաթեմատիկայի և հաշվողական տեխնիկայի բնագավառի գիտնական",
	nationality:"հայ",
	location:"Ռուսաստան"
},
{
	name:"Առնո",
	lastName:"Բաբաջանյան",
	birthDate:1921,
	dateOfDeath:1983,
	profession:"աշխարհահռչակ կոմպոզիտոր և դաշնակահար",
	nationality:"հայ",
	location:"ԽՍՀՄ"
}
];
for(let i = 0; i < famousArmenian.length; i++){
	console.log(`${famousArmenian[i].name} ${famousArmenian[i].lastName}`);
} 

30. ստեղծում եք Math անունով օբյեկտ, որի մեջ մեթոդներով ստեղծում ենք այն 
մաթեմատիկական ալգորիթմներ (արմատ, քառակուսի և այլն) 

const Math ={
	
	pow(num1,num2){
	  let result = num1;
	  while(num2>1){
		result = result * num1;
		return result;
		num2--;
	  }

    },
	min(num1,num2){
		if(num1 < num2){
			return num1;
		}else {
			return num2; 
		}
	},
	max(num1,num2){
		if(num1 > num2){
			return num1;
		}else{
			return num2;
		}
	},
	SQRT1_2(num1,num2){
		let result = num1;
		while(num2>1){
		  result = result / num2;
		  return result;
		  num2--;
		}
  
	  },

};
console.log(Math.pow(10,2));
console.log(Math.min(4,6));
console.log(Math.max(5,10));
console.log(Math.SQRT1_2(49,7));


 ## ի՞նչ կստանանք կանսոլում ԿԱՐԵՎՈՐ Է ՈՐ ԱՌԱՆՑ ԿՈՆՍՈԼ ԱՆԵԼՈՒ ՊԱՏԱՍԽԱՆԵՔ !!!!!!!!!!  
31. 
typeof true  // Boolean
typeof false  //  Boolean
typeof function () {}  //  function
typeof null  // Object
typeof []  //  Object
typeof {}  // Object
typeof " "  // String
typeof 0  // Number
typeof 1  // Number
typeof NaN  //  Number
typeof undefined  //  undefined
typeof Object  //  function
typeof Object()  //  object
typeof Array  // function
typeof Array() // object
typeof Boolean  //  function
typeof Bollean()  //  referenceError

32. NaN || 2 || undefined // 2

33. NaN && 2 && undefined  // NaN

34. 1 && 2 && 3 // 3

35. !1 && 2 || !3  // false

36. 25 || null && !3  //  25

37. NaN || null || !3 || undefined || 5 // 5

38. NaN || null && !3 && undefined || 5  // 5

39. 5 === 5 && 3 > 1 || 5;  //  true

40. 10 <= 8 && !9 || 10 > 5 //  true

41. 
const a = true, b = false;
console.log(!a)  // false
console.log(!b)  // true

42. 
const a = true, b = false, c = 4;
console.log(a || b);  // true
console.log(b || b);  //  false
console.log((c>2) || (c<2));  //  true

43. 
const a = true, b = false;
const c = 4;
console.log(a && a); // true
console.log(a && b);  // false
console.log((c > 2) && (c < 2));  // false

44. 
const a = 2, b = 'hello';  
console.log(a !== 2);  //  false
console.log(a !== '2');  //  true
console.log(b !== 'Hello');  //  true

45. 
console.log( true || true ); // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

46. 
Ինչ կստանանք կոնսոլի մեջ
let x = 4;
do {
     console.log("FALSE");   //  false
     x++;
} while (x > 4 && x > 6)   

47. 
console.log( 1 || 0 ); // 1
console.log( null || 1 );  // 1
console.log( null || 0 || 1 );  // 1
console.log( undefined || null || 0 ); // 0
console.log( null || 2 && 3 || 4 ); // 3

48. 
if (-1 || 0) console.log( 'first' ); // first
if (-1 && 0) console.log( 'second' ); //  -----
if (null || -1 && 1) console.log( 'third' );  //  third 

49. 
console.log(!undefined);  //  true
console.log(!null);  //  true
console.log(!20);  // false
console.log(!0); // true
console.log(!NaN);  // true
console.log(!{});  // false
console.log(!'');  // false
console.log(!'OK');  //
console.log(!false); //true
console.log(!true);  // false

50. 
const a = 5, b = 10;
(a != b) && (a < b);  // true
(a > b) || (a == b);  // false
(a < b) || (a == b);  // true
!(a < b);  // false
!(a > b); // true */


// ՔՆՆՈՒԹՅՈՒՆ N1

/*1. Թվարկել բոլոր թայփերը մեկնաբանելով և սահմանելով յուրաքանչյուրի աշխատանքը 
(բացառությամբ Symbol)*/

/*
Primitive types / Պարզունակ տիպեր / պարզունակ տվյալների տեսակը այն տվյալն է, 
որը օբյեկտ չէ և չունի մեթոդներ կամ հատկություններ:

 1․ Number - թվեր / թվերի typeof-ը number է / number-ի typeof-ը function է
 2. String - բառեր / String-ի typeof-ը function է / բառերի typeof-ը string
 3. Boolean - true / false   / true-ի , false-ի typeof-ը boolean է,իսկ boolean-ի 
 typeof-ը 
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



 Java script-ում ամեն ինչ object է,այսինքն object-ից է ժառանգվում։ typeof()
 մեթոդը կանչելով,իմանում ենք, թե տվյալ 
 օբեկտը ինչ տիպին է պատկանում։Երբ consol.log()-ով կանչենք typeof()մեթոդը, ապա՝

 1․ const a = [];
    console.log(typeof(a));  պատասխանում է object

 2․ function a() { }
    console.log(typeof(a));  պատասխանում է function

 3. const a = new Date();
    console.log(typeof(a)); պատասխանում է object

 4. const a = new RegExp();
    console.log(typeof(a));  պատասխանում է object

 5. const a = new Error();
    console.log(typeof(a));  պատասխանում է object

 6. const a = null;
    console.log(typeof(a));  պատասխանում է object (անբացատրելի թերություն (bug))

 7. const a = NaN(); // not a number
    console.log(typeof(a));  պատասխանում է number (անբացատրելի թերություն (bug))

 8. const a = 542;
    console.log(typeof(a)); պատասխանում է number 

 9. console.log(typeof(Number)); պատասխանում է function,
    console.log(typeof(Number(15))); պատասխանում է number

 10. console.log(typeof(Boolean)); պատասխանում է function,
     console.log(typeof(true/false)); պատասխանում է boolean,
 

 11. console.log(typeof(String)); պատասխանում է function

 12. console.log(typeof(Array)); պատասխանում է function

 13. console.log(typeof(undefined));  պատասխանում է undefined

 14. const max = Number.MAX_SAFE_INTEGER;
     console.log(typeof(max));



/*2. Ինչ տարբերություններ կան LET-ի, CONST-ի և VAR-ի միջև  */



/*3. Թվարկել տեսանելիության դաշտերը և սահմանել իրենց տարբերությունները  */

/* 4. Ի՞նչ տարբերություն կա Block Scope-ի և Function scope-ի միջև  */

/* 5. Ինչո՞վ են վտանգավոր գլոբալ փոփոխականներն ու var-երը  */

6. Թվարկել ֆունկցիաները ըստ իրենց անունների ու մեկնաբանել իրենց աշխատանքը

7. ինչ տարբերություն կա postfix և prefix գրելաձևի միջև, ու որ դեպքերում ենք իրենց օգտագործում

8. Մեկնաբանել null-ի և undefined-ի տարբերությունները

9. HTML-ում script թեգը միացնելու ամենահարմար վայրը դա ... շարունակել միտքը և սահմանել թե ինչու

10. JavaScript-ը արդյո՞ք կարող է բրաուզերում աշխատել առանց HTML-ի, գրեք այո կամ ոչ

11. թվարկեք Boolean օպերատորները և սահմանեք նրանց նշանակություններն ու անունները

12. ինչ տարբերություն կա այս օպերատոների միջև ==, ===

13. ինչ տարբերություն կա պրիմիտիվ և հղումային թայփերի միջև

14. ինչի՞ համար են օգտագործվում BREAK և CONTINUE օպերատորները և ո՞րտեղ

15. Ո՞ր մաթեմատիկական օպերատորի դեպքում և ո՞ր պագայաում console-ում կարող ենք ստանալ infinity

16. ի՞նչ է նշանակում NaN և ո՞ր դեպքում կարող ենք իրեն ստանալ

17. ի՞նչ է նշանակում NPM

18. Ինչպե՞ս ենք NPM-ը միացնում մեր պրոյեկտին

19. Ի՞նչ package-ներ գիտեք և ինչպե՞ս եք դրանք ավելացրել ձեր պրոյեկտի մեջ

20. Ի՞նչ տարբերություն կա DevDependecy-ի և Dependecy-ի միջև

21. for loop-ով աստղանիշներով console-ում ստանալ լիարժեք՝ կլորանման բան (անկյունները կոտրած), քառակուսի, եռանկյունի, 
ուղղանկյուն, երկու քառակուսի իրար կողք և ցանկացած տառ (latin)

22. ստեղծում ենք փոփոխական, որի մեջ ստեղծում եք սթրինգ 500 բառից բաղկացած պատմություն, ու էդ սթրիգի մեջ օգտագործում եք ${} սրանցից
ու մեջը գրում եք տարատեսակ JS կոդեր, որոնք կարող են ձեր պատմության հետ կապ ունենալ, օրինակ (տարեթվեր, անուններ և այլն)

23. ստեղծում եք ֆունկցիա, որը կաշխատի ֆակտորիալ ֆորմուլայով

24. ստեղծում եք ֆունկցիա, որը կաշխատի ֆիբոնաչի ֆորմուլայով

25. ստեղծում եք ֆունկցիա, որը որպես արգումենտ ստանում ա ինչ-որ հայտնի շենք/կառույց, ու վերադարձնում ա էդ շենքի պարամետրերը (բարձրություն, լայնություն, քմ և այլն)

26. ստեղծում եք ֆունկցիա, որը իր մեջ ստեղծում է մեքենաներ (արգումենտներով), որ ամեն կանչելուց կարողանաք այլ պարամետրեր տալ ու ստանալ տարբեր մեքենաներ

27. ստեղծում եք 2 զանգված, որտեղ առաջինում պետք է լինեն և բացասական և դրական թվեր, ու for loop-ի միջոցով զանգվածից հանեք դրական թվերը, իսկ բացասականները դրեք 2րդ դատարկ զանգվածի մեջ

28. ստեղծում եք օբյեկտ, որտեղ նկարագրում եք մարդու, որը ունի ընկերներ, ստատուսներ, սև ցուցակի մեջ մարդիկ, լայքեր, էլ. հասցե, հեռախոս, գաղտնաբառ և այլն (նմանեցնել Ֆեյսբուքին)

29. ստեղծում եք զանգված, ու մեջը 10 հատ օբյեկտ, ամեն օբյեկտում ձեր նախընտրած մարդկանց մասին մի քանի ինֆորմացիա՝ անուն ազգանուն, տարիք, մասնագիտություն ու ազգություն, հետո loop-ի միջոցով էդ օբյետկտերի մարդկանց անունները տպում եք կոնսոլում

30. ստեղծում եք Math անունով օբյեկտ, որի մեջ մեթոդներով ստեղծում ենք այն մաթեմատիկական ալգորիթմներ (արմատ, քառակուսի և այլն)

## ի՞նչ կստանանք կանսոլում ԿԱՐԵՎՈՐ Է ՈՐ ԱՌԱՆՑ ԿՈՆՍՈԼ ԱՆԵԼՈՒ ՊԱՏԱՍԽԱՆԵՔ !!!!!!!!!!

31. 
typeof true
typeof false
typeof function () {}
typeof null
typeof []
typeof {}
typeof " "
typeof 0
typeof 1
typeof NaN
typeof undefined
typeof Object
typeof Object()
typeof Array
typeof Array()
typeof Boolean
typeof Bollean()

32. NaN || 2 || undefined 

33. NaN && 2 && undefined

34. 1 && 2 && 3

35. !1 && 2 || !3

36. 25 || null && !3

37. NaN || null || !3 || undefined || 5

38. NaN || null && !3 && undefined || 5

39. 5 === 5 && 3 > 1 || 5

40. 10 <= 8 && !9 || 10 > 5

41. 
const a = true, b = false;
console.log(!a)
console.log(!b)

42. 
const a = true, b = false, c = 4;
console.log(a || b);
console.log(b || b);
console.log((c>2) || (c<2));

43. 
const a = true, b = false;
const c = 4;
console.log(a && a);
console.log(a && b);
console.log((c > 2) && (c < 2));

44. 
const a = 2, b = 'hello';
console.log(a !== 2);
console.log(a !== '2');
console.log(b !== 'Hello');

45. 
console.log( true || true ); 
console.log( false || true );
console.log( true || false );
console.log( false || false );

46. 
Ինչ կստանանք կոնսոլի մեջ
let x = 4;
do {
     console.log("FALSE");
     x++;
} while (x > 4 && x > 6)

47. 
console.log( 1 || 0 ); 
console.log( null || 1 );
console.log( null || 0 || 1 );
console.log( undefined || null || 0 );
console.log( null || 2 && 3 || 4 );

48. 
if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

49. 
console.log(!undefined);  //  
console.log(!null);  //  
console.log(!20);
console.log(!0); 
console.log(!NaN);
console.log(!{});
console.log(!'');
console.log(!'OK');
console.log(!false);
console.log(!true);

50. 
const a = 5, b = 10;
(a != b) && (a < b);  // true
(a > b) || (a == b);  // false
(a < b) || (a == b);  // true
!(a < b);  // false
!(a > b); // true 
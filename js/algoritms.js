"use strict";

1. Linear search / գծային որոնում
/* Գծային որոնման ալգորիթմը պարզապես մեկ առ մեկ համեմատում է տվյալ ցանկի տարրերը 
որոնման բանալի հետ, մինչև գտնվի նշված հիմնական արժեքով տարրը (հաջող որոնում) կամ 
ամբողջ ցանկը ուսումնասիրվի, բայց պահանջվող տարրը չգտնվի (որոնումը ձախողվեց): . 
Հաճախ օգտագործվում է մի պարզ լրացուցիչ հնարք. եթե ցանկի վերջում ավելացնեք որոնման 
բանալին, ապա որոնումն անպայման կհաջողվի, հետևաբար ալգորիթմի յուրաքանչյուր 
կրկնության մեջ կարող եք հեռացնել ցուցակի լրացման ստուգումը: JavaScript-ում այս 
ալգորիթմի ներդրման կոդը տրված է ստորև. մուտքային տվյալները ենթադրվում են զանգվածի 
տեսքով:  */

function LinearSearch(t,A)      // t - որոնվող տարր,
{                               // A - զանգված, որտեղ փնտրում ենք
    let n = A.length, i = 0;   
    
    A[n] = t;
    
    while (A[ i ] !== t) i++;
                                
    if (i < n) return i;          // Ելքը որոնվող տարրի ինդեքսն է
    else return -1;               // Եթե ​​պահանջվող տարրը զանգվածում չկա, ապա -1 է
}


2. Binary (binary) search / Երկուական (երկուական) որոնում 

/* Տեսակավորված զանգվածում տարր գտնելը: Երկուական որոնումը բարձր արդյունավետ 
ալգորիթմ է տեսակավորված զանգվածի որոնման համար: Այն աշխատում է ցանկալի t ստեղնը 
համեմատելով A[k] զանգվածի միջին տարրի հետ։ Եթե ​​դրանք հավասար են, ապա ալգորիթմը 
դադարում է գործել: Հակառակ դեպքում, նույն գործողությունը կրկնվում է ռեկուրսիվորեն 
զանգվածի առաջին կեսի համար, եթե t&lt;A[k], և երկրորդի համար, եթե t&gt;A[k]: */

function BinarySearch(t,A)       // t - որոնվող տարր
{                                // A - զանգված, որտեղ փնտրում ենք
    let i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i + j) / 2);
       if (t <= A[k]) j = k;
       else i = k + 1;
    }
   
    if (A[ i ] === t) return i;     // Ելքը որոնվող տարրի ինդեքսն է
    else return -1;                 // Եթե ​​պահանջվող տարրը զանգվածում չկա, ապա -1 է
}



3. Interpolating search / որոնումների ինտերպոլացիա

/* Դիտարկենք տեսակավորված զանգվածի որոնման ալգորիթմ, որը կոչվում է ինտերպոլացիոն 
որոնում: Ի տարբերություն երկուական որոնման, որը միշտ համեմատում է որոնման ստեղնը
տեսակավորված զանգվածի միջինի հետ (և հետևաբար միշտ կիսով չափ կրճատում է խնդրի չափը),
ինտերպոլացիոն որոնումը հաշվի է առնում որոնման բանալի արժեքը, երբ որոշվում է 
զանգվածի տարրը համեմատվող զանգվածի հետ։ բանալի. Ինչ-որ իմաստով, ալգորիթմը նմանակում
է հեռախոսի գրքում անուն փնտրելուն: Եթե ​​հեռախոսի գրքում, օրինակ, Իվանովին ենք 
փնտրում, ապա դժվար թե այն բացենք մեջտեղում կամ դեպի վերջ, ինչպես կանեինք Պետրովին 
փնտրելիս։ */ 

function InterpolationSearch(t,A)  //փնտրում է տեքստի բառերով     // t - որոնվող տարր
{                                     // A - զանգված, որտեղ փնտրում ենք
    let mid, low = 0, high = A.length-1;

    while (A[low] < t && A[high] > t)
    {  mid = low + Math.floor( ((t-A[low])*(high-low))/(A[high]-A[low]) );
       if (A[mid] < t) low = mid+1;
       else if (A[mid] > t) high = mid-1;
       else return mid;
    }

    if (A[low] === t) return low;         // Ելքը որոնվող տարրի ինդեքսն է
    else if (A[high] === t) return high;  /* Եթե ​​պահանջվող տարրը զանգվածում չկա, ապա -1 է */
    else return -1;
}


6. Finding a substring / ենթատողի որոնում
/*Ձևականորեն ենթալարի որոնման խնդիրը կարող է ձևակերպվել հետևյալ կերպ. Թող լինեն 
տեքստի \ mathsf{str} նիշեր N երկարությամբ, և օրինակ \ mathsf{sub} n~ (n\leqslant N)
երկարությամբ որպես տող: Եթե ​​ինչ-որ արժեքի համար i\in[0;N-n+1) հավասարությունը 
\ mathsf{str}[ i],\ldots,\ mathsf{str}[i+n-1]= \ mathsf{sub}[0 ],\ldots,
\mathsf{sub}[n-1], այսինքն. եթե \mathsf{sub}[j]=\mathsf{str}[i+j] հավասարությունը 
գործում է բոլոր j\in[0;n-ի համար, ապա ասում ենք, որ \mathsf{sub} օրինաչափությունը 
ներառված է տեքստում։ \mathsf{ str} հերթափոխով i. Ենթատողի որոնման խնդիրն է որոշել 
այն շեղումը, որով \mathsf{sub} նախշը մուտքագրում է \mathsf{str} տեքստը (կամ այն 
​​փաստը, որ տեքստը չի պարունակում ենթատող, որը համապատասխանում է օրինաչափությանը): 
Պարզ ասած, դուք պետք է որոշեք \mathsf{str} տեքստում համապատասխանող \mathsf{sub}
առաջին ենթաշարի ձախ նիշի i ինդեքսը:
(օրինակ, եթե str = «Lorem ipsum» և sub = «ips», ապա i=6):

Որոնման ամենապարզ ալգորիթմն ուղղակիորեն ստուգելն է բոլոր հնարավոր օֆսեթները: 
Ստուգումը բաղկացած է \mathsf{sub} կաղապարի նիշերի հաջորդական համեմատությունից 
\mathsf{str} տողի նիշերի հետ; առաջին անգամ, երբ հայտնաբերվում է նիշերի 
անհամապատասխանություն, ստուգումը դադարում է, և արտաքին օղակի փոփոխականն ավելանում է
1-ով:*/ 

function SubstringSearch(sub, str)    // sub - որոնման ենթատող
{                                     // str - տողը, որը մենք փնտրում ենք
    let i, j, n = sub.length,
        N = str.length - n + 1;
    
    for (i = 0; i < N; i++)
    {  j = 0;
       while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
       if (j === n) return i;
    }                                // Ելքը ենթատողի 1-ին նիշի ինդեքսն է
                                     // Եթե ​​ցանկալի ենթատողը չկա տողի մեջ, ապա -1
    return -1;                       // օրինակ
}                                    // SubstringSearch('ips', 'Lorem ipsum') = 6,
                                     // SubstringSearch('dolor', 'Lorem ipsum') = -1.
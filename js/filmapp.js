"use strict"; 

/* 
1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat-ը, եթե լինի
false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, եթե true ապա պետք ա կոնսոլ լինի
2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա 
երեք անգամ պատասխանի այց հարցին ՝ « Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի 
թիվը, այսինքն առաջին հարցը կլինի 1, երկրորդ հարցը կլինի 2, երրորդ հարցը կլինի 3, 
ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ
3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ,
որպեսզի յուզեռը չկարողանաք ոչ քենսլ անի, ոչ դատարfiկ վալյու ուղարկի ոչ էլ 20ից շատ 
տառ
+4. numberOfFilms-ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while-ով էնքան անել, որ 
յուզեռը թիվ գրի */

let numberOfFilms;
do {
	numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "Խնդրում եմ նշեք թիվ");
} while (isNaN(numberOfFilms) || numberOfFilms === 0);

let a;
do {
	a = prompt("Նշեք վերջին ֆիլմը, որը դիտել եք", "Խնդրում եմ գրեք հայերեն" );
} while (a === "" || a === null || a.length > 20 || a === undefined);


let b;
do {
	b = +prompt("1-10 ինչքա՞ն կգնահատեք այդ ֆիլմը", "Խնդրում եմ նշեք թիվ");
} while (b === 0 || isNaN(b));

let c;
  do{
	for(let i =0; i >3; i++){
	c = prompt("Ձեր նախընտրած ժանրը", "Խնդրում եմ գրեք հայերեն");
	}
   }
   
while(c !== "դրամա" && c !== "կոմեդիա" && c !== "պատմական" && c !== "վեսթերն" && c !== "18+" && c !== "մելոդրամա" && c !== "ֆանտաստիկա" && c !== "սարսափ" && c !== "կենսագրություն" && c !== "դետեկտիվ" && c !== "կրիմինալ" && c !== "վավերագրական" && c !== "ֆենթզի" && c !== "մարտաֆիլմ" && c !== "թրիլլեր" && c !== "ընտանեկան" && c !== "արկածային");

personalMovieDB.movies[a] = b;
personalMovieDB.numberOfFilms = numberOfFilms;
personalMovieDB.genres[i] = c;


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};


function showMyDB(privat){
	if (privat === true) {
		console.log("It's privat.");
	} else {
		console.log("it is not privat.");
	}
	
}
console.log(showMyDB(personalMovieDB.privat));

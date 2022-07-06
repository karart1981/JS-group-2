"use strict";

let numberOfFilms;	
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start:function(){ 
	   numberOfFilms =	parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "Խնդրում եմ գրեք հայերեն"));
		while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "Խնդրում եմ գրեք թվով"));
		}
	},
	rememberMyFilms:function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել","Խնդրում եմ գրեք հայերեն");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք","Խնդրում եմ գրեք թվով");
		
			if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	detectUserPersonalLevel:function() {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		}
	},
	yourFavoriteGenres:function() {
		for (let i = 0; i <= 2; i++) {
			const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`,"Խնդրում եմ գրեք հայերեն");
	
			if (genres != null && genres.trim() != "" && genres.length <= 20) {
				personalMovieDB.genres[i] = genres;
			} else {
				i--;
			}
		}
		personalMovieDB.genres.forEach (function (item , index)  { 
			console.log(`Ձեր նախընտրելի ժանրը.ժանր ${index+1} ${item}`,"Խնդրում եմ գրեք հայերեն");}); 
	},
	showMyDB:function() {
		if (personalMovieDB.privat === true) {
			console.log(personalMovieDB);
		} else {
			console.log("Մեր տվյալների բազան փակ է");
		}
		personalMovieDB.showMyDB();
	},
	isVisibleMyDB(){
		if(personalMovieDB.privat === false){
			console.log(personalMovieDB.privat = true );
		} else{
		console.log(personalMovieDB.privat = false);
	    }
	}
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectUserPersonalLevel();
personalMovieDB.yourFavoriteGenres();
//personalMovieDB.isVisibleMyDB(personalMovieDB.showMyDB);



"use strict";

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start (numberOfFilms){ 
	numberOfFilms =	parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	}
};
start(personalMovieDB);
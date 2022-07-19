"use strict";

//loop version with for
let res = "";
let count = 10;
let counter = 0;
for(let i = 0; i < count;i++){
	if(count === counter){
		break;
	}
	res += i + " ";
	if(i === 2){
		console.log(res);
		res = "";
		i = -1;
		counter++;

	}
}

// loop version with while
let res = "";
let count = 10;
let counter = 0;
let i = 0;
while(i < count){
	if(count === counter){
		break;
	}
	res += i + " ";
	if(i === 2){
		console.log(res);
		res = "";
		i = -1;
		counter++;

	}
	i++;
}

// version with recursion
const Start = 0;
const Finish = 2;
let result = "";
let count = null;
function recursia(start,finish){
    if(result.length === 0){
        count = start;
    }
    result += start + " ";
    if(start === finish){
        if(count < finish){
            count++;
            start = Start;
            result += "\n";
            recursia(start,finish);
        }
      return result;
    }
    return recursia(start+1, finish);
}
console.log(recursia(Start, Finish));
"use strict";

const income = {
	doubleTheNum(grossIncome){
	   let netIncome = grossIncome/2;//50000/2
	return `${netIncome}*${netIncome}`;//25000 * 25000
	} 
   };
   console.log(income.doubleTheNum(50000));

   //2

   const school = {
	currentStudents:124,
	newStudents: 56,
	movedStudents: 38,
	getStudentsTotalNum(){
	 return this.currentStudents - this.movedStudents +
	 this.NewStudents;
	   }
   };
   console.log(school.getStudentsTotalNum());   

   //3
   let x = 111;
let y = 55;
const objM = {
  sum:(valx,valy)=>{
    return valx + valy;
  },
  subtraction:(valx,valy)=>{
    return valx - valy;
  },
  multiplication:(valx,valy)=>{
    return valx * valy;
  },
  division:(valx,valy)=>{
    return valx / valy;
  },
  magelo:(valx,valy)=>{
    return valx % valy;
},
mixs:(valx,valy)=>{
  return (valx + valy) * valx * valy / valx / valy - valx - valy;
},
concat:(valx,valy)=>{
  return String(valx) + valy;
}
};
const samm = objM.sum(x,y);
const subtractionn = objM.subtraction(x,y);
const multiplicationn = objM.multiplication(x,y);
const divisionn = objM.division(x,y);
const mageloo = objM.magelo(x,y);
const mixss = objM.mixs(x,y);
const concatt = objM.concat(x,y);

console.log (`sam = ${samm}\n 
subtraction = ${subtractionn}\n 
multiplication = ${multiplicationn}\n 
division = ${divisionn}\n 
magelo = ${mageloo}\n 
mixs = ${mixss}\n 
concat = ${concatt}`);

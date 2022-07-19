
//"use strict";

const charentcData = {
    name: "Եղիշե",
    lastName: "Սողոմոնյան",
    dob:{
	   date: 13,
	   month: "Մարտ",
	   year: 1897
	},
    dod: 1937,
    education: undefined,
    wifeNames:[
       {fullName: "Արփենիկ Տեր-Աստվածարյան"},
	   {fullName: "Իզաբելլա Կոդաբաշյան"}
	],
	children: [
	   {fullName: "Արփենիկ"},
	   {fullName: "Անահիտ"}
	],
    howIsHe: [
	   {description: "բանաստեղծ"},
	   {description: "գրող"},
	   {description: "թարգմանիչ"},
	   {description: "հրատարակիչ"}
	],
    famousArmenianPoet: true,
    patriotism: Infinity,
    whereIsCharencResidence: null,
    sayPoem(read){
      console.log(read);
    },
    LivedCharenc(location){
	  console.log(location);
    }
};

console.log(`${charentcData.name} ${charentcData.lastName}`);
console.log(`${charentcData.dob.date} ${charentcData.dob.month} ${charentcData.dob.year}`);
console.log(`${charentcData.dod}`);
console.log(`${charentcData.education}`);
console.log(charentcData.wifeNames);
console.log(charentcData.children);
console.log(charentcData.howIsHe);
console.log(charentcData.famousArmenianPoet);
console.log(charentcData.patriotism);
console.log(charentcData.whereIsCharencResidence);

charentcData.sayPoem(`
    Ես իմ անուշ Հայաստանի արևահամ բարն եմ սիրում,
    Մեր հին սազի ողբանվագ, լացակումած լարն եմ սիրում,
    Արնանման ծաղիկների ու վարդերի բույրը վառման,
    Ու նաիրյան աղջիկների հեզաճկուն պա՛րն եմ սիրում։

    Սիրում եմ մեր երկինքը մուգ, ջրերը ջինջ, լիճը լուսե,
    Արևն ամռան ու ձմեռվա վիշապաձայն բուքը վսեմ,
    Մթում կորած խրճիթների անհյուրընկալ պատերը սև,
    Ու հնամյա քաղաքների հազարամյա քա՛րն եմ սիրում։

    Ո՛ւր էլ լինեմ - չե՛մ մոռանա ես ողբաձայն երգերը մեր,
    Չե՜մ մոռանա աղոթք դարձած երկաթագիր գրքերը մեր,
    Ինչքան էլ սո՜ւր սիրտս խոցեն արյունաքամ վերքերը մեր -
    Էլի՛ ես որբ ու արնավառ իմ Հայաստան - յա՛րն եմ սիրում։

    Իմ կարոտած սրտի համար ո՛չ մի ուրիշ հեքիաթ չկա․
    Նարեկացու, Քուչակի պես լուսապսակ ճակատ չկա․
    Աշխա՛րհ անցի՛ր, Արարատի նման ճերմակ գագաթ չկա․
    Ինչպես անհաս փառքի ճամփա՝ ես իմ Մասիս սա՛րն եմ սիրում։`);


	charentcData.LivedCharenc("Հայաստան, Երևան, Մաշտոցի պող․, 17");






     









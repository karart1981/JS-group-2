"use strict";

const app = {
    restaurantDetails: [
        {address: "Երևան, Թումսանյան 14"},
        {telNumber: "015 12-23-45"},
        {mail: "info@template.am"},
        {facebook: "http://facebook.com/"},
        {instagram: "http://instagram.com/"},
        {type: "Ռեստորան"},
        {isDelivery: true},
        {isOpen: true}
    ],
    
    restaurantStaff: [
        {security: "Էդգար Գեվորգյան"},
        {security: "Արսեն Ավագյան"},
        {waiter: "Մելքոն Դանիելյան"},
        {waiter: "Ալիսա Պողոսյան"},
        {waiter: "Նելլի Դավթյան"},
        {waiter: "Քրիստինե Արսենյան"},
        {barman: "Տիգրան Ռուբենյան"},
        {barman: "Անի Առուստամյան"},
        {cook: "Կարինե Տոնոյան"},
        {cook: "Արտակ Ադամյան"},
        {administrator: "Լիկա Ավագյանց"},
        {courier: "Սամսոն Խաչատրյան"},
        {hostess: "Ալիսա Սուրենյանց"},
        {customer: "Մանե Սարգսյան"}
    ],
    restaurantMenu: [
		{
			type: "Տաք ուտեստներ",
            item1: "Խոզի Խորոված",
            item2: "Հավի Խորոված",
            item3: "Ճտի Տապակա ֆրիով",
            item4: "Ձկան Խորոված",
            item5: "Թփով Տոլմա",
            item6: "Կաղամբով Տոլմա",
            item7: "Քյուֆթա"
		},
		{
            type: "Աղցաններ",
            item1: "Մայրաքաղաքային",
            item2: "Հունական",
            item3: "Ամառյին",
            item4: "Ցեզար",
            item5: "Վինեգրեդ",
            item6: "Խեցգետնով",
            item7: "Բազուկով"
        },
		{
            type: "Ալկոհոլային Խմիչքներ",
            item1: "Օղի",
            item2: "Գինի",
            item3: "Կոնյակ",
            item4: "Վիսկի",
            item5: "Լիկյոր",
            item6: "Տեկիլա",
            item7: "Ռոմ",
            item8: "Գարեջուր"
        },
		{
            type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
            item1: "Տնական Կոմպոտ",
            item2: "Կոկա-Կոլա",
            item3: "Ֆանտա",
            item4: "Սփրայթ",
            item5: "Սեվըն Ափ",
            item6: "Թան",
            item7: "Լիմոնադ"
        },
		{
            type: "Խմորեղեններ",
            item1: "Միկադո",
            item2: "Սնիկերս",
            item3: "Տղամարդու Իդեալ",
            item4: "Տիրամիսու",
            item5: "Շոկոլադե",
            item6: "Մրգային",
            item7: "Բրաունի"
        }
    ],
    
    isOpen (time){
        if (time >= 9 && time <= 24 ){
            app.restaurantDetails[7].isOpen = true;
        } else {
            app.restaurantDetails[7].isOpen = false;
	    }
		return time;
        
    },
    
    staffPlane(d){
        
        if(d < 15){
            app.restaurantStaff[0].security,
            app.restaurantStaff[2].waiter,
            app.restaurantStaff[3].waiter,
            app.restaurantStaff[6].barman,
            app.restaurantStaff[8].cook,
            app.restaurantStaff[10].administrator,
            app.restaurantStaff[11].hostess,
            app.restaurantStaff[12].courier,
            app.restaurantStaff[13].customer;
        } else if(d >= 15){
            app.restaurantStaff[1].security,
            app.restaurantStaff[3].waiter,
            app.restaurantStaff[5].waiter,
            app.restaurantStaff[7].barman,
            app.restaurantStaff[9].cook,
            app.restaurantStaff[10].administrator,
            app.restaurantStaff[11].hostess,
            app.restaurantStaff[12].courier,
            app.restaurantStaff[13].customer;
        }
        
    },
	callCenter(address, telNumber, isDelivery, isOpen, type) {
        return `
            Ողջույն՜, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
            ${
                isOpen = app.restaurantDetails[7].isOpen === true?
                "Ներկա պահին մենք բաց ենք":
                "Կներեք, մենք հիմա փակ ենք։ Մեր աշխատանքային ժամերն են 09:00-24:00:"
            }
            ${address = app.restaurantDetails[0].address !== undefined? 
            "Մեր հասցեն է  " + app.restaurantDetails[0].address: ""
            }
            ${
                telNumber = app.restaurantDetails[1].telNumber !== undefined? 
                "Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber :""
                
            }
            ${
                
                isDelivery = app.restaurantDetails[6].isDelivery === true ? 
                "Այո, մենք կարող ենք իրականացնել ձեր պատվերը ամենաուշը 90 րոպեի ընտացքում " : 
                "" 
			}
        `;
    },

    cookerShift (d){ 
        if(d >= 15){ if(app.restaurantDetails[7].isOpen === false) {
            console.log("Կներեք բայց մենք փակ ենք");
        } else if (d >= 15){
            console.log("Հարգելի հաճախորդ, այսօրվա խոհարարն է "+app.restaurantStaff[9].cook);
        } }
        if(d < 15){ if(app.restaurantDetails[7].isOpen === false) {
            "";
        } else if (d < 15){
            console.log(`Հարգելի հաճախորդ, կներեք այսօր ${app.restaurantStaff[9].cook}-ի հանգստյան օրն է:Այսօրվա խոհարարն է ${app.restaurantStaff[8].cook}-ը`);
        } }
    },    

    customerBeer (hat){
        app.restaurantMenu[2].item8 = hat;

        if(hat >= 1){
            console.log("Հիմա կբերեմ ձեր պատվիրած գարեջուրը։");
        } else if (hat < 1){
            console.log(
               `Կներեք, գարեջուրը վերջացել է, խնդրում եմ ընտրեք այլ ալկոհոլային խմիչք  
               ${app.restaurantMenu[2].item1}
               ${app.restaurantMenu[2].item2}
               ${app.restaurantMenu[2].item3}
               ${app.restaurantMenu[2].item4}
               ${app.restaurantMenu[2].item5}
               ${app.restaurantMenu[2].item6}
               ${app.restaurantMenu[2].item7}`);
        }
    }

};

let day = 15;
let time = 15;
let beerQuantity = 0;
app.isOpen(15);
console.log(app.callCenter());
app.cookerShift(day);
app.customerBeer (beerQuantity);
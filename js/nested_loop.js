"use strict";
/*
i:0
j:0
k:0
k:1
k:2
    j:1
    k:0
    k:1
    k:2
        j:2
        k:0
        k:1
        k:2
           i:1
           j:0
           k:0
           k:1
           k:2
              j:1
              k:0
              k:1
              k:2
                 j:2
                 k:0
                 k:1
                 k:2
                    i:2
                    j:0
                    k:0
                    k:1
                    k:2
                       j:1
                       k:0
                       k:1
                       k:2
                           j:2
                           k:0
                           k:1
                           k:2  
						   
						 
						 
						   */
for(let i = 0; i < 3; i++){
	console.log(`i:${i}`);
	for(let j = 0; j < 3; j++){
		console.log(`j:${j}`);
		for(let k = 0; k < 3; k++){
			console.log(`k:${k}`);
		}
	}
}




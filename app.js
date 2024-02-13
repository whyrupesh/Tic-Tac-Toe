//tic tac toe game

// for taking input in terminal
const prompt = require('prompt-sync')();


let gameboard=[['x','o','o'],['o','o','o'],['x','o','x']];



// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         gameboard[i][j]=prompt(`{${i},${j}}: `);
//     }
// }

class number{
    static zeroH;
    static oneH;
    static twoH;
    static zeroV;
    static oneV;
    static twoV;
    constructor(){
        this.zeroH=0;
        this.oneH=0;
        this.twoH=0;
        this.zeroV=0;
        this.oneV=0;
        this.twoV=0;
    }
}

let X = new number();
let O = new number();

console.log(X.h);


//loop to calculate numbers of x and o.
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(gameboard[i][j]=='x'){
            if(i==0){
                X.zeroH++;
            }
            else if(i==1){
                X.oneH++;
            }
            else if(i==2){
                X.twoH++;
            }
            if(j==0){
                X.zeroV++;
            }
            else if(j==1){
                X.oneV++;
            }
            else if(j==2){
                X.twoV++;
            }
        }
        else if(gameboard[i][j]=='o'){
            if(i==0){
                O.zeroH++;
            }
            else if(i==1){
                O.oneH++;
            }
            else if(i==2){
                O.twoH++;
            }
            if(j==0){
                O.zeroV++;
            }
            else if(j==1){
                O.oneV++;
            }
            else if(j==2){
                O.twoV++;
            }
        }
    }
}


if(X.zeroH>2 || X.oneH>2 || X.twoH>2 || X.zeroV>2 || X.oneH>2 || X.twoV>2){
    console.log("X wins");
}
else if(O.zeroH>2 || O.oneH>2 || O.twoH>2 || O.zeroV>2 || O.oneH>2 || O.twoV>2){
    console.log("O wins");
}
else{
    console.log("match ties");
}
//tic tac toe game

// for taking input in terminal
//const prompt = require('prompt-sync')();


let gameboard=['x','o','o',
                'x','o','o',
                'o','o','x'];



const winCombination = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function findCombo(a,b,c){
    if(a==b && b==c && c=='x'){
        return "x";
    }
    else if(a==b && b==c && c=='o'){
        return "o";
    }
    else{
        return "";
    }
}

function getWinner(gameboard){
    for(let i of winCombination){
        let winner = findCombo(gameboard[i[0]],gameboard[i[1]],gameboard[i[2]]);
        if(winner!==""){
            return winner;
        }
    }
    return "";
   
}

console.log(getWinner(gameboard));

//DOM
let zero = document.getElementsByClassName("grid-item");
console.log(zero[0].dataset);

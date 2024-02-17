//tic tac toe game


let gameboard=['','','',
                '','','',
                '','',''];



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



//DOM
let box = document.getElementsByClassName("grid-item");
// console.log(box[0].dataset);
// console.log(box[0].innerHTML);



let turn="o";
let chance =9;
let boxContainer = document.querySelector(".grid-container");
boxContainer.addEventListener("click", modifyBox);

function modifyBox(e){

    if(e.target !== e.currentTarget){
        document.querySelector("#turn-wala").innerHTML=turn;

        if(turn=="x"){
            turn ="o";
        }else{
            turn="x";
        }
        
        var clickedItem = e.target.dataset.pos; //this returns data attribute of clicked element
        gameboard[clickedItem]=turn;
        box[clickedItem].innerHTML=turn;
        let winner = getWinner(gameboard);
        if(winner!==""){
            document.querySelector("#winner").innerHTML=winner+" won this game!"
            //alert(winner+ " is Winner!");
            return;
        }
        chance--;
        if(chance==0){
            alert("match ties");
            return;
        }
    }
    e.stopPropagation();
}




document.querySelector("button").addEventListener("click", ()=>{
    gameboard=['','','',
                '','','',
                '','',''];
    for(let i of box){
        i.innerHTML="";
    }
    chance = 9;
    document.querySelector("#winner").innerHTML="";

});
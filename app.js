let userseq = [];
let gameseq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red" , "purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("Game started")
        started = true;
        
        levelup();
    }
})

document.addEventListener("click", function() {
    if(started==false){
        console.log("Game started")
        started = true;
        
        levelup();
    }
})

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = (`Level ${level}`);

    let randIndx = Math.floor(Math.random() * 3);
    let randcol = btns[randIndx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    gameflash(randbtn);
}

function checkans(indx) {
     if(userseq[indx]==gameseq[indx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup , 1000);
        }
     }else {
        h2.innerHTML = (`Game Over! Your score was <b> ${level} </b> <br> Press Any Key to continue`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {

            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();   
     }
}

function btnPress() {
    let btn = this;
    userflash(btn);
    let btnCol = btn.getAttribute("id");
    userseq.push(btnCol);

    checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {

    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}

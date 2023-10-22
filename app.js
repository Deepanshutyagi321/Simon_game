let gameseq = [];
let userseq = [];
let start = false;
let Level = 0;
let h2 = document.querySelector("h2");
let h1 = document.querySelector(".h1");
h1.innerText = 0;
let btns = ["yellow","red","green","purple"];

document.addEventListener("keypress", function () {
    if (start === false) {
        console.log("start the game");
        start = true;
        levelup();
    } 
});

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function() {
    btn.classList.remove("flash")
    }, 1000);
}

function levelup() {
    userseq = [];
    Level++;
    h2.innerText = `Level ${Level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    
    btnflash(randbtn);
}

function btnpress(){
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length - 1);

}
let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
          setTimeout(levelup,500);
        }
    } 
     else {
            h2.innerText = `Game is Over  at Level ${Level} press any key to play again `;
             highscore();
            reset();
            
        }
    }
    function highscore() {
        if (Level > parseInt(h1.innerText)) {
            h1.innerText = Level;
        }
    }
   
function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    Level = 0;
}

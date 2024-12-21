let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(function (btn) {
    btn.addEventListener("click", btnPress);
});

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

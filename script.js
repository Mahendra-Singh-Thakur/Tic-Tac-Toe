let boxes = document.querySelectorAll(".box");
let retartbtn = document.querySelector("#ReStartbtn");
let windiv = document.querySelector(".windiv");
let winpara = document.querySelector(".winpara");
let main = document.querySelector(".main");
let startbtn = document.querySelector("#startbtn");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let chance = false;
let clickcount = 0;
retartbtn.addEventListener("click", () => {
    chance = false;
    retartbtn.disabled = false;
    clickcount = 0;
    enablebtn();
})
startbtn.addEventListener("click", () => {
    chance = false;
    clickcount = 0;
    retartbtn.disabled = false;
    windiv.classList.add("hide");
    main.classList.remove("hide");
    enablebtn();
})
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        clickcount++;
        if (!chance) {
            box.innerText = "X";
            chance = true;
        }
        else {
            box.innerText = "O";
            chance = false;
        }
        box.disabled = true;
        winner();
        console.log(clickcount);
        if (clickcount === 9) {
            winpara.innerText = `GAME DRAW`;
            winpara.classList.remove("hide");
            windiv.classList.remove("hide");
        }
    })
})
let winner = () => {
    for (let pattern of winPatterns) {
        let p0 = boxes[pattern[0]].innerText;
        let p1 = boxes[pattern[1]].innerText;
        let p2 = boxes[pattern[2]].innerText;
        if (p0 !== "" && p1 !== "" && p2 !== "") {
            if (p0 === p1 && p1 === p2) {
                winpara.innerText = `Winner ${p0}`;
                disablebtn();
                retartbtn.disabled = true;
                startbtn.innerText = "New Game";
                winpara.classList.remove("hide");
                windiv.classList.remove("hide");
            }
        }
    }
}
let disablebtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
let enablebtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}
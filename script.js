let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector("#new-btn"); 
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winpatterens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    msgcontainer.classList.add("hide"); // Hides the message container
    boxes.forEach((box) => {
        box.innerText = "";  // Clears all box texts
        box.disabled = false; // Enables all buttons
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disablebtns = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
};

const checkwinner = () => {
    for (let i of winpatterens) {
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            showwinner(pos1val);
            return;
        }
    }
};

newbtn.addEventListener("click", resetgame); 




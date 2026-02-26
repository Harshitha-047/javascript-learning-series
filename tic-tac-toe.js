let btn = document.querySelectorAll(".box");

let winingCombinations = [
    [0,1,2],
    [3,4,5],        
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnO = true; // O starts

btn.forEach((button, index) => {

    button.addEventListener("click", function () {

        if (button.innerHTML !== "") return; // prevent overwrite

        if (turnO) {
            button.innerHTML = "O";
        } else {
            button.innerHTML = "X";
        }

        turnO = !turnO;

        checkWinner();  // ✅ check after every click
    });

});
function checkWinner() {

    for (let i = 0; i < winingCombinations.length; i++) {

        let [a, b, c] = winingCombinations[i];

        if (
            btn[a].innerHTML &&
            btn[a].innerHTML === btn[b].innerHTML &&
            btn[a].innerHTML === btn[c].innerHTML
        ) {
            alert(btn[a].innerHTML + "Player wins");
            disableButtons();
            return;
        }
    }
}
function disableButtons() {
    btn.forEach(button => {
        button.disabled = true;
    });
}
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {

        square.addEventListener("click", handleClick);

    });
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {


        setTimeout(() => {
            if (turn == 0) {

                alert("O jogo Acabou - O Vencedor foi o jogador 1");
            } else {

                alert("O jogo Acabou - O vencedor foi o jogador 2")
            }
            board = ["", "", "", "", "", "", "", "", ""]
            let squares = document.querySelectorAll(".square");
            for (let i = 0; i < squares.length; i++) {

                squares[i].innerHTML = "";
            }
            gameOver = false;
        }, 10);
        
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position);
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}
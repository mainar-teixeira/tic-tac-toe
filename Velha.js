const cases = document.querySelectorAll(".case");
const jgdP1 = document.querySelectorAll(".jgdP1");
const jgdP2 = document.querySelectorAll(".jgdP2");

const scoreP1 = document.getElementById('scoreP1');
const scoreP2 = document.getElementById('scoreP2');

const fraseHouses = document.getElementById('txtCasesAll');

let turn = 1;
console.log("Turno Player " + turn + "!");

let verificarVolta = false;
let houses;

let scorePy1 = sessionStorage.getItem("pointP1") | 0;
let scorePy2 = sessionStorage.getItem("pointP2") | 0;

scoreP1.textContent = scorePy1;
scoreP2.textContent = scorePy2;


let victorys = [
    [0, 1, 2], [3,  4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cases.forEach((all, index) => {
    all.addEventListener("click", jgd);

    function jgd() {

        if (turn % 2 != 0) {
            jgdP1[index].style.display = 'block';
            cases[index].style.pointerEvents = 'none';
            turn += 1;
            console.log("Turno CPU " + turn + "!");
            checkVictory();
        } else {
            jgdP2[index].style.display = 'block';
            cases[index].style.pointerEvents = 'none';
            turn += 1;
            console.log("Turno Player " + turn + "!");
            checkVictory();
        }

    }

    function checkVictory() {
        victorys.forEach(vitorias => {
            const player1Vence = vitorias.every(i => jgdP1[i].style.display === 'block');
            const player2Vence = vitorias.every(i => jgdP2[i].style.display === 'block');

            if (player1Vence) {
                scorePy1 += 1;
                verificarVolta = true;
                document.body.style.pointerEvents = 'none';
                sessionStorage.setItem("pointP1", scorePy1);
                scoreP1.textContent = scorePy1;
                setTimeout(() => {
                    alert ("Player1 venceu!");
                    window.location.reload();
                }, 500);
            } else if (player2Vence) {
                scorePy2 += 1;
                verificarVolta = true;
                document.body.style.pointerEvents = 'none';
                sessionStorage.setItem("pointP2", scorePy2)
                scoreP2.textContent = scorePy2;
                setTimeout(() => {
                    alert ("Player2 venceu!");
                    window.location.reload();
                }, 500);
            } else if (turn == 10)  {
                 setTimeout (() => {
                    fraseHouses.textContent = "casas ocupadas!";
                    fraseHouses.style.color = 'white';
                    fraseHouses.style.fontSize = '24px';
                    window.location.reload();
                 }, 1000);
                 fraseHouses.textContent = "";
            }

        });
    }
});


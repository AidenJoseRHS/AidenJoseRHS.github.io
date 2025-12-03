let muscleEl = document.getElementById("muscle-el");
let gainEl = document.getElementById("gain-el");
let robuxEl = document.getElementById("robux-el")
let muscle = 0;
let muscleGain = 1;
// let money = 1;
let rebirthCost = 1000;
let rebirthMultiplier = 0;
let baconCost = 10;
let scream = document.getElementById("scream");
let boom = document.getElementById("boom");
let baconz = document.getElementById("baconz");
let guestz = document.getElementById("guestz");
let nutton = document.getElementById("nutton");

function clickers() {
    muscle += muscleGain += rebirthMultiplier;
    muscleEl.textContent = muscle;

    scream.play();
    scream.currentTime = 0.2;

}
clickers()


function baconUpgrade() {
    if (muscle > baconCost) {
        muscle -= baconCost;
        baconCost += 10;
muscleGain += 1;
    boom.play();
    boom.currentTime = 0.3;
    gainEl.textContent = "Click = +" + muscleGain;
    muscleEl.textContent = muscle;
    }
}

function guestUpgrade() {
    muscle += 5;
    angy.play();
    angy.currentTime = 0.4;
    setTimeout(guestUpgrade, 5000);
    muscleEl.textContent = muscle;
}

// function robux() {
//     money *= 2;
//     robuxEl.textContent = "Multiplier = x" + muscleGain;
// }

// index:     <button id="robux" onclick="robux()">Robux x2</button>
//            <em><h3 id="robux-el"></h3></em>


function backmusic() {
    backround.play();
    backround.currentTime = 0.3;
}
backmusic()

        function rebirth() {
            if (muscle > rebirthCost) {
            muscle = 0;
            rebirthMultiplier += 3;
            muscleGain = 0;
            rebirthCost *= 10;
            gainEl.textContent = "Click = +" + muscleGain;
            muscleEl.textContent = muscle;
            }
            }
            
            function handleKeyDown(event) {
            if (event.key == "ArrowUp") {
                fontSize *= 1.1;
                balloonEl.style.fontSize = fontSize + "px";
                event.preventDefault();
            }
            if (event.key == "ArrowDown") {
                fontSize /= 1.1;
                balloonEl.style.fontSize = fontSize + "px";
                event.preventDefault();
            }

            if (fontSize > 100) {
                balloonEl.textContent = "💥";
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
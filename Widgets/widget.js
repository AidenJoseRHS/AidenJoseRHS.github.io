let muscleEl = document.getElementById("muscle-el")
let muscle = 0
let muscleGain = 1
let scream = document.getElementById("scream")
let boom = document.getElementById("boom")
let baconz = document.getElementById("baconz")
let guestz = document.getElementById("guestz")

function clickers() {
    muscle += muscleGain;
    muscleEl.textContent = muscle;

    scream.play();
    scream.currentTime = 0.2;

}
clickers()

function baconUpgrade() {
muscleGain += 1
    boom.play();
    boom.currentTime = 0.3;
}


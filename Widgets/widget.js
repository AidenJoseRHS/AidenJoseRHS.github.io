let muscleEl = document.getElementById("muscle-el");
let gainEl = document.getElementById("gain-el");
let muscle = 0;
let muscleGain = 1;
let scream = document.getElementById("scream");
let boom = document.getElementById("boom");
let baconz = document.getElementById("baconz");
let guestz = document.getElementById("guestz");
let nutton = document.getElementById("nutton");

function clickers() {
    muscle += muscleGain;
    muscleEl.textContent = muscle;

    scream.play();
    scream.currentTime = 0.2;

}
clickers()

function multiplier() {
   gainEl.textcontent = muscleGain;
}

function baconUpgrade() {
muscleGain += 1
    boom.play();
    boom.currentTime = 0.3;
}

function guestUpgrade() {
    muscle += 5;
    angy.play();
    angy.currentTime = 0.4;
    setTimeout(guestUpgrade, 5000);
    muscleEl.textContent = muscle;
}


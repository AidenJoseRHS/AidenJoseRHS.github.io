let muscleEl = document.getElementById("muscle-el");
let muscle = 0;

let scream = document.getElementById("scream"); 

function clickers() {
    muscle += 1;
    muscleEl.textContent = muscle;

    scream.play();
    scream.currentTime = 0.2;

    
}
clickers()

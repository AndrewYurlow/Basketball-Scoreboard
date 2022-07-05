let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;
let pointsButtons = document.querySelectorAll(".point-button");
for(let button of pointsButtons) {
    button.addEventListener("click", ()=>{
        let point = Number(button.textContent[1]);
       if(button.classList.contains("guest")){
           guestPoints += point;
           addGuestPoints(guestPoints);
       } else {
           homePoints += point;
           addHomePoints(homePoints);
       }
    });
}

function addGuestPoints(value) {
    if (value < 10) {
        guestScoreEl.textContent = "0" + value;
    } else {
        guestScoreEl.textContent = value;
    }
}

function addHomePoints(value) {
    if (value < 10) {
        homeScoreEl.textContent = "0" + value;
    } else {
        homeScoreEl.textContent = value;
    }
}

function reset() {
    homeScoreEl.textContent = "00";
    guestScoreEl.textContent = "00";
    homePoints = 0;
    guestPoints = 0;
}
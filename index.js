let homeScore = 0
let guestScore = 0 
let hS = document.getElementById("home-score")
let gS = document.getElementById("guest-score")

function addOneHome() {
    homeScore += 1
    hS.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    hS.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    hS.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    gS.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    gS.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    gS.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    hS.textContent = homeScore 
    gS.textContent = guestScore
}
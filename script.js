
var homeScoreEl = document.getElementById("homescore-el")

var homeCount = 0

function home1() {
  homeCount += 1
  homeScoreEl.textContent = homeCount
}

function home2() {
  homeCount += 2
  homeScoreEl.textContent = homeCount
}

function home3() {
 homeCount += 3
  homeScoreEl.textContent = homeCount
}

var guestScoreEl = document.getElementById("guestscore-el")

var guestCount = 0

function guest1() {
   guestCount += 1
   guestScoreEl.textContent = guestCount
}

function guest2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guest3() {
    guestCount += 3
   guestScoreEl.textContent = guestCount
}


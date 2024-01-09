function revealBirthday() {
  document.getElementById("bulb").style.display = "none";
  document.getElementById("audio").volume = 0.2;
  document.getElementById("audio").play()
  document.getElementById("birthdayImage").style.display = "block";
  document.getElementsByClassName("two")[0].style.display = "block";
  document.getElementsByClassName("two")[1].style.display = "block";
  document.getElementsByClassName("two")[2].style.display = "block";
  document.getElementsByClassName("two")[3].style.display = "block";
  document.getElementsByClassName("main-container")[0].style.backgroundColor =
    "pink";
}

function revealPopup(value) {
  document.getElementById("popup-window").style.display = "block";
}

function removePopup() {
  document.getElementById("popup-window").style.display = "none";
}

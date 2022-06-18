var toesStubbed = 0;

function toeStubbed() {
  toesStubbed++;
  document.getElementById("numOfToes").innerHTML =
    "Number of toes stubbed: " + toesStubbed;

  if (toesStubbed >= 10 && toesStubbed < 20) {
    document.getElementById("message").innerHTML =
      "You should feel bad about this.";
  } else if (toesStubbed >= 20 && toesStubbed < 30) {
    document.getElementById("message").innerHTML = "You are a monster.";
  } else if (toesStubbed >= 30 && toesStubbed < 40) {
    document.getElementById("message").innerHTML = "Okay... Thats enough...";
  } else if (toesStubbed >= 40 && toesStubbed < 45) {
    document.getElementById("message").innerHTML =
      "Thats it. You lost button privileges.";
    document.getElementById("brb").style.backgroundColor = "white";
    document.getElementById("brb").style.color = "white";
  } else if (toesStubbed >= 45) {
    document.getElementById("message").innerHTML = "Okay! You win!";
    document.getElementById("take-me-back").style.visibility = "visible";
  } else {
    document.getElementById("message").innerHTML =
      "More toes are required. Keep clicking.";
  }
}

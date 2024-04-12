let ballIn = document.getElementById("balltext");
let btn = document.getElementById("truthbtn");
let output = document.getElementById("truthOut");

btn.addEventListener("click", btnclicked);

function btnclicked() {
  random = Math.random();
  if (random < 0.1) {
    output.innerHTML = "i see the light and it says yes";
  } else if (random < 0.2) {
    output.innerHTML = "deep down in the dark abyss it says no";
  } else if (random < 0.3) {
    output.innerHTML = "proably i dunno :shrug:";
  } else if (random < 0.4) {
    output.innerHTML = "look to the sky and ask the sun";
  } else if (random < 0.5) {
    output.innerHTML = "take a break and ask again";
  } else if (random < 0.6) {
    output.innerHTML = "dont count on it";
  } else if (random < 0.7) {
    output.innerHTML = "outlook not so good";
  } else if (random < 0.8) {
    output.innerHTML = "as i look into the future it is still unknown";
  } else if (random < 0.9) {
    output.innerHTML = "yeah";
  } else if (random < 0.98) {
    output.innerHTML = "without a doubt";
  } else
    output.innerHTML =
      "all of the stars and the planets allign to help you in your fortune 100% yes";
}

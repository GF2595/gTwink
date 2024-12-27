function powerToggle(target) {
  console.log(JSON.stringify(target.checked));
}

function buttonClick() {
  fetch("changeEffect");
}

function brightnessChange(target) {
  console.log(target.value);
}

function getSettings() {
  return {
    brightness: 35,
    power: true,
    effect: 1,
  };
}

function changeEffect(target) {
  console.log(target.value);
}

const option = document.createElement("option");
option.value = 1;
option.text = "First";

const option2 = document.createElement("option");
option2.value = 2;
option2.text = "Second";

const select = document.getElementById("effect");
select.append(option, option2);

setInterval(() => {
  const settings = getSettings();

  document.getElementById("power").checked = settings.power || false;
  document.getElementById("brightness").value = settings.brightness;
  document.getElementById("effect").value = settings.effect;
}, 1000);

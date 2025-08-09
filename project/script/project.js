
const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('#title');


if (hambutton) {
  hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
  });
}

const title = document.querySelector('#title');
if (title) {
  title.addEventListener('click', () => {
    alert('Welcome to the Club! We will respond ASAP!');
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1");

  if (button1) {
    button1.addEventListener("click", function (event) {
      event.preventDefault();
      button1.textContent = "Thanks! We'll be in touch.";
      button1.disabled = true;
      button1.style.backgroundColor = "#f06d6dff";
      button1.style.cursor = "not-allowed";
    });
  }
});

const button = document.getElementById('reveal1');
const hiddenMessage = document.getElementById('hiddenMessage');

if (button && hiddenMessage) {
  button.addEventListener('click', () => {
    hiddenMessage.classList.toggle('hidden');
  });
}

function annotateDominion() {
  const element = document.getElementById('gameDescription');
  if (element) {
    element.innerHTML = element.innerHTML.replace(/Dominion/g, 'Dominion <span class="info">(1 hr, 2–4 players)</span>');
  }
}

function annotateWarhammer() {
  const element = document.getElementById('gameDescription');
  if (element) {
    element.innerHTML = element.innerHTML.replace(/Warhammer(?!:)/g, 'Warhammer <span class="info">(3+ hrs, 2+ players)</span>');
  }
}











annotateDominion();
annotateWarhammer();



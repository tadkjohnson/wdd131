
// page 1 needs a submit button
// all pages need lazy loading on imaging
// page 3 places needs playing w/the submit button
// pictures move domiaion nad warhammer on 2nd to last line. and then move warhammer and and warhammer to same page removing a spledor

const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('#title');

// Toggle hamburger menu
hambutton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hambutton.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1");

  button1.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting normally (optional)

    // Change button text
    button1.textContent = "Thanks! We'll be in touch.";

    button1.disabled = true;

    // Optional: Change styling to indicate it's disabled
    button1.style.backgroundColor = "#f06d6dff";
    button1.style.cursor = "not-allowed";
  });
});




// // get title line to do something
// const submit = document.getElementById('submit');
// title.addEventListener('click', () => {
//     alert('Welcome to the Club! We will respond ASAP!');
// });
 


document.getElementById('reveal').addEventListener('click', () => {
  document.getElementById('message').classList.remove('hidden');
});




const button = document.getElementById('reveal1');
const message = document.getElementById('hiddenMessage');

button.addEventListener('click', () => {
  message.classList.toggle('hidden');
});

function annotateDominions() {
  const element = document.getElementById('gameDescription');

  // Replace "Dominions" with a span that includes extra info
  element.innerHTML = element.innerHTML.replace(/Dominions/g, 'Dominion <span class="info">(1 hr, 2–4 players)</span>');
}

annotateWarhammer();

function annotateWarhammer 40k() {
  const element = document.getElementById('gameDescription');

  // Replace "Warhammer 40k" with a span that includes extra info
  element.innerHTML = element.innerHTML.replace(/Warhammer/g, 'Warhammer <span class="info">(3+ hrs, 2+ players)</span>');
}

annotateWarhammer 40k();



// annotateWarhammer 40k();

// function annotateWarhammer 40k() {
//   const element = document.getElementById('gameDescription');

//   // Replace "Warhammer 40k" with a span that includes extra info
//   element.innerHTML = element.innerHTML.replace(/Warhammer/g, 'Warhammer 40k <span class="info">(3+ hrs, 2+ players)</span>');
// }

// annotateWarhammer();








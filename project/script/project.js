const title = document.querySelector('#title');
const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');


document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const hambutton = document.querySelector('#menu');

  if (hambutton && navigation) {
    hambutton.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
  }
});























// if (submit) {
//     submit.addEventListener('click', (event) => {
//         event.preventDefault(); //when inside a form it submits that and relaods. this stops that
//         alert('Welcome to the Club! We will respond ASAP!');
//     });
// }






// // this one works   on to the next broken thing 
// document.addEventListener("DOMContentLoaded", () => {
//     const button1 = document.getElementById("button1");

//     if (button1) {
//         button1.addEventListener("click", function (event) {
//             event.preventDefault();
//             button1.textContent = "Thanks! We'll be in touch.";
//             button1.disabled = true;
//             button1.style.backgroundColor = "#251605";
//             button1.style.cursor = "not-allowed";
//         });
//     }
// });































// annotateDominion();
// annotateWarhammer();


document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const title = document.querySelector('#title');
    const navigation = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    if (hambutton && navigation) {
        hambutton.addEventListener('click', () => {
            navigation.classList.toggle('show');
        });
    }
})

  //  alert (if it's in a form)
  const submit = document.getElementById('submit');
  if (submit) {
    submit.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Welcome to the Club! We will respond ASAP!');
    });
  }

  // Button that changes text and disables itself
  const button1 = document.getElementById("button1");
  if (button1) {
    button1.addEventListener("click", function (event) {
      event.preventDefault();
      button1.textContent = "Thanks! We'll be in touch.";
      button1.disabled = true;
      button1.style.backgroundColor = "#251605";
      button1.style.cursor = "not-allowed";
    });
  }

  // hidden messages. 2 works .1 doesn't yet work on it sat.

  const reveal1 = document.getElementById('reveal1');
  const hidden1 = document.getElementById('hiddenMessage1');

  if (reveal1 && hidden1) {
    reveal1.addEventListener('click', () => {
      hidden1.classList.toggle('hidden');
    });
  }

  const reveal2 = document.getElementById('reveal2');
  const hidden2 = document.getElementById('hiddenMessage2');

  if (reveal2 && hidden2) {
    reveal2.addEventListener('click', () => {
      hidden2.classList.toggle('hidden');
    });
  }

// what if
  
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gameWith");
  const result = document.getElementById("responseMessage3");

  if (form && result) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission and page reload

      const selectedOption = document.querySelector('input[name="group"]:checked');

      if (selectedOption) {
        if (selectedOption.value === "family") {
          result.textContent = "Join us at the Trenton Branch in Humboldt on Wednesday nights at 6pm.";
        } else {
          result.textContent = "Visit any one local stores for open play with anyone! (See address and maps below.";
        }

        result.classList.remove("hidden"); // Show the message
      }
    });
  }
});










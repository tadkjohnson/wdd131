
// page 1 needs a submit button
// all pages need lazy loading on imaging
// page 3 places needs playing w/the submit button
// pictures move domiaion nad warhammer on 2nd to last line. and then move warhammer and and warhammer to same page removing a spledor

const hamburger = document.querySelector('.hamburger');

document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
});








// navigation stuff with hamburger
const navigation = document.querySelector('.navigation');


hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');   //  nav visibility on/off
    hamburger.classList.toggle('show');
});


// get title line to do something 
const submit = document.getElementById('submit');
title.addEventListener('click', () => {
    alert('Welcome to the Club! We will respond ASAP!');
});




// const hamburger = document.querySelector('.hamburger');
// const navigation = document.querySelector('.navigation');

// hamburger.addEventListener('click', () => {
//   navigation.classList.toggle('active');
// });



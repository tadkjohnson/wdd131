// document.getElementById("clickable1").style = "color: #fc7753; text-decoration:none; cursor:target;";
// document.getElementById("clickable1").addEventListener("click", function () {
//   window.location.href = "https://people.html";
// });

// page 1 needs a submit button
// all pages need lazy loading on imaging
// page 3 places needs playing w/the submit button
// pictures move domiaion nad warhammer on 2nd to last line. and then move warhammer and and warhammer to same page removing a spledor





// navigation stuff with hamburger
const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');   //  nav visibility on/off
    hamburger.classList.toggle('show');
});


// get title line to do something 
const title = document.getElementById('title');
title.addEventListener('click', () => {
    alert('Welcome to the Table Top Gaming Club!');
});





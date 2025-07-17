const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');   //creates a entry's chapter title in the list
const deleteButton = document.createElement('button');  //creates the delete button in the list entry

li.textContent = input.Value;

deleteButton.textContent = 'X';

li.append(deleteButton);
list.append(li);



button.addEventListener('click' function () {

});


if (input.value.trim() !== '') {... }



deleteButton.addEventListener('click', funciton() {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();

// below is the info from previous activity

const username = "Tad's best personality";  //this makes username a constant of tads best personality
const welcomeMsg = document.getElementById("welcome-msg");    //this loads the elemet that is id'ed by welcome-msg

welcomeMsg.textContent += username === "" ? 'guest' : username;   //=== strictly equal to     the += is a string cantination   if its empty itshows guest otherwise it uses the username laoded

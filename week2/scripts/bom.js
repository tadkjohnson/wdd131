const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');   //creates a entry's chapter title in the list
const deleteButton = document.createElement('button');  //creates the delete button in the list entry

li.textContent = input.Value;

deleteButton.textContent = 'X';

li.append(deleteButton);
list.append(li);














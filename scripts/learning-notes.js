// DOM = document object model   object {} taht represents the page you see in the browser priveds you with an api to intereact with it. tree like representaiton.  javascript can access the structure 
// after it is loaded as a web page at which time js changes / accesses and does its thing


// console.dir(document);   lists the document  think the entire html code as a file parent/child  or folder/file structure
// console.log(document);

// you can address items in the document like pulling from a folder on a drive   document.title = "blah blah"; changes the title shown on the web page from whatever it was to blah blah
// to change the background in the web page  it is   document.body.style.backgroundColor = "black";

// to say welcome user name, do this   in html you give the item a id="welcome-msg"
const username = "Tad's best personality";  //this makes username a constant of tads best personality
const welcomeMsg = document.getElementById("welcome-msg");    //this loads the elemet that is id'ed by welcome-msg

welcomeMsg.textContent += username === "" ? 'guest' : username;   //=== strictly equal to     the += is a string cantination   if its empty itshows guest otherwise it uses the username laoded

//  **** other common dom manipulation concepts/uses
const article = document.querySelector('article');   // selects the first instance of an article elemenet in document assigns the elemenet as a reference to the varible named article
article.innerHTML = 'innerHTML supports <storng>HTML</strong> tags. The textContent property does not.';   //change the inner html property of an existing element - uses an existing variable that has already selected an element and changes its innerHTML property value.
// the innerHTML wil lnot renderhtml tages it dispalys them as text. so when can use textContent instead as it will render not display the tags.
article.style.textAlign = 'right';  //changes inline css style of an eleemnt  text align css property of the selected element to right.
article.setAttribute('class', 'active');   // change an attribue of an element   -adds and attribute class to the element and gives it a value
articleElement.classlist.add('active');   //2nd way to change attribut of an element specifically the class attribute is by manipulating the element's classList
const paragraph = document.createElement('p'); // create an element 
article.appendChild(paragraph);    //to append an element wit hadditional ocntent or elements  tihs adds content to the end of hte article element.
article.append(paragraph, 'hello world addition!');  //to append an element wit hadditional ocntent or elements  tihs adds content to the end of hte article element.
article.removeChild(paragraph);  // to remove an element from the document  removes the epargrph from the article
article.remove();   // removes the article




// if (condition ){
//     code to execute when condition is met
// }

// if (condition1) {  code to execute if condiiton1 is true
// } else if (condition2) {  code to execute if condition 2 is true.
// } else {  code to exicute if none are true  }

swith(expression) { 
    case value1:
    // code to execute if expression is equal to value 1
    break;
    case value2:
    // code to execute if expression is equal to value2
    break;
    // more cases
    default:
    // code to execute if none of the cases match
}

loops
for (let i = 0; i < 19; i++) {
    // code to execte in eaach iteration
}

while (condition) {
    // code to execute while the condition is true
}

Array.forEach(function (element) {
    // code to execute for each element
});


//click event
// buttonElement.addEventlistener('click', function() { //code to execute when the element is clicked });

//keyup event triggered when a key is released useful for handling keyboard input
    //buttonElement.addEventListener('keyup', function() { //code to execute when a key is released });
    
//domcontentloaded event  triggered when the html doc is executed  used for initializing javascript applicaitons
//document.addEventListener("DOMContentLoaded", function() { //code to texecute when the DOM is parsed });







// function multiply(num1,num2) {
//   let result = num1 * num2;
//   return result;
// }

// let monn = multiply(4, 7);
// alert(multiply(5, 2));


// let mavariable
// mavariable = 'Ceci est ma variable'
// alert (mavariable)


// let myHeading = document.querySelector('h3');
// myHeading.textContent = 'Hello, world !';

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Bienvenue ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});






let iceCream = 'chocolat';
// document.querySelector('h3').addEventListener('click', function() 
myHeading.addEventListener('click', function()
{
    alert('Aïe, arrêtez de cliquer !!');
    if (iceCream === 'chocolat') {
      alert("Voulez-vous du chocolat ?");
    } else {
      alert("Ooooh, mais j'aurais préféré au chocolat.");
    }
});
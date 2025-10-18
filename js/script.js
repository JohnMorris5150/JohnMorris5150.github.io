const paragraph = document.getElementById('password');
    paragraph.addEventListener('mouseover', () => {
      paragraph.textContent = 'So long and thanks for all the fish!';
      paragraph.style.color = "#F70214";
      paragraph.style.fontSize = "24px";

    });

paragraph.addEventListener('mouseout', () => {
      paragraph.textContent = 'What is the password?';
      paragraph.style.color = "#050000";
      paragraph.style.fontSize = "24px";

    });


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "I WOULDN'T IF I WERE YOU") {
    x.innerHTML = "YOU ARE NOW CURSED!";
  } else {
    x.innerHTML = "I WOULDN'T IF I WERE YOU";
  }
}

function gridFunction() {
  var x = document.getElementById("gridDIV");
  if (x.innerHTML === "I WOULDN'T IF I WERE YOU") {
    x.innerHTML = "THANK YOU FOR PRESSING THE SELF DESTRUCT BUTTON!";
  } else {
    x.innerHTML = "I WOULDN'T IF I WERE YOU";
  }
}

function aboutFunction() {
  var x = document.getElementById("aboutDIV");
  if (x.innerHTML === "Would you like to learn more?") {
    x.innerHTML = "DON'T BE NOSEY!";
  } else {
    x.innerHTML = "Would you like to learn more?";
  }
}


$(function () {
  $('[data-toggle="popover"]').popover()
})

function validateForm() {
  let x = document.forms["contactForm"]["fname"].value;
  if (x == "") {
    alert("Please input your name");
     return false;
  }
}

function validateEmail() {
  let x = document.forms["contactForm2"]["femail"].value;
  if (x == "") {
    alert("Please input your email");
    return false;
    }
}

function validatePhone() {
  let x = document.forms["contactForm3"]["fphone"].value;
  if (x == "") {
    alert("Please input a valid number");
    return false;
    }
}


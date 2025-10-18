$(function () {
  $('[data-toggle="popover"]').popover()
})

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


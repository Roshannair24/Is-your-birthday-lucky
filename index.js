let birthday = document.querySelector("#birthday");
let luckyNumber = document.querySelector("#lucky-number");
let checkLuckbtn = document.querySelector("#check-luck");
let emoji = document.querySelector(".emoji");
let verdictpara = document.querySelector(".verdict");

let masterdob;
let masterdobsum;

let masternumb;

checkLuckbtn.addEventListener("click", clickHandler);

function hascharacter(myString) {
  return /[a-z]/.test(myString);
}

function cleanBirthdate(dob) {
  let newdob = "";

  for (var i = 0; i < dob.length; i++) {
    if (dob.charAt(i) === "-") {
      newdob = newdob + "";
    } else {
      newdob = newdob + dob.charAt(i);
    }
  }

  console.log("newdob: " + newdob);

  return newdob;
}

function calculatedobsum(dobstring) {
  let sum = 0;

  let digit = null;

  for (var i = 0; i < dobstring.length; i++) {
    digit = Number(dobstring.charAt(i));

    sum = sum + digit;
  }

  return sum;
}

function clickHandler() {
  console.log(typeof birthday.value);

  console.log(birthday.value);
  console.log(typeof luckyNumber.value);

  console.log(luckyNumber.value);

  if (luckyNumber.value.length === 0) {
    console.log("no  value");

    verdictpara.innerText = "The input field is empty";
    emoji.innerText = "🙄";
  } else if (birthday.value.length === 0) {
    console.log("no  date value");

    verdictpara.innerText = "Please input the date.";
    emoji.innerText = "🙄";
  } else if (hascharacter(luckyNumber.value)) {
    console.log(hascharacter(luckyNumber.value));

    console.log("it has characters");

    verdictpara.innerText = "Please input valid numerals";
    emoji.innerText = "😒";
  } else {
    console.log("it has only numbers");

    masterdob = cleanBirthdate(birthday.value);

    console.log("masterdob:" + masterdob);

    masterdobsum = calculatedobsum(masterdob);

    console.log("masterdobsum:" + masterdobsum);
    console.log("luckyNumber:" + luckyNumber.value);

    if (masterdobsum % luckyNumber.value === 0) {
      console.log("yaay its a lucky number");

      verdictpara.innerText = "yaay its a lucky number";

      emoji.innerText = "😃";
    } else {
      console.log("its not a  luky mumbr");

      verdictpara.innerText = "its not a  lucky mumbr";
      emoji.innerText = "😞";
    }
  }
}

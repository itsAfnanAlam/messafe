const text =
  "Dear momo, I am writing to you to tell you that I've been a jerk and I'm sorry for it. I won't even try to justify what I did because I have no right to hurt you the way I did. I am sorry for being such a horrible person. There was no reason for me say all that way I know that I cannot go back in time and fix what I said but if there was a way I would've done that. All I can say is I'll be better than this I promise you. I am sorry for making you upset sometimes. I am sorry for not understanding you sometimes. I am sorry taking you for granted. You don't deserve such an attitude from any one. Forgive me, my love. My heart will break if you stay angry with me. Tell me what can I do to make it up to you momo.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  } else {
    // Render the button after the whole text is rendered
    renderButton();
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function renderButton() {
  const button = document.createElement("button");
  button.textContent = " Please click to see a sorry gift ;)";
  button.onclick = function() {
    window.location.href = "flower.html";
  };
  document.querySelector(".textCont").appendChild(button);
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

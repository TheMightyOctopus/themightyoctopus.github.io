function makeBigger() {

  document.getElementById("Text").style.fontSize = "24pt";

}

function makeSmaller() {

  document.getElementById("Text").style.fontSize = "1em";

}

function makeFancyShmancy() {

  document.getElementById("Text").style.fontWeight = "bold";
  document.getElementById("Text").style.color = "blue";
  document.getElementById("Text").style.textDecoration = "underline";

}

function makeBoringBetty() {

  document.getElementById("Text").style.fontWeight = "normal";
  document.getElementById("Text").style.color = "black";
  document.getElementById("Text").style.textDecoration = "none";

}

function mooText() {

  var str = document.getElementById("Text").value;

  str = str.toUpperCase().split(/(?<=[.?!])\s+/);

  for (let i = 0; i < str.length; i++) {

    if (str[i].endsWith(".")) {

      str[i] = str[i].slice(0, -1) + "-Moo.";

    } else if (str[i].endsWith("?")) {

      str[i] = str[i].slice(0, -1) + "-Moo?";

    } else if (str[i].endsWith("!")) {

      str[i] = str[i].slice(0, -1) + "-Moo!";

    }

  }

  str = str.join(" ");

  document.getElementById("Text").value = str;

}
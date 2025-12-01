document.getElementById("changeBackgroundButton").addEventListener("click", function() {

  let button = document.getElementById("changeBackgroundButton");

  if (button.textContent === "Click me for a dark blue background!") {

    button.textContent = "Click me for a light blue background!";

  } else {

    button.textContent = "Click me for a dark blue background!";

  }

  let elements = document.getElementsByClassName("changeBackground");

  for (let i = 0; i < elements.length; i++) {

      let element = elements[i];

      if (element.className.includes("lightblue")) {

        element.className = element.className.replace("lightblue", "darkblue");

      } else {

        element.className = element.className.replace("darkblue", "lightblue");

      }

  }

})
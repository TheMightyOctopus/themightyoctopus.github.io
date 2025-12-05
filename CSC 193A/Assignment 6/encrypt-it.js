/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * This function is called when the "load" event fires on the window, 
   * signalling the HTML DOM has been constructed. 
   * Here, we set up event handlers for the buttons on the page. 
   */
  function init() {

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleEncrypt() {

    console.log("Button clicked!");

    let input = document.getElementById("input-text");
    let text = input.value;

    let cipher = document.getElementById("cipher-type");
    let cipherType = cipher.value;

    let result = document.getElementById("result");

    if (cipherType === "shift") {

      result.textContent = shiftCipher(text);

    } else {

      result.textContent = "Cipher not implemented yet!";

    }

  }

  function handleReset() {

    console.log("Reset clicked!");

    let input = document.getElementById("input-text");
    input.value = "";

    let result = document.getElementById("result");
    result.textContent = "";

  }

  function shiftCipher(text) {

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {

      let char = text.charAt(i);

      if (char >= 'a' && char <= 'z') {

        let charCode = char.charCodeAt(0);
        charCode = (charCode - 97 + 1) % 26 + 97;
        text = text.slice(0, i) 
             + String.fromCharCode(charCode) 
             + text.slice(i + 1);

      }

    }

    return text;

  }

})();
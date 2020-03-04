;(function() {

  "use strict";

  //
  // Variables
  //

  // Get the form, question, and answer elements
  var form = document.querySelector("#app");
  var question = form.querySelector("#question");
  var answer = document.querySelector("#answer");

  // Store the answers
  var answers = [
    "Yes! Yes! YES! Oh my god, YES!", // yes
    "I've never been more sure of anything in my life.", // yes
    "Without a doubt.", // yes
    "No. Absolutely and unequivocally, NO.", // no
    "Negative. Nein. Negatory. Nope. The point is, the answer is NO, OK?", // no
    "LOL, don't be daft.", // no
    "The dark side clouds everything. Impossible to see, the future is.", // maybe
    "The answer might be yes... But it could be no. Damn it, I can't be sure. Maybe!", // maybe
    "I'm not sure... I need time to think. Ask me again?" // maybe
  ];


  //
  // Functions
  //

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {String}      The first item in the shuffled array
   */
  var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  };

  /**
   * Get a random answer
   * @return {String} The answer
   */
  var getAnswer = function () {
    return shuffle(answers.slice())[0];
  };

  /**
   * Handle form submissions
   * @param {Object} event The Event interface
   */
  var handleSubmit = function (event) {

    // Prevent the default submission behaviour
    event.preventDefault();

    // Bail if the input is empty
    if (!question.value.trim()) return;

    // Display the question and answer
    answer.textContent = getAnswer();

    // Clear the question field and return focus to it
    question.value = "";
    question.focus();

  };


  //
  // Init
  //

  // Listen to submit events on the form
  form.addEventListener("submit", handleSubmit, false);

})();
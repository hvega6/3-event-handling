console.log('Lesson 3 Event Handling!');

/**
 *
 * Event Listeners
 *
 */

// event handler
function handleClick() {
  console.log('I was clicked!');
}

// 3 Ways to register listeners

// the non-best practice - 2ways
// 1. In the HTML (inline): <button id="reset-btn" onclick="reset()">.
// This is typically frowned upon because it requires the function be in the global scope. In addition, this breaks the separation of concerns design principle (much like inline CSS styling).

// 2.Assigning to DOM elements' properties: resetBtn.onclick = reset;.
// This is better because the function does not need to be in the global scope.
// const button2 = document.getElementById('2nd');

// // handing the onclick event the reference to the handleClick fn
// button2.onclick = handleClick;

//////////////
// Best Practice!
//////////////
// Calling addEventListener() on a DOM element.
// This option is considered best practice, because it has the flexibility of adding multiple listener functions to a single element!
// 3.

const bestPracticeButton = document.getElementById('best-practice');

// bestPracticeButton.addEventListener('click', handleClick);
bestPracticeButton.addEventListener('click', () => {
  console.log('anon function being called!');
});



/**
 * 
 * Activity
 * 
 */
// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");
function handleClick() {
    console.log('I was clicked');
}

//
const bestPractButton = document.getElementById("best-practice")

bestPractButton.addEventListener("")
let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter, preventing negative values
decrementBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    counterValue.innerHTML = counter;
  }
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}


// let counter = 0;
// const counterValue = document.getElementById('counter-value');
// const incrementBtn = document.getElementById('increment-btn');
// const decrementBtn = document.getElementById('decrement-btn');
// const resetBtn = document.querySelector('#reset');

// let timer;
// let interval = 100; // Adjust interval for desired speed

// incrementBtn.addEventListener('mousedown', () => {
// 	startTimer(true); // Pass true to identify increment button
// });

// incrementBtn.addEventListener('mouseup', () => {
// 	clearTimeout(timer);
// });

// decrementBtn.addEventListener('mousedown', () => {
// 	startTimer(false); // Pass false to identify decrement button
// });

// decrementBtn.addEventListener('mouseup', () => {
// 	clearTimeout(timer);
// });

// function startTimer(isIncrement) {
// 	timer = setTimeout(() => {
// 		if (isIncrement) {
// 			counter++;
// 		} else {
// 			if (counter > 0) { // Decrement only if positive
// 				counter--;
// 			}
// 		}
// 		counterValue.innerHTML = counter;
// 		startTimer(isIncrement); // Recursively call with flag
// 	}, interval);
// }

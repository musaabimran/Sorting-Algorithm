// for time handling
let speed = document.getElementById("speed");
let speedFactor = 500; // by default the slow 

// checking user requirement
speed.addEventListener("change", (e) => {
  speedFactor = parseInt(e.target.value);
});

// the function using to sleep in animation
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// for input handling

// generate a eandom number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// for time handling
var size = 40

let slider = document.getElementById("arraySize");
var sliderInput = slider.value; 

var output = document.getElementById("size_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  sliderInput = this.value;
  output.innerHTML = slider.value;
}


// Selecting button elements
function generateRandomArray(s)
{

  // array of that size
  const random_array = Array(s);

  // will calculate random and save for the later use
  for(let i = 0 ; i< s ; i++)
    random_array[i] = randomNum(0, 750); //generating between 1 and 500
  
  return random_array

}

  // function that will be use to assign the values to it
function assign(assignToit, random_array , s)
{
  for(let i = 0 ; i < s ; i++)
    assignToit[i] = random_array[i]
}


// тут может находится ваш код
let buttonArray = document.querySelectorAll('button');
console.log(buttonArray);

let buttonStart, buttonStop;
// we are getting the buttons from HTML
for (let i = 0; i < buttonArray.length; i++) {
  if (buttonArray[i].innerText.trim() === 'Start') {
    buttonStart = buttonArray[i];
  } else if (buttonArray[i].innerText.trim() === 'Stop') {
    buttonStop = buttonArray[i];
  }
}

// we are setting the random color function
function get_rand_color(){
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

let score = 0;
let shouldICreateSquare = false;

// function clickBlock(item) {
//   score += 1;
//   document.getElementById('score').innerText = score;
//   item.parentNode.removeChild(item);
// }

// creating one gaming block
function createBlock() {
  let newBl = document.createElement('div');
  newBl.style.height = '20px';
  newBl.style.width = '20px';
  newBl.classList.add('gaming_block');
  let dura = (3 + Math.random() *15);
  newBl.style.animationDuration = dura + 's';
  document.querySelector('body').insertBefore(newBl, document.querySelector('script'));
  newBl.style.position = 'absolute';
  newBl.style.top = '30px';
  newBl.style.left = (8 + Math.random()*620) + 'px';
  
  newBl.style.backgroundColor = get_rand_color();
  newBl.addEventListener('click', function (item) {
    score += 1;
    document.getElementById('score').innerText = score;
    newBl.parentNode.removeChild(newBl);
  });
  setTimeout(function () {
    newBl.parentNode.removeChild(newBl);
  }, dura * 1000);
}

// Clearing of the gaming field
function clearField() {
  shouldICreateSquare = false;
  let squares = document.querySelectorAll('.gaming_block');
  for (let i = 0; i < squares.length; i++) {
    squares[i].parentNode.removeChild(squares[i]);
  }
}

// this function should be performing everysecond, but it will make a change only if a game is active
function always (){
  if (shouldICreateSquare) {
    createBlock();
  }
}
setInterval(always, 1000);
// giving functions to the buttons
buttonStart.addEventListener('click',function(){
  score = 0;
  shouldICreateSquare = true;
  document.getElementById('score').innerText = score;
  // let startGame = setInterval(createBlock, 1000);
 } );
 buttonStop.addEventListener('click', clearField);


function animate() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'relative';

  // тут может находится ваш код

  requestAnimationFrame(animate);
}


// тут может находится ваш код

document.body.onload = animate;


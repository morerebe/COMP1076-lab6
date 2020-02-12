
function playSound(e){
  console.log(e.keyCode);

  // grab the appropriate audio DOM element based on e.keyCode which
  // should match the audio's data-key attribute
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // In the same fashio as above, find the DOM element for the div tag

const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);

  key.classList.add('press');

  // rewind the sound in case it's already playing
  audio.currentTime = 0;
  // play the sound
audio.play();

}


function removeTransition(e) {

e.target.classList.remove('press');
}

const keys = [...document.querySelectorAll('.sound')];

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);

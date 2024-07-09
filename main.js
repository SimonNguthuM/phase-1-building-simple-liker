// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.classList.add("hidden")

let like = document.querySelectorAll('.like')
like.forEach(addEventListener('click', e => {
    if(e.target.innerText === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        e.target.innerText = FULL_HEART
        e.target.classList.add('activated-heart')
      })
      .catch(() => modal.classList.remove('hidden'))
      setTimeout(() => modal.classList.add('hidden'), 3000)
    }
    else if(e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART
      e.target.classList.remove('activated-heart')
    }
  })
)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

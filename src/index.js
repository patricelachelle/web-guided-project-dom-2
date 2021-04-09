console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.getElementById('launchButton')
const confirmButton = document.getElementById('confirmButton')
const cancelButton = document.getElementById('cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('h1.success')
const failureMessage = document.querySelector('h1.failure')

// C- MODAL
const modal = document.querySelector('div.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
/*
    <button onclick="clickHandler()">Click me!</button>

    function clickHandler() {
      console.log('hey! clicked here!')
    }
*/
//  B- The DOM's element.onclick attribute
    // launchButton.onclick = () => {
    //   console.log('hello world!')
    // }
//  C- element.addEventListener('click', callback)
// launchButton.addEventListener('click', () => {
//   console.log('added with addEventListener!')
// })


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', openModal)


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function yesAction() {
  killReports()
  closeModal()

  // Alexander Vargas' request to make a sound with events
  const audio = new Audio('https://freesound.org/data/previews/91/91926_7037-lq.mp3')
  audio.play()

  //display success report
  successMessage.classList.remove('off')
}
confirmButton.addEventListener('click', yesAction)


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function noAction() {
  killReports()
  closeModal()

  //display failure message
  failureMessage.classList.remove('off')
}

cancelButton.addEventListener('click', noAction)


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', event => {
  if(event.code == "Escape") {
   closeModal()
  }
})


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
const allElements = Array.from(document.all)

allElements.forEach(element => {
  element.addEventListener('click', event => {
    // console.log('🎯 EVENT TARGET:', event.target.nodeName)
    console.log('🧭 CURRENT TARGET:', event.currentTarget.nodeName)
  })
})

document.querySelector('div.container').addEventListener('click', event => {
  event.stopImmediatePropagation()
})

document.querySelector('div.container').addEventListener('click', () => {
  console.log('another container click event lister...')
})


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {
  modal.classList.remove('off')
}

function closeModal() {
  modal.classList.add('off')
}

function killReports() {
  failureMessage.classList.add('off')
  successMessage.classList.add('off')
}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

document.addEventListener('mouseover', event => {
  console.log(event.clientX, event.clientY)
})

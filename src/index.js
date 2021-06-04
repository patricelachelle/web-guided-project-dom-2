console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.getElementById('launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('h1.report.success')
const failureMessage = document.querySelector('h1.report.failure')

// C- MODAL
const modal = document.querySelector('div.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html

// {/*<button onClick="exampleClick()" id="launchButton">Launch!</button>'}
// function exampleClick() {
//     console.log('Hello WEBPT30')
// } */}

//  B- The DOM's element.onclick attribute

launchButton.onClick = () => {
    console.log('Opening modal...')
}

//  C- element.addEventListener('click', callback)

launchButton.addEventListener('click', showModal)


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function showModal() {
    //removes the class 'off'
    modal.classList.remove('off')
    // clear any lingering messages
    successMessage.classList.add('off')
    failureMessage.classList.add('off')
}

//some extra example of cleaning up a event listener with remove event listener

// const a = document.querySelector('a')
// a.addEventListener('click', () => {
//     launchButton.removeEventListener('click', showModal)
// })

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

confirmButton.addEventListener('click', () => {
    // add 'off' class to modal
    modal.classList.add('off')
    // remove 'off' class from successMessage
    successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

cancelButton.addEventListener('click', () => {
    modal.classList.add('off')
    failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

document.addEventListener('keydown', (event) => {
    console.log(event)
    if(event.key === "Escape") {
        modal.classList.add('off')
    }
})


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

const allElements = document.querySelectorAll('*')
allElements.forEach(element => {
    element.addEventListener('click', event => {
        console.log(event)
        console.log('Current Target:', event.currentTarget.nodeName)
    })
})

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

const first = document.querySelector('#number1')
const second = document.querySelector('#number2')

const result = document.querySelector('.result')

if (window.Worker) {
  const myWorker = new Worker('worker.js')
  first.onChange(() => {
    myWorker.postMessage([first.value, second.value])
    console.log('on change first value.')
  })
  second.onChange(() => {
    myWorker.postMessage([first.value, second.value])
    console.log('on change second value')
  })
  myWorker.onmessage((e) => {
    result.textContent = e.data
    console.log('Message recieved from worker.')
  })
} else {
  console.warn('Your browser dosen\`t support web workers.')
}

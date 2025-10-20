// Exercise 1
const add = (a, b) => { return a + b}

// Exercise 2
const randomNumber = () => {return Math.floor(Math.random() * 101)}

// Exercise 3
class Person {
  constructor(name) {
    this.name = name
  }

  greet = () => {
    console.log('Hello, ' + this.name)
  }
}

// Exercise 4
const printNumbers = (numbersArray = []) => {
  for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
  }
}

// Exercise 5
const delayedMessage = (message) =>
  setTimeout(() => {
    console.log(message)
  }, 3000)

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  const result = add(2, 5)
  console.log(result)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  const result = randomNumber()
  console.log(result)
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  const manolo = new Person('Manolo')
  manolo.greet()
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  const numbers = [1, 2, 3, 4, 5]
  printNumbers(numbers)
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  delayedMessage("Let's do this!")
})
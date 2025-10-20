// Exercici 1
const add = (a, b) => { return a + b}

// Exercici 2
const randomNumber = () => {return Math.floor(Math.random() * 101)}

// Exercici 3
class Person {
  constructor(name) {
    this.name = name
  }

  greet = () => {
    console.log('Hello, ' + this.name)
  }
}

// Exercici 4
const printNumbers = (numbersArray = []) => {
  for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
  }
}

// Exercici 5
const delayedMessage = (message) =>
  setTimeout(() => {
    console.log(message)
  }, 3000)

// HTML
const exercici1Btn = document.getElementById('exercici1-btn')
exercici1Btn.addEventListener('click', (e) => {
  const resultat = add(2, 5)
  console.log(resultat)
})

const exercici2Btn = document.getElementById('exercici2-btn')
exercici2Btn.addEventListener('click', (e) => {
  const resultat = randomNumber()
  console.log(resultat)
})

const exercici3Btn = document.getElementById('exercici3-btn')
exercici3Btn.addEventListener('click', (e) => {
  const joan = new Person('Joan')
  joan.greet()
})

const exercici4Btn = document.getElementById('exercici4-btn')
exercici4Btn.addEventListener('click', (e) => {
  const numbers = [1, 2, 3, 4, 5]
  printNumbers(numbers)
})

const exercici5Btn = document.getElementById('exercici5-btn')
exercici5Btn.addEventListener('click', (e) => {
  delayedMessage("3 seconds later...")
})
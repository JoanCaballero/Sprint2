// Exercici 1
const potConduir = (age) => { age > 18 ? console.log('Pots conduir') : console.log('No pots conduir')}

// Exercici 2
const numGran = (number1, number2) => {
  number1 > number2
    ? console.log(`${number1} és més gran que ${number2}`)
    : console.log(`${number2} és més gran que ${number1}`)
}

// Exercici 3.1
const signeNum = (number) => {
  number === 0
    ? console.log(`El nombre ${number} és zero!`)
    : number > 0
    ? console.log(`El nombre ${number} és més gran que zero`)
    : console.log(`El nombre ${number} és més petit que zero`)
}

// Exercici 3.2
const trobarMax = (a, b, c) => {
  let numMax = undefined
  a > b ? (numMax = a) : (numMax = b)
  c > numMax ? (numMax = c) : (numMax = numMax)
  console.log(numMax)
}

// Exercici 4
const  parOImpar= (nums = []) => {
  for (let i = 0; i < numbers.length; i++) {
    const message = `El valor a la posició ${i} de l'array és ${nums[i]}, és un nombre `
    nums[i] % 2 == 0
      ? console.log(message + 'parell')
      : console.log(message + 'imparell')
  }
}

// HTML
const exercici1Btn = document.getElementById('exercici1-btn')
exercici1Btn.addEventListener('click', (e) => {
  potConduir(19)
  potConduir(12)
})

const exercici2Btn = document.getElementById('exercici2-btn')
exercici2Btn.addEventListener('click', (e) => {
  numGran(7, 14)
  numGran(49, 7)
})

const exercici31Btn = document.getElementById('exercici31-btn')
exercici31Btn.addEventListener('click', (e) => {
  signeNum(0)
  signeNum(73)
  signeNum(-37)
})

const exercici32Btn = document.getElementById('exercici32-btn')
exercici32Btn.addEventListener('click', (e) => {
  trobarMax(77, 7, -77)
})

const exercici4Btn = document.getElementById('exercici4-btn')
exercici4Btn.addEventListener('click', (e) => {
  parOImpar([7, 72, 73, 37, 44])
})
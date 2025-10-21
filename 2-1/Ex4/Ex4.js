// Exercici 1
const array1 = [1, 3, 5, 7, 9]
const array2 = [2, 4, 6, 8, 10]
const array = [...array1, ...array2]

// Exercici 2
const suma = (...array) => {
  let total = 0
  for (let num of array) {
    total += num
  }
  return total
}

// Exercici 3
const quadrat = {
  costat: '2',
  colorMarge: 'vermell',
  colorInterior: 'blau',
}
const quadrat2 = { ...quadrat }
quadrat2.costat = '3'

// Exercici 4
const noms = ['Joan', 'Judit', 'Xavi', 'Manel', 'Pumba']
const [nom1, nom2, ...altresNoms] = noms

// Exercici 5
const multiplicar3Nums = (a, b, c) => { return a * b * c}

// Exercise 6
const quadre = {
  nom: 'Nit estrellada',
  autor: 'Van Gogh',
}
const marc = {
  materialMarc: 'fusta de roure',
  colorMarc: 'marró',
}
const nitEstrellada = { ...quadre, ...marc }

// HTML
const addEventListenerClickToElement = (element, callback) => {
  element.addEventListener('click', callback)
}

const exercici1Btn = document.getElementById('exercici1-btn')
addEventListenerClickToElement(exercici1Btn, () => console.log(array))

const exercici2Btn = document.getElementById('exercici2-btn')
addEventListenerClickToElement(exercici2Btn, () => {
  const nums = [1, 2, 3, 4, 5]
  console.log(add(...nums))
})

const exercici3Btn = document.getElementById('exercici3-btn')
addEventListenerClickToElement(exercici3Btn, () => {
  console.log(quadrat)
  console.log(quadrat2)
})

const exercici4Btn = document.getElementById('exercici4-btn')
addEventListenerClickToElement(exercici4Btn, () => {
  console.log(`Primer nom: ${nom1}`)
  console.log(`Segon nom: ${nom2}`)
  console.log(`Resta de noms: ${altresNoms}`)
})

const exercici5Btn = document.getElementById('exercici5-btn')
addEventListenerClickToElement(exercici5Btn, () =>{
  const tresNums = [1, 3, 4]
  console.log(multiplicar3Nums(...tresNums))
})

const exercici6Btn = document.getElementById('exercici6-btn')
addEventListenerClickToElement(exercici6Btn, () => console.log(nitEstrellada))
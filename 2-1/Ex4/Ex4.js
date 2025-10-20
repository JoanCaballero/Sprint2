// Exercici 1
const array1 = [1, 2, 3, 5, 8]
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
const multiplicar3Nums = (a, b, c) => {
  return a * b * c
}

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
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  console.log(allNumbers)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  const numbers = [1, 2, 3]
  console.log(addition(...numbers))
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  console.log(fiatPanda2000)
  console.log(fiatPanda2001)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  console.log(`The first fruit is ${fruit1}`)
  console.log(`The second fruit is ${fruit2}`)
  console.log(`All the other fruits are ${allOtherFruits}`)
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  const numbersToMultiply = [1, 3, 4]
  console.log(multiply3Numbers(...numbersToMultiply))
})

const exercise6Btn = document.getElementById('exercise6-btn')
exercise6Btn.addEventListener('click', (e) => {
  console.log(stoneAxe)
})
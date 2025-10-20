// Exercici 1
const processar = (num, callback) => { callback(num)}

// Exercici 2
const calculadora = (a, b, callback) => { return callback(a, b)}
const add = (a, b) => { return a + b}

// Exercici 3
const esperarISaludar = (nom, callback) => {
setTimeout(() => {
    callback(nom)
  }, 2000)
}
const saluda = (name) => { console.log(`Hola ${name}`)}

// Exercici 4
const processarElements = (nums = [], callback) => {
  nums.forEach((num) => {
    callback(num)
  })
}
const seguirArray = (num) => { console.log(`El teu nombre és ${num}`)}

// Exercici 5
const processarCadena = (paraula, callback) => {
  const paraulaMaj = paraula.toUpperCase()
  callback(paraulaMaj)
}
const ensenyarParaula = (word) => { console.log(`La paraula en majúscules: ${word}`)}

// HTML
const exercici2Btn = document.getElementById('exercici2-btn')
exercici2Btn.addEventListener('click', (e) => {
  const resultat = calculadora(2, 5, add)
  console.log(resultat)
})

const exercici3Btn = document.getElementById('exercici3-btn')
exercici3Btn.addEventListener('click', (e) => {
  esperarISaludar('Joan', saluda)
})

const exercici4Btn = document.getElementById('exercici4-btn')
exercici4Btn.addEventListener('click', (e) => {
  processarElements([2, 4, 6, 8], seguirArray)
})

const exercici5Btn = document.getElementById('exercici5-btn')
exercici5Btn.addEventListener('click', (e) => {
  processarCadena('paraula', ensenyarParaula)
})
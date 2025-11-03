// Exercici 1
const noms = ['Anna', 'Bernat', 'Clara']
const imprimirNoms = (noms) => {
  noms.forEach(nom => console.log(nom));
}

// Exercici 2
const imprimirNomsForOf = (noms) => {
  for (let nom of noms) {
    console.log(nom);
  }
}

// Exercici 3
const numeros = [1, 2, 3, 4, 5, 6]
let numerosParells = numeros.filter(num => num % 2 === 0)

// Exercici 4
const obj = {nom: 'Ona', edat: 25, ciutat: 'Barcelona'}
const imprimirObj = (obj) => {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Exercici 5
const numsFinsA5 = (nums) => {
    for (let num of nums) {
        console.log(num);
        if (num === 5) break;
    }
}

// Exercici 6
const imprimirNomsIPosicio = (noms) => {
    let i = 0;
    for (let nom of noms) {
        console.log(`Posició ${i}: ${nom}`);
        i++;
    }
}

// HTML
const addEventListenerClickToElement = (element, callback) => {
  element.addEventListener('click', callback)
}

const exercici1Btn = document.getElementById('exercici1-btn')
addEventListenerClickToElement(exercici1Btn, () => imprimirNoms(noms))

const exercici2Btn = document.getElementById('exercici2-btn')
addEventListenerClickToElement(exercici2Btn, () => imprimirNomsForOf(noms))

const exercici3Btn = document.getElementById('exercici3-btn')
addEventListenerClickToElement(exercici3Btn, () => console.log(numerosParells))

const exercici4Btn = document.getElementById('exercici4-btn')
addEventListenerClickToElement(exercici4Btn, () => imprimirObj(obj))

const exercici5Btn = document.getElementById('exercici5-btn')
addEventListenerClickToElement(exercici5Btn, () => numsFinsA5(numeros))

const exercici6Btn = document.getElementById('exercici6-btn')
addEventListenerClickToElement(exercici6Btn, () => imprimirNomsIPosicio(noms))

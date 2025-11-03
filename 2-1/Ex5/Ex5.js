// Exercici 1
const nums = [1, 2, 3, 4]
const quadratNums = nums.map(num => num * num)

// Exercici 2
const numsParells = nums.filter(num => num % 2 === 0)

// Exercici 3
const nums2 = [1, 10, 8, 11]
const primerNumGran = nums2.find(num => num > 9)

// Exercici 4
const nums3 = [13, 7, 8, 21]
const sumaNums = nums3.reduce((acc, curr) => acc + curr, 0)

// Exercici 5
const nums4 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]
const filtratge = nums4.filter(num => num > 9).map(num => num * 2).reduce((acc, curr) => acc + curr, 0)

// Exercici 6
const nums5 = [11, 12, 13, 14]
const totsGrans = nums5.every(num => num > 9)
const algunGran = nums5.some(num => num > 9)

// HTML
const addEventListenerClickToElement = (element, callback) => {
  element.addEventListener('click', callback)
}

const exercici1Btn = document.getElementById('exercici1-btn')
addEventListenerClickToElement(exercici1Btn, () => console.log(quadratNums))

const exercici2Btn = document.getElementById('exercici2-btn')
addEventListenerClickToElement(exercici2Btn, () => console.log(numsParells))

const exercici3Btn = document.getElementById('exercici3-btn')
addEventListenerClickToElement(exercici3Btn, () => console.log(primerNumGran))

const exercici4Btn = document.getElementById('exercici4-btn')
addEventListenerClickToElement(exercici4Btn, () => console.log(sumaNums))

const exercici5Btn = document.getElementById('exercici5-btn')
addEventListenerClickToElement(exercici5Btn, () => console.log(filtratge))

const exercici6Btn = document.getElementById('exercici6-btn')
addEventListenerClickToElement(exercici6Btn, () => console.log(totsGrans, algunGran))
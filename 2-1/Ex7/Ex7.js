// Exercici 1 i 2
const promesaHolaMon = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món!');
    }, 2000);
})

// Exercici 3
const promesaHola =(missatge) => {
    return new Promise((resolve, reject) => {
        if (missatge === 'Hola') {
            resolve(missatge + ', món!');
        } else {
            reject('Missatge no reconegut');
        }
    }, 2000);
} 

// Exercici 4
const mostraSalutacio = async () => {
  const resultat = await promesaHolaMon;
  console.log(resultat);
}

// Exercici 5
const imprimirSalutacioTryCatch = async () => {
    try {
        const missatge = await promesaHolaMon;
        console.log(missatge);
    } catch (error) {
        console.error(error);
    }
}

// Exercici 6
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Primera promesa resolta');
    }, 2000);
})

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Segona promesa resolta');
    }, 3000);
})


// HTML
const addEventListenerClickToElement = (element, callback) => {
  element.addEventListener('click', callback)
}

const exercici12Btn = document.getElementById('exercici12-btn')
addEventListenerClickToElement(exercici12Btn, () => promesaHolaMon.then(missatge => console.log(missatge)))

const exercici3Btn = document.getElementById('exercici3-btn')
addEventListenerClickToElement(exercici3Btn, () => {
    promesaHola('Adeu').then(missatge => console.log(missatge));
    promesaHola('Hola').then(missatge => console.log(missatge));
})

const exercici4Btn = document.getElementById('exercici4-btn')
addEventListenerClickToElement(exercici4Btn, () => mostraSalutacio())

const exercici5Btn = document.getElementById('exercici5-btn')
addEventListenerClickToElement(exercici5Btn, () => imprimirSalutacioTryCatch())

const exercici6Btn = document.getElementById('exercici6-btn')
addEventListenerClickToElement(exercici6Btn, () => {
    Promise.all([promesa1, promesa2]).then((resultats) => console.log(resultats))
})
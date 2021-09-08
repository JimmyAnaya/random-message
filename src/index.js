//Declarao el arreglo
const messages = [
    'Oscar',
    'Ana',
    'Yesica',
    'Diego',
    'Laura',
    'Sergio',
    'Stefan'
];

//funciòn que envia aleatoriamente los nombres del arreglo
const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

//Exportar como un mòdulo
module.exports = { randomMsg };
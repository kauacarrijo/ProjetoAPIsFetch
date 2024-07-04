class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.marca = marca
        this.modelo = modelo
        this.categoria = categoria
        this.ano = ano
        this.quilometragem = quilometragem
        this.valor = valor
    }
}

const carroOne = new Carro('Audi', 'R8', 'Sedan', 2024, 0, 1000000)


function getAllCars() {
    fetch('https://apigenerator.dronahq.com/api/GrZVsz0b/data')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.log('Erro: ', error))
}

function getCarById(id) {
    fetch(`https://apigenerator.dronahq.com/api/GrZVsz0b/data/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error('Error:', error));
}

function createCar(carro) {
    fetch('https://apigenerator.dronahq.com/api/GrZVsz0b/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carro)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.error('Error:', error));
}

function updateCar(id, carro) {
    fetch(`https://apigenerator.dronahq.com/api/GrZVsz0b/data/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carro)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.error('Error:', error));
}

function deleteCar(id) {
    fetch(`https://apigenerator.dronahq.com/api/GrZVsz0b/data/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.error('Error:', error));
}
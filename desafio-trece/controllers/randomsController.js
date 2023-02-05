const { fork } = require('child_process');
const { request, response } = require("express");
const { environment } = require('../configuration/environment')


const randomNumGeneratorFork = fork('../desafio-doce/utils/numberRandoms.js');


const randomsController = (req = request, res = response) => {
  const cant = req.query.number 
  
  // Si no viene la query retorna la cantidad de 10000000;
  if (!cant) {
    console.log(cant);
    randomNumGeneratorFork.send(environment.NUMBER_LIMIT);
  }

  // Generea los numeros aleatorios y lo devuelve en un formato JSON;
  randomNumGeneratorFork.on('message', (result) => {
    return res.status(200).json(result);
  });

  // Si hay query toma el valor correspondiente
  randomNumGeneratorFork.send(cant);
}; 

module.exports = randomsController
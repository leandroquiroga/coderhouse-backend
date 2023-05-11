function generateNumberRandom (num){
  const arrRandomNumber = [];
  for (let i = 0; i < num; i++) {
    arrRandomNumber.push(
      Math.floor(Math.random() * 1000)
    );
  };
  return arrRandomNumber;
};

process.on('message', (num) => {
  const numbersRandoms = generateNumberRandom(num);
  process.send(numbersRandoms);
});
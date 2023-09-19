const number = 15;


const numero = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number); 
  } else {
    reject("Il numero non è maggiore di 10");
  }
});

numero
  .then((risultato) => {
    console.log(`Il numero è: ${risultato}`);
  })
  .catch((errore) => {
    console.error(`Errore: ${errore}`);
  });

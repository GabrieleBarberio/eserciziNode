function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((result) => {
    console.log(result); // risultato di joe
    return luckyDraw("Caroline"); // return della funzione chiamata con carolina
  })
  .then((result) => {
    console.log(result); // risultato di Caroline
    return luckyDraw("Sabrina"); // return della funzione chiamata co sabrina
  })
  .then((result) => {
    console.log(result); // risultato di sabrina
  })
  .catch((error) => {
    console.log(error.message); // catch deglie rrori
  });

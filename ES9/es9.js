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

const getResults = async () => {
  try {
    const joeResult = await luckyDraw("Joe");
    console.log(joeResult);

    const carolineResult = await luckyDraw("Caroline");
    console.log(carolineResult);

    const sabrinaResult = await luckyDraw("Sabrina");
    console.log(sabrinaResult);
  } catch (error) {
    console.log(error.message);
  }
};

getResults();

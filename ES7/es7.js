const fs = require("fs");

const text = "Sono Gabriele Barberio e ho scelto Iliad!";
const fileName = "iliad.txt";

// uso diretto
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error(
      "Si è verificato un errore durante la scrittura del file:",
      err
    );
  } else {
    console.log(`Creazione del file '${fileName}' eseguita!`);
  }
});
// wrappato in una func
const generateFile = (fileName, text) => {
  return fs.writeFile(fileName, text, (err) => {
    if (err) {
      console.error(
        "Si è verificato un errore durante la scrittura del file:",
        err
      );
    } else {
      console.log(`Creazione del file '${fileName}' eseguita!`);
    }
  });
};

generateFile("vodafone.txt", "Sono Gabriele Barberio e ho scelto Voafone!");

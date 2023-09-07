// lanciare "node" nel terminale poi

const randomBytes = crypto.randomBytes(10);
const id = randomBytes.toString("hex");
console.log("Random id:", id);

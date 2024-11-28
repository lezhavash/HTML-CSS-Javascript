const fs = require("fs");
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we noa about th avocado: ${textIn}.\n`;
fs.writeFileSync("./txt/output.txt", textOut);

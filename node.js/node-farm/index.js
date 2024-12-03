const fs = require("fs");
const http = require("http");
const url = require("url");
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we noa about th avocado: ${textIn}.\n`;
// fs.writeFileSync("./txt/output.txt", textOut);

// Mon-Block
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Written");
//       });
//     });
//   });
// });
// console.log("Will Read file");

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

/////////
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);
const server = http.createServer((req, res) => {
  const { query, pathName } = url.parse(req.url, true);

  //Overview
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const cardsHtml = dataObject
      .map((el) => replaceTemplate(templateCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    //Product Page
  } else if (pathName === "/product") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(templateProduct, product);
    res.end("This is an product");

    //API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);

    //Not Found
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-oun-header": "naxui",
    });
    res.end("<h1>Naxu</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

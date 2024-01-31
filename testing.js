/////////////////////////////////////////
//FILES

/* 

// Blocking, Synchronous way :
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about avocado : ${textIn}.\n Created on ${new Date()}`;
fs.writeFileSync("./txt/output.txt", textOut);

// Non-blocking, Acynchronous way:
fs.readFile("./txt/start.txt", "utf-8", (err1, data1) => {
  if (err1) return console.log("error message :", err1.message);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err2, data2) => {
    if (err2) return console.log("error message :", err2.message);
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err3, data3) => {
      if (err3) return console.log("error message :", err3.message);
      console.log("data 3 : ", data3);
      fs.writeFile("./txt/final.txt", `${data2} \n${data3}`, "utf-8", (err) => {
        console.log("File Written 🥰");
      });
    });
  });
});
console.log("will read file"); //so here will read the file in the back-ground and will execute the other while reading file
*/

/**
 *  const data = fs.readFile(
      `${__dirname}/dev-data/data.json`,
      "utf-8",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "application/json" });
          res.end(JSON.stringify({ error: "Internal Server Error" }));
          return console.log(err.message);
        }

        const productData = JSON.parse(data);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    );
 */

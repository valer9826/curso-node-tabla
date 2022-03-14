const {
  crearArchivo,
  crearArchivo2,
  crearArchivo3,
} = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log(`base: yargs ${argv.base}`);

crearArchivo3(argv.base, argv.listar, argv.hasta)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(process.argv);
// const [, , argv = "base = 5"] = process.argv;
// const [, base] = argv.split("=");

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });

// crearArchivo2(base)
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

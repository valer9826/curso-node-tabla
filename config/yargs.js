const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    demandOption: false,
    default: false,
    type: "boolean",
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    demandOption: true,
    default: 10,
    type: "number",
    describe: "Hasta que numero quieres la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("El valor introducido no es un numero");
    }
    return true;
  }).argv;

module.exports = argv;

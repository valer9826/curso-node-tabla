const fs = require("fs");
require("colors");

const crearArchivo = (base) => {
  console.log(`======================`);
  console.log(`       TABLA DEL ${base}`);
  console.log(`======================`);

  let salida = ``;

  for (let i = 0; i < 13; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
  }

  console.log(salida);

  fs.writeFileSync(`tabla-${base}.txt`, salida);

  console.log(`El archivo tabla-${base}.txt ha sido creado!`);
};

const crearArchivo2 = (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    console.log("======================".green);
    console.log(`       TABLA DEL ${colors.blue(base)}`);
    console.log(`======================`.green);

    let salida = ``;

    for (let i = 0; i < 13; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) reject(err);
      else resolve(`El archivo tabla-${base}.txt ha sido creado!`);
    });
  });
};

const crearArchivo3 = async (base, listar = false, hasta) => {
  try {
    let salida = ``;

    for (let i = 0; i < hasta + 1; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(`======================`);
      console.log(`       TABLA DEL ${base}`);
      console.log(`======================`);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return console.log(`El archivo tabla-${base.green}.txt ha sido creado!`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = {
  crearArchivo,
  crearArchivo2,
  crearArchivo3,
};

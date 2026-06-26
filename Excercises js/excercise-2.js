"use strict";
const inventario = [
  {
    nombre: "Filtro de Aire",
    curacion: 15,
    efectoEspecial: "Super escudo",
    stock: 2,
    usar: function (usuario, objetivo) {
      ((usuario.salud += this.curacion), (usuario.escudo += 30));
    },
  },

  {
    nombre: "Escencia de Mandragóra",
    curacion: 25,
    efectoEspecial: "ninguno",
    stock: 1,
    usar: function (usuario, objetivo) {
      usuario.salud += this.curacion;
    },
  },
  {
    nombre: "Elixir de fuego",
    curacion: 10,
    efectoEspecial: "Critico asegurado",
    stock: 2,
    usar: function (usuario, objetivo) {
      ((usuario.salud += this.curacion),
        actualizarSalud(objetivo, usuario.ataqueMax * 2));
      console.log("GOLPE CRITICO!!!");
    },
  },
];

const habilidades = [
  {
    nombre: "Canto Siniestro",
    usar: function (usuario, dañoProvocado) {
      usuario.salud += dañoProvocado;
    },
  },
];

const heroe = {
  nombre: "Arturo",
  salud: 80,
  ataqueMax: 15,
  escudo: 0,
  cinturon: inventario,
};

const monstruo = {
  nombre: "Gorgona",
  salud: 100,
  ataqueMax: 20,
  escudo: 30,
};

const generarGolpe = function (ataqueMaximo) {
  let golpe = Math.floor(Math.random() * ataqueMaximo) + 1;
  if (golpe >= ataqueMaximo * 0.9) {
    console.log(`¡GOLPE CRITICO!`);
    golpe *= 2;
  }
  return golpe;
};

const actualizarSalud = function (personaje, daño) {
  if (personaje.escudo > 0) {
    if (daño <= personaje.escudo) {
      personaje.escudo -= daño;
      daño = 0;
      console.log(
        `El golpe ha rebotado en el escudo de ${personaje.nombre} y restan ${personaje.escudo}`,
      );
    } else {
      daño -= personaje.escudo;
      personaje.escudo = 0;
    }
  }
  personaje.salud -= daño;
  if (personaje.salud < 0) {
    personaje.salud = 0;
  }
  console.log(
    `${personaje.nombre} ha recibido ${daño} puntos de daño y le quedan ${personaje.salud} PS`,
  );
};

//Battle Function
const simularBatalla = function () {
  while (monstruo.salud > 0 && heroe.salud > 0) {
    console.log(`---Turno de ${heroe.nombre}!!`);
    if (heroe.salud < 60 && Math.random() < 0.5) {
      //Actualizar tomar pocion
      let pocionUsada = false;
      for (let i = 0; i < heroe.cinturon.length; i++) {
        const pocionActual = heroe.cinturon[i];
        if (pocionActual.stock > 0) {
          pocionActual.stock--;
          pocionUsada = true;
          pocionActual.usar(heroe, monstruo);

          console.log(
            `***${heroe.nombre} ha usado ${pocionActual.nombre} y se ha curado ${pocionActual.curacion} y tiene el efecto ${pocionActual.efectoEspecial}!`,
          );
          break;
        }
      }
      continue;
    }
    actualizarSalud(monstruo, generarGolpe(heroe.ataqueMax));

    if (monstruo.salud === 0) {
      break;
    }

    console.log(`---Turno de ${monstruo.nombre}`);
    let dañoProvocado = generarGolpe(monstruo.ataqueMax);
    actualizarSalud(heroe, dañoProvocado);

    if (monstruo.salud < 90 && Math.random() > 0.1) {
      habilidades[0].usar(monstruo, dañoProvocado);
      console.log(`** Gorgona ha usado Canto Siniestro`);
    }

    if (heroe.salud === 0) {
      break;
    }
  }

  if (monstruo.salud === 0) {
    console.log(
      `${monstruo.nombre} ha sido derrotado, ¡${heroe.nombre} ha vencido!`,
    );
  } else {
    console.log(
      `${heroe.nombre} ha sido derrotado, ¡${monstruo.nombre} se lo ha devorado!`,
    );
  }
};

simularBatalla();

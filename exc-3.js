"use strict";
// const aprendiz = {
//   nombre: "Gideon",
//   magia: 40,
//   reparar: function (objetivo) {
//     this.magia -= 15;
//     objetivo.escudo += 15;
//     console.log(
//       `${this.nombre} ha reparado 15 puntos del escudo de ${objetivo.nombre}`,
//     );
//   },
// };

// const caballero = {
//   nombre: "Arturo",
//   escudo: 10,
// };

// aprendiz.reparar(caballero);
// console.log(caballero);

// const tabernero = {
//   nombre: "Barnaby",
//   oroCaja: 100,
//   cobrarEntrada: function (visitante) {
//     if (visitante.oroBolsillo >= 20) {
//       ((this.oroCaja += 20),
//         (visitante.oroBolsillo -= 20),
//         console.log(`${visitante.nombre} es bienvenido a la Taberna`));
//     } else {
//       console.log(
//         `${visitante.nombre} no tiene suficiente oro, regresa cuando tengas mas!`,
//       );
//     }
//   },
// };

// const cliente = {
//   nombre: "Arturo",
//   oroBolsillo: 150,
// };

// console.log(tabernero, cliente);
// tabernero.cobrarEntrada(cliente);
// console.log(tabernero, cliente);

const instructor = {
  nombre: "Caspian",
  ejerciciosRealizados: 0,
  /**
   *
   */
  entrenarRecluta(alumno) {
    while (alumno.energia > 0) {
      alumno.energia -= 5;
      this.ejerciciosRealizados += 1;

      if (Math.random() > 0.95 || this.ejerciciosRealizados === 10) {
        console.log(`${alumno.nombre} se ha lastimado!!! Suficiente por hoy`);
        break;
      }
      if (Math.random() < 0.2) {
        console.log(`¡Mal ejecutado, repite el movimiento!`);
        continue;
      }
      console.log(
        `¡${alumno.nombre} golpea el saco!  Energia restante: ${alumno.energia}`,
      );
    }
    console.log(`¡${alumno.nombre} Esta exhausto¡ El entrenamiento termino`);
  },
};

const recluta = {
  nombre: "Pip",
  energia: 30,
};
instructor.entrenarRecluta(recluta);

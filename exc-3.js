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

//------------------- Segundo Ejercicio-------------------------------------
// const instructor = {
//   nombre: "Caspian",
//   ejerciciosRealizados: 0,

//   entrenarRecluta(alumno) {
//     while (alumno.energia > 0) {
//       alumno.energia -= 5;
//       this.ejerciciosRealizados += 1;

//       if (Math.random() > 0.95) {
//         console.log(`${alumno.nombre} se ha lastimado!!! Suficiente por hoy`);
//         break;
//       }
//       if (Math.random() < 0.2) {
//         console.log(`¡Mal ejecutado, repite el movimiento!`);
//         continue;
//       }
//       console.log(
//         `¡${alumno.nombre} golpea el saco!  Energia restante: ${alumno.energia}`,
//       );
//     }
//     console.log(
//       `¡${alumno.nombre} esta exhausto¡ El entrenamiento ha terminadó. ¡Bien Hecho ${alumno.nombre} 👏🏻!`,
//     );
//   },

//   /**
//    *
//    */
//   evaluarCarrera(alumno) {
//     while (alumno.energia > 0 && alumno.distanciaRecorrida < 100) {
//       alumno.energia -= 10;
//       if (alumno.energia <= 0) {
//         alumno.energia = 0; // Evitamos que muestre números negativos si gastara más
//         break;
//       }
//       alumno.distanciaRecorrida += Math.round(Math.random() * (30 - 10) + 10);
//       console.log(
//         `${alumno.nombre} ha completado otra vuelta, lleva metros ${alumno.distanciaRecorrida}, aun tiene ${alumno.energia} de energia restante.`,
//       );
//     }
//     if (alumno.distanciaRecorrida >= 100) {
//       console.log(`${alumno.nombre} completo la carrera.`);
//     } else {
//       console.log(`¡${alumno.nombre} se desmayó en el camino!`);
//     }
//   },
// };

// const recluta = {
//   nombre: "Pip",
//   energia: 50,
//   distanciaRecorrida: 0,

//   descansar() {
//     this.energia += 50;
//     console.log(`---${this.nombre} ha descansado y se siente como nuevo!!!`);
//   },
// };
// instructor.evaluarCarrera(recluta);
// recluta.descansar();
// instructor.entrenarRecluta(recluta);

//------------------- Segundo Ejercicio-------------------------------------
const cajaFuerte = {
  contraseña: Math.round(Math.random() * 10) + 1,
  oroResguardado: 1000,
};

const ladron = {
  nivelDestreza: 5,
  energiaMagica: 30,
  tamañoBolsa: 500,
  guarida: 0,
  roboExitoso: false,
  /**
   *Accion principal de Robar la caja fuerte
   */
  forzarCerradura(objetivo) {
    while (this.energiaMagica > 0) {
      this.energiaMagica -= 5;
      let intento = Math.round(Math.random() * 10) + 1;
      if (objetivo.contraseña === intento) {
        objetivo.oroResguardado -= this.tamañoBolsa;
        this.roboExitoso = true;
        console.log(
          `¡El ladron ha logrado abrir el cofre! Se ha llevado consigo ${this.tamañoBolsa}, la caja tiene ${objetivo.oroResguardado} monedas restantes!!!`,
        );
        break;
      } else if (this.energiaMagica <= 0) {
        console.log(`La policia ha llegado y ha arrestado al ladron`);
        break;
      } else {
        console.log(
          `El ladron intento el numero: ${intento}, pero falló. le queda ${this.energiaMagica} de energia magica`,
        );
      }
    }
  },
  /**
   * Funcion para contar dinero obtenido
   */
  contarGanancias(bolsa) {
    for (let i = 0; i < bolsa.length; i++) {
      const element = bolsa[i];
      this.guarida += element.valor;
    }
  },
};

ladron.forzarCerradura(cajaFuerte);

const bolsaDelLadron = [
  { nombre: "Anillo de Rubí", valor: 150 },
  { nombre: "Cáliz de Plata", valor: 80 },
  {
    nombre: "Bolsa de moneda",
    valor: ladron.roboExitoso === true ? ladron.tamañoBolsa : 0,
  },
  { nombre: "Monedas Sueltas", valor: 45 },
  { nombre: "Corona de Oro", valor: 150 },
];

ladron.contarGanancias(bolsaDelLadron);
console.log(ladron.guarida);

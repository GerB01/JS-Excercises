"use strict";

//Inicio del juego
//Lista de competidores
const caballeroUno = {
  nombre: "Arturo",
  salud: 50,
  energia: 50,
  fuerza: 30,
  destreza: 5,
  puntajeRetoUno: 0,
  puntajeRetoDos: 0,
  puntajeRetoTres: 0,
};
const caballeroDos = {
  nombre: "Lancelot",
  salud: 80,
  energia: 25,
  fuerza: 50,
  destreza: 2,
  puntajeRetoUno: 0,
  puntajeRetoDos: 0,
  puntajeRetoTres: 0,
};
const caballeroTres = {
  nombre: "Germán",
  salud: 40,
  energia: 45,
  fuerza: 25,
  destreza: 8,
  puntajeRetoUno: 0,
  puntajeRetoDos: 0,
  puntajeRetoTres: 0,
};

//Lista de objetos para usar en competencias
const objetos = [
  {
    nombre: "Pocion de Vigor",
    usar: function (objetivo) {
      objetivo.fuerza *= 1.25;
      objetivo.salud *= 1.25;
      objetivo.energia *= 1.25;
      console.log(
        `${objetivo.nombre} ha usado ${this.nombre}. ¡Tu fuerza y estadísticas aumentaron! 💪🏻`,
      );
    },
  },
  {
    nombre: "Hechizo de punteria",
    usar: function (objetivo) {
      if (Math.random() < 0.8) {
        objetivo.destreza *= 2;
        console.log(
          `${objetivo.nombre} ha usado el hechizo de puntería correctamente. ¡Ahora tienes vista de águila! 🎯`,
        );
      } else {
        objetivo.destreza = 2;
        console.log(
          `¡${objetivo.nombre} ha fallado el hechizo! Ahora está mareado 🤢`,
        );
      }
    },
  },
  {
    nombre: "Pan Elfeico",
    usar: function (objetivo) {
      if (Math.random() < 0.75) {
        objetivo.salud += 20;
        objetivo.energia += 20;
        console.log(
          `¡${objetivo.nombre} ha comido un ${this.nombre}! ¡Tu vida y energía se han recuperado 20 puntos! ❤️‍🩹`,
        );
      } else {
        objetivo.salud -= 20;
        console.log(
          `¡El ${this.nombre} estaba podrido! Tu vida ha bajado 20 puntos 🤒`,
        );
      }
    },
  },
];

//Array de actividades posibles a elegir
const acciones = [
  {
    nombre: "Descansar",
    usar: function (objetivo) {
      if (objetivo.nombre === "Arturo") {
        objetivo.salud = 50;
        objetivo.energia = 50;
        objetivo.fuerza = 30;
        objetivo.destreza = 5;
      } else if (objetivo.nombre === "Lancelot") {
        objetivo.salud = 80;
        objetivo.energia = 25; // Corregido a su energía inicial
        objetivo.fuerza = 50;
        objetivo.destreza = 2;
      } else if (objetivo.nombre === "Germán") {
        objetivo.salud = 40;
        objetivo.energia = 45; // Corregido a su energía inicial
        objetivo.fuerza = 25;
        objetivo.destreza = 8;
      }
      console.log(
        `${objetivo.nombre} ha descansado y recuperado sus estadísticas bases. ¡Ha perdido todos los efectos de estado! 🛌`,
      );
    },
  },
  {
    nombre: "Comer",
    usar: function (objetivo) {
      let numero = Math.random();
      if (numero >= 0.8) {
        objetivo.salud += 30;
        objetivo.energia += 30;
        console.log(
          `¡${objetivo.nombre} ha comido un festín! y ha recuperado 30 de salud y energía 🍖`,
        );
      } else if (numero > 0.4 && numero < 0.8) {
        objetivo.salud += 20;
        objetivo.energia += 20;
        console.log(
          `¡${objetivo.nombre} ha comido unas viandas! y ha recuperado 20 de salud y energía 🍲`,
        );
      } else {
        objetivo.salud -= 20;
        objetivo.energia -= 20;
        console.log(
          `¡${objetivo.nombre} ha comido alimento en mal estado! y ha perdido 20 de salud y energía 🤢`,
        );
      }
    },
  },
  {
    nombre: "Disparar flecha",
    usar: function (objetivo) {
      objetivo.energia -= 5;
      // Corregido el orden de Number y .toFixed() y removido el return muerto
      return Math.floor(
        objetivo.destreza *
          (objetivo.energia * 0.25) *
          (objetivo.fuerza * 0.5) *
          Number((Math.random() * (1 - 0.8) + 0.8).toFixed(2)),
      );
    },
  },
  {
    nombre: "Entrenar",
    usar: function (objetivo) {
      if (Math.random() < 0.8) {
        objetivo.energia -= 15;
        objetivo.salud -= 5;
        objetivo.fuerza *= 1.3;
        objetivo.destreza *= 1.3;
        console.log(
          `${objetivo.nombre} ha preferido entrenar. ¡Su destreza y fuerza suben! 🏋🏻‍♂️`,
        );
      } else {
        objetivo.energia -= 15;
        objetivo.salud -= 5;
        objetivo.fuerza *= 0.8;
        objetivo.destreza *= 0.9;
        console.log(
          `${objetivo.nombre} se ha lesionado entrenando. ¡Su destreza y fuerza disminuyen! 🩼`,
        );
      }
    },
  },
];

//Primera competencia--carrera
function primerReto(objetivo) {
  let distanciaRecorrida = 0;
  while (distanciaRecorrida < 200) {
    // CORRECCIÓN: Si el caballero tiene poca energía, usa el objeto ANTES de correr para evitar desmayarse directamente
    if (objetivo.energia <= 15) {
      objetos[2].usar(objetivo);
    }

    objetivo.energia -= 15;
    distanciaRecorrida += 50;
    console.log(
      `Los competidores han dado una vuelta al campo --- ${distanciaRecorrida}m de 200m`,
    );

    if (objetivo.energia <= 0) {
      objetivo.puntajeRetoUno = 0;
      console.log(
        `${objetivo.nombre} se ha quedado sin energía y se ha desmayado. La carrera termina.`,
      );
      break;
    } else if (distanciaRecorrida >= 200) {
      objetivo.puntajeRetoUno = 20;
      console.log(`${objetivo.nombre} ha terminado la carrera ¡Felicidades!`);
      break;
    }
  }
}

//Segunda competencia--Tiro con arco
function segundoReto(objetivo) {
  let tiros = 0;
  let puntajeTotal = 0;
  while (tiros < 3) {
    tiros += 1;
    let puntaje = acciones[2].usar(objetivo);
    puntajeTotal += puntaje;
    console.log(
      `${objetivo.nombre} ha disparado una flecha, su puntaje es: ${puntaje}.`,
    );
  }
  console.log(
    `El puntaje total de ${objetivo.nombre} es de: ¡${puntajeTotal}!. 🎯`,
  );
  if (puntajeTotal > 2000) {
    objetivo.puntajeRetoDos = 20;
    console.log(`¡Gran puntería! Recibe 20 puntos`);
  } else if (puntajeTotal <= 2000 && puntajeTotal > 1000) {
    objetivo.puntajeRetoDos = 10;
    console.log(`¡Podría ser mejor pero bien hecho! Recibe 10 puntos`);
  } else {
    objetivo.puntajeRetoDos = 5;
    console.log(`¡Al menos le diste a algo! Recibe 5 puntos`);
  }
}

function granTorneo() {}

//Testing
segundoReto(caballeroTres);

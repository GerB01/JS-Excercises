"use strict";

const inventario = [
  {
    nombre: "Esencia de Mandrágora",
    precio: 50,
    stock: 4,
    ingredientes: ["Raíz de Mandrágora", "Agua de Manantial"],
  },
  {
    nombre: "Elíxir de Fuego",
    precio: 120,
    stock: 2,
    ingredientes: ["Polvo de Labre", "Lágrima de Fénix"],
  },
  {
    nombre: "Filtro de Aire",
    precio: 85,
    stock: 0,
    ingredientes: ["Esencia de Viento", "Pluma de Hipogrifo"],
  },
];

//Funcion calcular Valor Total de las Pociones
const calcValorTotal = function (lsInventario) {
  let totalOro = 0;

  for (let i = 0; i < lsInventario.length; i++) {
    let valorPocion = lsInventario[i].stock * lsInventario[i].precio;
    totalOro += valorPocion;
  }
  return totalOro;
};
console.log(calcValorTotal(inventario));

//Funcion para vender las pociones
const venderPocion = function (nombrePocion) {
  for (let i = 0; i < inventario.length; i++) {
    const pocion = inventario[i];

    if (pocion.nombre === nombrePocion) {
      if (pocion.stock > 0) {
        console.log("¡Vendido!");
        pocion.stock--;
      } else {
        console.log(
          `Sin stock, la pocion: ${pocion.nombre} no esta disponible por el momento`,
        );
      }
      return;
    }
  }
  console.log("No tenemos esa pocion");
};

venderPocion("Filtro de Aire");
venderPocion("Esencia de Mandrágora");
venderPocion("Elixir de Fuego");
venderPocion("Esencia de Mandrágora");
console.log(calcValorTotal(inventario));

const restockPocion = function (nombrePocion, cantidad) {
  for (let i = 0; i < inventario.length; i++) {
    const pocion = inventario[i];

    if (nombrePocion === pocion.nombre) {
      pocion.stock += cantidad;
      console.log(
        `¡Inventario actualizado! Ahora tienes ${pocion.stock} unidades de ${pocion.nombre}.`,
      );
      return;
    }
  }
  console.log(
    `El alquimista no puede reabastecer ${nombrePocion} porque no tiene la formula base`,
  );
};

restockPocion("Filtro de Aire", 5);
console.log(calcValorTotal(inventario));

const añadirPocima = function (nuevaPocion) {
  for (let i = 0; i < inventario.length; i++) {
    const pocion = inventario[i];
    if (nuevaPocion.nombre === pocion.nombre) {
      console.log(
        `La pocion${nuevaPocion.nombre} ya esta registrada en el inventario`,
      );
      return;
    }
  }
  inventario.push(nuevaPocion);
  console.log(
    `¡Formula Magistral añadida! ${nuevaPocion.nombre} esta ahora en el inventario`,
  );
};

añadirPocima({
  nombre: "Atrapa Sueños",
  precio: 140,
  stock: 3,
  ingredientes: ["Hueso de unicornio", "Escama de dragón"],
});

console.log(inventario);

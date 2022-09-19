//objetos

let producto = {
    nombre: "Monitor LCD 24 pulgadas",
    precio: 5000,
    imagen: "imagien.srs"
}

let arreglo = [
    {nombre: "Mando ps5", precio: 2500},
    {nombre: "Laptop msi", precio: 35000},
    {nombre: "mouse gaming", precio: 2500},
    {nombre: "Mando xbox one", precio: 1500}
]

//destructuring
let {precio} = producto;
console.log(precio);

console.log(arreglo);
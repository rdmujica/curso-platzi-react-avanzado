const codigoProductos = [
  'cod2',
  'cod2',
  'cod3',
  'cod1',
  'cod4',
  'cod5',
  'cod2',
  'cod1',
  'cod3',
  'cod4',
  'cod2',
  'cod5',
  'cod1',
  'cod6'
]

const myMap = new Map()

const contar = (codigo) => {
  const cant = myMap.has(codigo) ? myMap.get(codigo) + 1 : 1
  myMap.set(codigo, cant)
}

codigoProductos.map(contar)

console.log(myMap)

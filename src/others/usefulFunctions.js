export const getCorrectUnit = (unit, amount) => {
  if (unit.endsWith('a') || unit.endsWith('e') || unit.endsWith('i') || unit.endsWith('o') || unit.endsWith('u'))
    return amount !== 1 ? unit + 's' : unit;
  else if (unit.endsWith('s'))
    return unit;
  else
    return amount !== 1 ? unit + 'es' : unit;
};

export const getProductName = (id) => {
  return productsNames[id];
};
export const productsNames = ['Pera','Tomate','Manzana','Ciruela','Durazno', 'Frambuesa', 'Arveja', 'Huevo', 'Queso','Papa'];
export const units = ['Libra','Unidad','Litro'];
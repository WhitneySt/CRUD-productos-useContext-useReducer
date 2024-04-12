export function generarColoresAleatorios(arrayOriginal) {
  const nuevoArray = [];

  for (const elemento of arrayOriginal) {
    const colorAleatorio = generarColorAleatorio();
    const nuevoObjeto = { category: elemento, color: colorAleatorio };
    nuevoArray.push(nuevoObjeto);
  }

  return nuevoArray;
}

 function generarColorAleatorio() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue}, .7)`;
}

function generarColorLilaAleatorio() {
  const porcentaje = Math.random(); // Valor aleatorio entre 0 y 1
  const colorBase = "#D8B2FF"; // Color lila base en formato hexadecimal
  const colorClaro = "#F8F9FF"; // Color lila más claro
  const colorOscuro = "#B89BFF"; // Color lila más oscuro

  // Interpolación de color
  const red = Math.floor(
    colorBase.substring(1, 3) * porcentaje +
      colorClaro.substring(1, 3) * (1 - porcentaje)
  );
  const green = Math.floor(
    colorBase.substring(3, 5) * porcentaje +
      colorClaro.substring(3, 5) * (1 - porcentaje)
  );
  const blue = Math.floor(
    colorBase.substring(5, 7) * porcentaje +
      colorClaro.substring(5, 7) * (1 - porcentaje)
  );

  return `rgb(${red}, ${green}, ${blue})`;
}
export function generarColoresAleatorios(arrayOriginal) {
  const nuevoArray = [];

  for (const elemento of arrayOriginal) {
    const colorAleatorio = generarColorAleatorio();
    const colorFont = getContrastColor(colorAleatorio)
    const nuevoObjeto = { category: elemento, color: colorAleatorio, colorFont };
    nuevoArray.push(nuevoObjeto);
  }

  return nuevoArray;
}

 function generarColorAleatorio() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue}, .8)`;
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

function getContrastColor(backgroundColor) {
  // Verifica si el color es en formato RGBA
  if (backgroundColor.startsWith("rgba")) {
    // Extrae los valores de RGBA
    const rgbaMatch = backgroundColor.match(
      /rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(\.\d+)?)\)/
    );
    if (!rgbaMatch) {
      throw new Error("Formato RGBA inválido");
    }
    const [, r, g, b, a] = rgbaMatch.map(parseFloat);

    // Calcula el brillo basado en los valores RGB y el valor alfa (a)
    const brightness = ((r * 299 + g * 587 + b * 114) / 1000) * a;

    // Elige el color de texto según el brillo del color de fondo
    return brightness > 128 ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  } else {
    // Convierte el color de fondo a un valor numérico en base 16 (para otros formatos como hexadecimal)
    const hexColor = backgroundColor.replace("#", "");
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    // Calcula el brillo según la fórmula de luminancia Y
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Elige el color de texto según el brillo del color de fondo
    return brightness > 128 ? "#000000" : "#ffffff";
  }
}
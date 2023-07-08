export default function converteParaGSheets(linhaGSheets, campos) {
  const output = {};
  campos.forEach((campo, index) => {
    output[campo] = linhaGSheets[index];
  });
  return output;
}

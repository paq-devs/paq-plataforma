import { definicoesTabelasGSheets } from "../constants/definicoesTabelasGSheets";

const formataDadosDaLinhaDoGSheets = (linhaGSheets, campos) => {
  const output = {};
  campos.forEach((campo, index) => {
    output[campo] = linhaGSheets[index];
  });
  return output;
};

const converterGSheetsParaEntidade = ({ nomeDaEntidade, dadosBrutos }) => {
  const definicoesDaEntidade = definicoesTabelasGSheets.filter(
    (d) => d.nome === nomeDaEntidade
  )[0];

  if (!definicoesDaEntidade) {
    throw new Error(
      `Não foi encontrada a definição da tabela ${nomeDaEntidade}`
    );
  }

  const { campos, primeiraLinhaEhCabecalho } = definicoesDaEntidade;
  const dadosConvertidos = [];
  dadosBrutos.forEach((linha, index) => {
    if (primeiraLinhaEhCabecalho && index === 0) return;

    const dados = formataDadosDaLinhaDoGSheets(linha, campos);

    dadosConvertidos.push(dados);
  });

  return dadosConvertidos;
};

export { formataDadosDaLinhaDoGSheets, converterGSheetsParaEntidade };

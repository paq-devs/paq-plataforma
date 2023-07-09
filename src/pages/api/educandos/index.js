import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";
import { converterGSheetsParaEntidade } from "@/servicos/conversores/ConversorGenerico";

const ordenarPorNomeCompleto = (listaDeEducandos) =>
  listaDeEducandos.sort((a, b) => (a.nomeCompleto < b.nomeCompleto ? -1 : 1));

export default async function handler(req, res) {
  const entidade = "educandos";
  const educandos = await lerPlanilhaGoogleSheetsAsync(`${entidade}!A:Z`);
  const listaDeEducandos = converterGSheetsParaEntidade({
    nomeDaEntidade: entidade,
    dadosBrutos: educandos,
  });
  const listaOrdenada = ordenarPorNomeCompleto(listaDeEducandos);

  res.status(200).json(listaOrdenada);
}

import readDataService from "@/servicos/gsheets/readDataService";
import { converterGSheetsParaEntidade } from "@/servicos/conversores/ConversorGenerico";

const buscarEducandoPorId = async (id) => {
  const entidade = "educandos";
  const data = await readDataService(`${entidade}!A:Z`);
  const educandos = converterGSheetsParaEntidade({
    nomeDaEntidade: entidade,
    dadosBrutos: data,
  });
  return educandos.find((educando) => educando.id === id.toString());
};

export default buscarEducandoPorId;

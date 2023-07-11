import readDataService from "@/servicos/gsheets/readDataService";
import { converterGSheetsParaEntidade } from "@/servicos/conversorGSheets";

const educandoRepositorio = {
  async buscarEducandoPorId(id) {
    const entidade = "educandos";
    const data = await readDataService(`${entidade}!A:Z`);
    const educandos = converterGSheetsParaEntidade({
      nomeDaEntidade: entidade,
      dadosBrutos: data,
    });
    return educandos.find((educando) => educando.id === id.toString());
  },
  async buscarTodosOsEducandos() {
    const entidade = "educandos";
    const data = await readDataService(`${entidade}!A:Z`);
    return converterGSheetsParaEntidade({
      nomeDaEntidade: entidade,
      dadosBrutos: data,
    });
  },
};

export default educandoRepositorio;

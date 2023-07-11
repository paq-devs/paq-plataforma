import { formataDadosDaLinhaDoGSheets } from "./conversorGSheets";

describe("converteParaGSheets", () => {
  describe("quando recebe uma linha do GSheets e uma lista de campos", () => {
    it("deve retornar um objeto com os campos como chaves", () => {
      const linhaGSheets = [1, "joao", "17"];
      const campos = ["id", "nome", "idade"];
      const output = formataDadosDaLinhaDoGSheets(linhaGSheets, campos);
      const outputEsperado = {
        id: 1,
        nome: "joao",
        idade: "17",
      };
      expect(output).toEqual(outputEsperado);
    });
  });
});

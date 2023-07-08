import converteParaGSheets from "./ConversorGenerico";

describe("converteParaGSheets", () => {
  describe("quando recebe uma linha do GSheets e uma lista de campos", () => {
    it("deve retornar um objeto com os campos como chaves", () => {
      const linhaGSheets = [1, "joao", "17"];
      const campos = ["id", "nome", "idade"];
      const output = converteParaGSheets(linhaGSheets, campos);
      const outputEsperado = {
        id: 1,
        nome: "joao",
        idade: "17",
      };
      expect(output).toEqual(outputEsperado);
    });
  });
});

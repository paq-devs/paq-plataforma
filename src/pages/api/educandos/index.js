import educandoRepositorio from "@/repositorios/educandosRepositorio";

const ordenarPorNomeCompleto = (listaDeEducandos) =>
  listaDeEducandos.sort((a, b) => (a.nomeCompleto < b.nomeCompleto ? -1 : 1));

export default async function handler(req, res) {
  const todosPsEducandos = await educandoRepositorio.buscarTodosOsEducandos();
  const todosOsEducandosOrdenados = ordenarPorNomeCompleto(todosPsEducandos);
  res.status(200).json(todosOsEducandosOrdenados);
}

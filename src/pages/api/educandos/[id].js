import educandoRepositorio from "@/repositorios/educandosRepositorio";

export default async function handler(req, res) {
  const educando = await educandoRepositorio.buscarEducandoPorId(req.query.id);
  res.status(200).json(educando);
}

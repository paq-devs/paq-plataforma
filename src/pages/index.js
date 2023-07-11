import Head from "next/head";
import PaginaInicial from "@/components/PaginaInicial";
import PaqNavbar from "@/components/PaqNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>PAQ - Educandos</title>
        <meta name="description" content="Página dos educandos do PAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaqNavbar>
        <PaginaInicial />
      </PaqNavbar>
    </>
  );
}

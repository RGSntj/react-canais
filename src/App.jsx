import { useState } from "react"
import { Card } from "./components/card"
import "./styles.scss"

import axios from "axios"
import { useEffect } from "react";

export function App() {
  const [arrayCanais, setArrayCanais] = useState([]);

  useEffect(() => {
      async function pegarCanais(){
        const resposta = await axios.get("http://localhost:3001/canais");
        
        setArrayCanais(resposta.data)
      }

      pegarCanais();
  }, []);

  return (
    <>
    <header>
      <a href="" className="logo">PRODUTORAS</a>

      <div>
        <ul className="navbar">
          <li><a href="">Consultar</a></li>
          <li><a href="" className="sair" >Sair</a></li>
        </ul>
      </div>
    </header>

    <h1 className="titulo-canais">Canais</h1>

    <section>
      <div className="container-canais">
        {arrayCanais.map((canal) => <Card nome={canal.nm_canal} url={canal.urlImagem} />)}
      </div>
    </section>
    </>
  )
}
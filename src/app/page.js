"use client";
import React, { useEffect, useState } from "react";
import { getObras } from './lib/tainacan-api';
import Link from "next/link";
import { Loader } from "@/components/loader";

import styles from './styles/page.module.css';

const filtros={
  todas: null,
  murais: 315,
  pinturas: 40,
};

export function Header({ activeTab, setActiveTab }) {
  return (
    <header className={styles.topbar}>
      <h1 className={styles.heading}>Obras</h1>
      <nav className={styles.navi}>
        <button
          className={activeTab === "todas" ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab("todas")}
        >
          Todas
        </button>
        <button
          className={activeTab === "murais" ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab("murais")}
        >
          Murais
        </button>
        <button
          className={activeTab === "pinturas" ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab("pinturas")}
        >
          Pinturas
        </button>
      </nav>
    </header>
  );
}

function CardObra({ obra }) {
  return (

    <Link 
      href={`/obras/${obra.id}`} 
      className={styles.card} 
    >
      {obra.imgSrc ? (
        <img 
          src={obra.imgSrc} 
          alt={obra.titulo} 
          className={styles.image} 
          // loading="lazy"
       />
      ) : (
        // Placeholder caso não haja imagem
        <div className={styles.imgph}>🖼️</div>
      )}
      <div className={styles.inf}>
        {/* <h3>{obra.titulo}</h3> */}
        <strong>{obra.titulo}</strong>
      </div>
    </Link>
  );
}

export default function Page() {
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [activeTab, setActiveTab]=useState('todas');
  const perPage = 20;

  useEffect(() => {

    setLoading(true);

    const categoriaId=filtros[activeTab];

    getObras(perPage, page, categoriaId)
      .then(setObras)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, activeTab]); // recarrega quando muda a pagina ou aba

  console.log(obras);

  // Reseta a página para 1 quando trocar de aba
  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  // estado de carregamento (loading...)
  if (loading) {
    return (
      <div className={styles.page}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className={styles.appcontainer}>
          
          <div className={styles.load}>
            <Loader />
          </div>

        </main>
      </div>
    );
  }

  // estado de sucesso
  return (
    <div className={styles.page}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className={styles.appcontainer}>
        <div className={styles.obraslist}>
          {obras.map((obra) => (
            <CardObra key={obra.id} obra={obra} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            margin: "2rem 0",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Anterior
          </button>
          <span>Página {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={obras.length < perPage}
          >
            Próxima
          </button>
        </div>
      </main>
    </div>
  );
}
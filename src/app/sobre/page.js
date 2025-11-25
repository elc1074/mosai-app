// src/app/sobre/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Camada de fundo */}
      <div className={styles.background}></div>

      <div className={styles.content}>
        
        {/* Simulação da Logomarca */}
        {/* <div className={styles.logoContainer}> */}
          <Image
            src="/logo.png"
            width={360}
            height={320}
            alt="logo"
          />
        {/* </div> */}

        {/* <h1 className={styles.appName}>mosai</h1> */}
        <p className={styles.slogan}>explore a arte e a memória da ufsm</p>

        <div className={styles.infoBlock}>
          <span className={styles.label}>Proposta</span>
          <p className={styles.text}>
            Conectar a comunidade acadêmica e visitantes à riqueza cultural da UFSM através de uma experiência digital imersiva e acessível.
          </p>

          <span className={styles.label}>Versão</span>
          <p className={styles.text}>1.0.0 (Beta)</p>
        </div>

        <footer className={styles.footer}>
          <p>© 2025 Universidade Federal de Santa Maria</p>
          <p>Desenvolvido por Gabriel da Silva França</p>
          <p>Projeto de Software II</p>
        </footer>
      </div>
    </div>
  );
}
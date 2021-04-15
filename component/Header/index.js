import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.containers}>
          <img className="mx-auto" src="/logo.png" alt="SuggestionBox" />
        </div>
      </div>
      <div className={styles.menu}>
        <Link href="/sobre">
          <a className={styles.linkMenu}>Sobre</a>
        </Link>
        <Link href="/contato">
          <a className={styles.linkMenu}>Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className={styles.linkMenu}>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;

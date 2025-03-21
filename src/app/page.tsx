import TicTocToe from "./TicTocToe";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Tic-Toc-Toe</h1>
      <TicTocToe />

    </div>
  );
}

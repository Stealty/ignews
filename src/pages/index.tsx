import styles from "../style/home.module.scss";

export default function Home() {
  return (
    <h1 className={styles.title}>
      Hello <span className={styles.span}>World</span>
    </h1>
  );
}

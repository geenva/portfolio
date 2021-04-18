import Headd from "../components/Head";
import styles from "../styles/Home.module.css";
import Contents from "../components/contents";

export default function Home() {
  return (
    <div className={styles.container}>
      <Headd />
      <Contents />
    </div>
  );
}

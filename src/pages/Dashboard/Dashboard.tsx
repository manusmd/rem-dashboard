import styles from "./Dashboard.module.css";
import Title from "../../components/Title/Title";

export default function Dashboard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title title="Dashboard" />
    </div>
  );
}

import styles from "./MonitoringContent.module.css";
import Title from "../../components/Title/Title";

export default function MonitoringContent(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title title="Content" />
    </div>
  );
}

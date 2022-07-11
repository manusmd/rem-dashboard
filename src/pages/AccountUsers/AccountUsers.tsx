import styles from "./AccountUsers.module.css";
import Title from "../../components/Title/Title";

export default function AccountUsers(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title title="Users" />
    </div>
  );
}

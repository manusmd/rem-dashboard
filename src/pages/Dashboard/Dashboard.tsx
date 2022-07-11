import styles from "./Dashboard.module.css";
import Title from "../../components/Title/Title";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useState } from "react";

export default function Dashboard(): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.container}>
      <Title title="Brands" />
      <Searchbar inputCallback={setSearch} />
    </div>
  );
}

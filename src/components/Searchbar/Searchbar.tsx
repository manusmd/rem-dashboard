import { useState } from "react";
import styles from "./Searchbar.module.css";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsIcon from "@mui/icons-material/TableRows";
import SearchIcon from "@mui/icons-material/Search";

type SearchbarProps = {
  inputCallback: (value: string) => void;
};

export default function Searchbar({
  inputCallback,
}: SearchbarProps): JSX.Element {
  const [filter, setFilter] = useState("");

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    inputCallback(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className={styles.container}>
      <select className={styles.filterSelection}>
        <option defaultChecked>Your brands</option>
        <option value="">All brands</option>
      </select>
      <div className={styles.searchInputWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search brands..."
          onChange={onChangeHandler}
        />
        <SearchIcon />
      </div>
      <div className={styles.layoutSelector}>
        <GridViewSharpIcon />
        <TableRowsIcon />
      </div>{" "}
    </div>
  );
}

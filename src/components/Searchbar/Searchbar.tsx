import { useState, useMemo, useEffect } from "react";
import styles from "./Searchbar.module.css";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsIcon from "@mui/icons-material/TableRows";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";

type SearchbarProps = {
  inputCallback: (value: string) => void;
};

export default function Searchbar({
  inputCallback,
}: SearchbarProps): JSX.Element {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    inputCallback(event.target.value);
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
          onChange={debouncedResults}
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

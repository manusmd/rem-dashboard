import { useState, useMemo, useEffect } from "react";
import styles from "./Searchbar.module.css";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsIcon from "@mui/icons-material/TableRows";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";

/*In this case, the searchbar is just used for the brand search. That's why it isn't really reusable now.*/

type SearchbarProps = {
  inputCallback: (value: string) => void;
  layoutCallback: (value: string) => void;
};

export default function Searchbar({
  inputCallback,
  layoutCallback,
}: SearchbarProps): JSX.Element {
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
        <div
          className={styles.layoutItem}
          onClick={() => layoutCallback("grid")}
        >
          <GridViewSharpIcon />
        </div>
        <div
          className={styles.layoutItem}
          onClick={() => layoutCallback("list")}
        >
          <TableRowsIcon />
        </div>
      </div>{" "}
    </div>
  );
}

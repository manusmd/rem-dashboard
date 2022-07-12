import styles from "./Dashboard.module.css";
import Title from "../../components/Title/Title";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import BrandsList from "../../components/BrandsList/BrandsList";
import { BrandTileProps } from "../../components/BrandTile/BrandTile";

export default function Dashboard(): JSX.Element {
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const [layout, setLayout] = useState("");

  const API_BRANDS = `http://localhost:3001/brands?name_like=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_BRANDS);
      const data = await response.json();
      const sortedData = data.sort((a: BrandTileProps, b: BrandTileProps) =>
        a.name.localeCompare(b.name)
      );
      setBrands(sortedData);
    };
    fetchData();
  }, [search]);

  return (
    <div className={styles.container}>
      <Title title="Brands" />
      <Searchbar layoutCallback={setLayout} inputCallback={setSearch} />
      <BrandsList layout={layout} items={brands} />
    </div>
  );
}

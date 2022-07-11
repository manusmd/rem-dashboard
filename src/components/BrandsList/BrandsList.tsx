import BrandTile, { BrandTileProps } from "../BrandTile/BrandTile";
import styles from "./BrandsList.module.css";

type BrandsListProps = {
  items: Array<BrandTileProps>;
};

export default function BrandsList({ items }: BrandsListProps): JSX.Element {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <BrandTile key={item.name} logo={item.logo} name={item.name} />
      ))}
    </div>
  );
}

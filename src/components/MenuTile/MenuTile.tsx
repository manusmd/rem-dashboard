import Button from "../Button/Button";
import styles from "./MenuTile.module.css";

type MenuTileProps = {
  layout: "list" | "grid";
};

export default function MenuTile({ layout }: MenuTileProps): JSX.Element {
  //This component just mocks a menu tile. There is no functionality!
  return (
    <div className={layout === "grid" ? styles.container : styles.listMenu}>
      <a className={styles.links} href="">
        All phases
      </a>
      <a className={styles.links} href="">
        Monitoring
      </a>
      <a className={styles.links} href="">
        Amazon Cases
      </a>
      <Button
        text="Dashboard"
        onClick={() => alert("Dashboard")}
        type="primary"
      />
      <Button
        text="Product Catalog"
        onClick={() => alert("Product Catalog")}
        type="secondary"
      />
    </div>
  );
}

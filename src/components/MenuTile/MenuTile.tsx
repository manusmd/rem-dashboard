import Button from "../Button/Button";
import styles from "./MenuTile.module.css";

export default function MenuTile(): JSX.Element {
  //This component just mocks a menu tile. There is no functionality!
  return (
    <div className={styles.container}>
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

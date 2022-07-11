import styles from "./BrandTile.module.css";

export type BrandTileProps = {
  logo: string;
  name: string;
};

export default function BrandTile({
  logo: img,
  name,
}: BrandTileProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} />
      <span className={styles.brandName}>{name}</span>
    </div>
  );
}

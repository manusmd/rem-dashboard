import { useState } from "react";
import MenuTile from "../MenuTile/MenuTile";
import styles from "./BrandTile.module.css";

export type BrandTileProps = {
  logo: string;
  name: string;
};

export default function BrandTile({
  logo: img,
  name,
}: BrandTileProps): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={name}
      className={styles.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover ? (
        <>
          <img className={styles.img} src={img} />
          <span className={styles.brandName}>{name}</span>
        </>
      ) : (
        <MenuTile />
      )}
    </div>
  );
}

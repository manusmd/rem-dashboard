import { useState } from "react";
import MenuTile from "../MenuTile/MenuTile";
import styles from "./BrandTile.module.css";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence key="menuTiles">
        {!isHover ? (
          <>
            <img className={styles.img} src={img} />
            <span className={styles.brandName}>{name}</span>
          </>
        ) : (
          <motion.div
            className={styles.menuContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MenuTile />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

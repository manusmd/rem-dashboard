import { useState } from "react";
import MenuTile from "../MenuTile/MenuTile";
import styles from "./BrandTile.module.css";
import { motion, AnimatePresence } from "framer-motion";

export type BrandTileProps = {
  logo: string;
  name: string;
};

export default function BrandTile({ logo, name }: BrandTileProps): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={name}
      className={styles.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className={styles.img} src={logo} />
      <span className={styles.brandName}>{name}</span>

      <AnimatePresence key="menuTiles">
        {isHover && (
          <motion.div
            className={styles.menuContainer}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
          >
            <MenuTile layout={"grid"} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

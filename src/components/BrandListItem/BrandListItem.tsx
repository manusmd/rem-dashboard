import styles from "./BrandListItem.module.css";
import { BrandTileProps } from "../BrandTile/BrandTile";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuTile from "../MenuTile/MenuTile";

export default function BrandsListItem({ logo, name }: BrandTileProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.container}
    >
      <img className={styles.logo} src={logo} />
      <span className={styles.name}>{name}</span>
      <AnimatePresence>
        {isHover && (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.menuContainer}
          >
            <MenuTile layout="list" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

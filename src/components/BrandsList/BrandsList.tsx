import BrandTile, { BrandTileProps } from "../BrandTile/BrandTile";
import styles from "./BrandsList.module.css";
import { motion, AnimatePresence } from "framer-motion";

type BrandsListProps = {
  items: Array<BrandTileProps>;
};

export default function BrandsList({ items }: BrandsListProps): JSX.Element {
  return (
    <AnimatePresence key="brands">
      <div className={styles.container}>
        {items.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <BrandTile key={item.name} logo={item.logo} name={item.name} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

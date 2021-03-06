import BrandTile, { BrandTileProps } from "../BrandTile/BrandTile";
import styles from "./BrandsList.module.css";
import { motion, AnimatePresence } from "framer-motion";
import BrandsListItem from "../BrandListItem/BrandListItem";

type BrandsListProps = {
  items: Array<BrandTileProps>;
  layout: string;
};

export default function BrandsList({
  items,
  layout,
}: BrandsListProps): JSX.Element {
  return (
    <AnimatePresence key="brands">
      <div className={layout === "grid" ? styles.container : styles.layoutList}>
        {items.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            {layout === "grid" ? (
              <BrandTile key={item.name} logo={item.logo} name={item.name} />
            ) : (
              <BrandsListItem
                key={item.name}
                logo={item.logo}
                name={item.name}
              />
            )}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

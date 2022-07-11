import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.copyright}>
        © 2019 All Rights Reserved | Remazing
      </span>
      <div>
        <a className={styles.footerLinks} href="">
          Terms & conditions
        </a>
        <span> | </span>
        <a className={styles.footerLinks} href="">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

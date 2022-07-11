import styles from "./Title.module.css";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span>{title}</span>
    </div>
  );
}

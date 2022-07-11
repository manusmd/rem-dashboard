import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  type: "primary" | "secondary";
};

export default function Button({
  text,
  onClick,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={type === "primary" ? styles.btnPrimary : styles.btnSecondary}
    >
      {text}
    </button>
  );
}

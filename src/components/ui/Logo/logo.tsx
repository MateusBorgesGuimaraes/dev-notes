import { Link } from "@tanstack/react-router";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      Dev notes.
    </Link>
  );
};

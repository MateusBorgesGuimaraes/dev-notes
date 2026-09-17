import { Link } from "@tanstack/react-router";
import { LoginForm } from "../../forms/LoginForm/loginForm";
import styles from "./login.module.css";

export default function Login() {
  return (
    <section className={`container ${styles.loginPage}`}>
      <div className={styles.header}>
        <h2>Entrar</h2>
        <p>Acesse o painel administrativo</p>
      </div>

      <LoginForm />

      <p>
        Não tem uma conta? <Link to="/register">Registrar</Link>
      </p>
    </section>
  );
}

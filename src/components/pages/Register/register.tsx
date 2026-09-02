import { Link } from "@tanstack/react-router";
import { RegisterForm } from "../../forms/RegisterForm/registerForm";
import styles from "./register.module.css";

export default function Register() {
  return (
    <section className={`container ${styles.registerPage}`}>
      <div className={styles.header}>
        <h2>Criar Conta</h2>
        <p>Cadastre-se para escrever e gerenciar posts</p>
      </div>

      <RegisterForm />

      <p>
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </section>
  );
}

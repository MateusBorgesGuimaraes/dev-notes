import { Link, useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "../../../stores/authStore";
import { ButtonLink } from "../../ui/ButtonLink/buttonLink";
import { Logo } from "../../ui/Logo/logo";
import styles from "./header.module.css";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const clear = () => {
    logout();
    navigate({ to: "/" });
  };
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <div>
        {isAuthenticated === true ? (
          <div className={styles.userInfos}>
            <Link to="/admin">Painel Admin</Link>
            <p>{user?.name}</p>
            <ButtonLink text="Sair" onClick={clear} variant="outline" />
          </div>
        ) : (
          <>
            <ButtonLink text="Entrar" link="/login" variant="outline" />
            <ButtonLink text="Registrar" link="/register" variant="primary" />
          </>
        )}
      </div>
    </header>
  );
};

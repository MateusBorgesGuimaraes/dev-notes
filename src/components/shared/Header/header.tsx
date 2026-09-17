import { Link, useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "../../../stores/authStore";
import { ButtonLink } from "../../ui/ButtonLink/buttonLink";
import { Logo } from "../../ui/Logo/logo";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import styles from "./header.module.css";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const clear = () => {
    logout();
    navigate({ to: "/" });
  };

  const buttonSize = isMobile ? "sm" : "md";

  return (
    <header className={`${styles.header} container`}>
      <Logo />

      <div>
        {isAuthenticated ? (
          <div className={styles.userInfos}>
            <Link to="/admin">Painel Admin</Link>
            <p>{user?.name}</p>

            <ButtonLink
              text="Sair"
              onClick={clear}
              variant="outline"
              size={buttonSize}
            />
          </div>
        ) : (
          <>
            <ButtonLink
              text="Entrar"
              link="/login"
              variant="outline"
              size={buttonSize}
            />

            <ButtonLink
              text="Registrar"
              link="/register"
              variant="primary"
              size={buttonSize}
            />
          </>
        )}
      </div>
    </header>
  );
};

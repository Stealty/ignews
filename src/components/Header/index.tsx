// import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SignInButton } from "./SignInButton/index";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Image src={Logo} alt="Logo IgNews" /> */}
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}

import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGoogle color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className="closeIcon" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("google")}
    >
      <FaGoogle color="#eba417" />
      Signin With Google
    </button>
  );
}

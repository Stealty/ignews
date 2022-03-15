import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn("google");
      return;
    }
  }

  return (
    <button
      type="button"
      className={styles.SubscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  );
}

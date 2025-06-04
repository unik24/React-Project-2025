// import { KeyRound } from "lucide-react";

// export const KeyIcon = ({ size = 20, color = "yellow" }) => {
//   return <KeyRound size={size} color={color} />;
// };

import { KeyRound } from "lucide-react";
import styles from "./KeyIcon.module.css"; // Importa tus estilos

export const KeyIcon = ({ size = 20, color = "yellow", margin = "" }) => {
  return (
    <div
      className={`${styles.userIconWrapper} ${margin ? styles[margin] : ""}`}
    >
      <KeyRound size={size} color={color} />
    </div>
  );
};

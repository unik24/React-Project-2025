// import { User } from "lucide-react";

// export const UserIcon = ({ size = 20, color = "#007bff", margin="" }) => {
//   return <User size={size} color={color} />;
// };

import { User } from "lucide-react";
import styles from "./UserIcon.module.css"; // Importa tus estilos

export const UserIcon = ({ size = 20, color = "#007bff", margin = "" }) => {
  return (
    <div
      className={`${styles.userIconWrapper} ${margin ? styles[margin] : ""}`}
    >
      <User size={size} color={color} />
    </div>
  );
};

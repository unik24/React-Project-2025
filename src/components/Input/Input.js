import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";

const Input = ({
  value,
  onChange,
  placeholder = "",
  type,
  icon,
  debounce,
  size,
}) => {
  const [internalValue, setInternalValue] = useState(value || "");

  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  useEffect(() => {
    if (debounce != null) {
      const handler = setTimeout(() => {
        if (internalValue !== value) {
          onChange(internalValue);
        }
      }, debounce);

      return () => clearTimeout(handler);
    } else {
      onChange(internalValue);
    }
  }, [internalValue, debounce, onChange, value]);

  const inputClass = [
    styles.inputElement,
    icon && styles.hasIcon,
    type === "password" && styles.passwordInput,
    size === "small" && styles.inputSmall,
    size === "large" && styles.inputLarge,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.inputContainer}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
      />
    </div>
  );
};
export default Input;

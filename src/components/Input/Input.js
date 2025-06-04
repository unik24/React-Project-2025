import React, { useEffect, useState, useRef } from "react";
import styles from "./Input.module.css";
import { EyeClosedIcon } from "../Icons/EyeClosedIcon/EyeClosedIcon";
import { EyeIcon } from "../Icons/EyeIcon/EyeIcon";

const Input = ({
  value,
  onChange,
  placeholder = "",
  type,
  icon,
  externalIcon,
  debounce,
  size,
  className: externalClassName,
}) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [showPassword, setShowPassword] = useState(false);

  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // useEffect(() => {
  //   if (value !== internalValue) {
  //     setInternalValue(value || "");
  //   }
  // }, [value ]);

  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  useEffect(() => {
    if (debounce != null) {
      const handler = setTimeout(() => {
        onChangeRef.current(internalValue);
      }, debounce);

      return () => clearTimeout(handler);
    } else {
    }
  }, [internalValue, debounce]);

  const inputClass = [
    styles.inputElement,
    icon && styles.hasIcon,
    type === "password" && styles.passwordInput,
    size === "small" && styles.inputSmall,
    size === "large" && styles.inputLarge,
    externalClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);

    if (debounce == null && onChangeRef.current) {
      onChangeRef.current(newValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      {externalIcon && (
        <div className={styles.externalIcon}>{externalIcon}</div>
      )}
      <div className={styles.inputContainer}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <input
          type={inputType}
          placeholder={placeholder}
          className={inputClass}
          value={internalValue}
          onChange={handleChange}
        />
        {isPassword && (
          <div
            className={styles.passwordToggle}
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <EyeClosedIcon size={20} /> : <EyeIcon size={20} />}
          </div>
        )}
      </div>
    </div>
  );
};
export default Input;

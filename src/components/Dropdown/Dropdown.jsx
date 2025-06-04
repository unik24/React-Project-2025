// src/components/Dropdown/Dropdown.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  buttonContent,
  children,
  isOpen,
  onToggle,
  position = "right",
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={() => onToggle(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div className={`${styles.dropdownContent} ${styles[position]}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

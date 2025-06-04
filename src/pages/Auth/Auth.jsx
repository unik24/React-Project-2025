import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { UserIcon } from "../../components/Icons/UserIcon/UserIcon";
import { KeyIcon } from "../../components/Icons/KeyIcon/KeyIcon";
import styles from "./Auth.module.css";

function Auth() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!userName.trim()) {
      return "Username cannot be empty or just spaces.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (/\s/.test(password)) {
      return "Password cannot contain spaces.";
    }
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      return "Password must include at least one letter and one number.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (isLogin) {
      const success = login(userName, password);
      if (!success) {
        setError("Invalid username or password.");
        return;
      }
    } else {
      signup(userName, password);
    }
    setError("");
    navigate("/");
  };

  const handleUserNameChange = (value) => {
    setUserName(value);
    if (error) {
      setError("");
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (error) {
      setError("");
    }
  };

  const handleToggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError("");
    setUserName("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={handleUserNameChange}
          externalIcon={<UserIcon margin="marginRightMedium" />}
          size="large"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          externalIcon={<KeyIcon margin="marginRightMedium" />}
          size="large"
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>
      <p className={styles.toggleText}>
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={handleToggleForm}
              className={styles.toggleButton}
              type="button"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={handleToggleForm}
              className={styles.toggleButton}
              type="button"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default Auth;

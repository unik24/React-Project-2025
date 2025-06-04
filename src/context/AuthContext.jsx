import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const getAllUsersData = () => {
    try {
      return JSON.parse(localStorage.getItem("allUsersData") || "{}");
    } catch (e) {
      console.error("Error parsing allUsersData from localStorage:", e);
      localStorage.removeItem("allUsersData");
      return {};
    }
  };

  const setAllUsersData = (data) => {
    localStorage.setItem("allUsersData", JSON.stringify(data));
  };

  useEffect(() => {
    const storedCurrentUser = localStorage.getItem("currentUser");
    if (storedCurrentUser) {
      try {
        const parsedUser = JSON.parse(storedCurrentUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Error parsing currentUser from localStorage:", e);
        localStorage.removeItem("currentUser");
        setUser(null);
      }
    }
  }, []);

  const login = (username, password) => {
    const usersData = getAllUsersData();
    const userData = usersData[username];

    if (userData && userData.password === password) {
      const currentUser = {
        username: username,
        profile: userData.profile || {},
      };

      setUser(currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      return true;
    }
    return false;
  };

  const signup = (username, password) => {
    const usersData = getAllUsersData();

    if (usersData[username]) {
      alert("The username already exists. Please choose another one.");
      return false;
    }

    usersData[username] = {
      password: password,
      profile: {},
    };
    setAllUsersData(usersData);

    const newUser = {
      username: username,
      profile: {},
    };
    setUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const updateUser = (updatedUserData) => {
    if (!updatedUserData || !updatedUserData.username) {
      console.error("updateUser: Invalid user data provided.");
      return;
    }

    setUser(updatedUserData);
    localStorage.setItem("currentUser", JSON.stringify(updatedUserData));

    const usersData = getAllUsersData();
    if (usersData[updatedUserData.username]) {
      usersData[updatedUserData.username] = {
        ...usersData[updatedUserData.username],
        profile: updatedUserData.profile,
      };
      setAllUsersData(usersData);
    } else {
      console.warn(
        `updateUser: User ${updatedUserData.username} not found in allUsersData.`
      );
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

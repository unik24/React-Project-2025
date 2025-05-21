import { createContext, useContext, useState } from "react";

const HomeResetContext = createContext();

export function HomeResetProvider({ children }) {
  const [resetKey, setResetKey] = useState(0);

  const triggerReset = () => setResetKey((prev) => prev + 1);

  return (
    <HomeResetContext.Provider value={{ resetKey, triggerReset }}>
      {children}
    </HomeResetContext.Provider>
  );
}

export function useHomeReset() {
  return useContext(HomeResetContext);
}

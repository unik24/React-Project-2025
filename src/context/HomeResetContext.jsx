import { createContext, useContext, useState } from "react";

const HomeResetContext = createContext();

export function HomeResetProvider({ children }) {
  const [resetKey, setResetKey] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const triggerReset = () => {
    setResetKey((prev) => prev + 1);
    setHasSearched(false);
  };

  const startSearch = () => {
    setIsSearching(true);
    setHasSearched(true);
  };

  const endSearch = () => setIsSearching(false);

  const clearHasSearched = () => setHasSearched(false);

  return (
    <HomeResetContext.Provider
      value={{
        resetKey,
        triggerReset,
        isSearching,
        startSearch,
        endSearch,
        hasSearched,
        clearHasSearched,
      }}
    >
      {children}
    </HomeResetContext.Provider>
  );
}

export function useHomeReset() {
  return useContext(HomeResetContext);
}

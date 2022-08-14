import { createContext, useContext, useMemo } from "react";
import useLogic from "./logic";

interface ThemeContextData {
  darkMode: boolean;
  fontSize: {
    header: number;
    paragraph: number;
  };
  setDarkMode: (value: boolean) => void;
  setFontSize: (value: { header: number; paragraph: number }) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const {
    fontSize: { header, paragraph },
    darkMode,
    setDarkMode,
    setFontSize,
  } = useLogic();

  const fontSize = useMemo(
    () => ({
      header,
      paragraph,
    }),
    [header, paragraph]
  );

  const contextValue = useMemo(
    () => ({
      darkMode,
      fontSize,
      setDarkMode,
      setFontSize,
    }),
    [darkMode, fontSize, setDarkMode, setFontSize]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
}

import React, { Context, createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";
import { Theme } from "../models/theme";

const defaultTheme: Theme = 'darkdev';

type ThemeContextType = {
  theme: string;
  changeTheme: (theme: Theme) => void
}

type ChildrenProp = {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: ChildrenProp) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const changeTheme = (theme: Theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider></ThemeProvider>.')
  }

  return context;
}

import { createContext, useState, useEffect, useContext } from "react";

const ContextSettings = createContext();

export function SettingsProvider({ children }) {
  
  const [settings, setSettings] = useState(() => {
    const savedData = localStorage.getItem("app-settings");
    return savedData ? JSON.parse(savedData) : { theme: "light", language: "en" };
  });


  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);


  const setTheme = (theme) => setSettings((prev) => ({ ...prev, theme }));
  const setLanguage = (language) => setSettings((prev) => ({ ...prev, language }));
  const resetSettings = () => setSettings({ theme: "light", language: "en" });

  return (
    <ContextSettings.Provider
      value={{
        theme: settings.theme,
        language: settings.language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </ContextSettings.Provider>
  );
}

export const useSettings = () => useContext(ContextSettings);
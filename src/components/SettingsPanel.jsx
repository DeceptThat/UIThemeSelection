import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();
  const cardStyle = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";

  return (
    <div className={`p-6 rounded-lg shadow-md mb-6 ${cardStyle}`}>
      <h2 className="text-xl font-bold mb-4">Settings Panel</h2>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Theme:</label>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded border cursor-pointer ${theme === "light" ? "bg-blue-500 text-white" : "border-gray-400"}`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded border cursor-pointer ${theme === "dark" ? "bg-blue-500 text-white" : "border-gray-400"}`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Language:</label>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded border cursor-pointer ${language === "en" ? "bg-blue-500 text-white" : "border-gray-400"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("th")}
            className={`px-4 py-2 rounded border cursor-pointer ${language === "th" ? "bg-blue-500 text-white" : "border-gray-400"}`}
          >
            TH
          </button>
        </div>
      </div>

      <button
        onClick={resetSettings}
        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Reset Settings
      </button>
    </div>
  );
}
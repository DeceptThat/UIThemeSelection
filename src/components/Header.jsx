import { useSettings } from "../context/SettingsContext";

export default function Header() {
  const { language, theme } = useSettings();
  const text = language === "en" ? "Welcome" : "ยินดีต้อนรับ";
  const headerStyle = theme === "dark" ? "bg-gray-800 text-white" : "bg-blue-600 text-white";

  return (
    <header className={`p-5 text-2xl font-bold text-center shadow-md ${headerStyle}`}>
      {text}
    </header>
  );
}
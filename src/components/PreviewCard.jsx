import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();
  
  const message = language === "en" ? "This is your preference preview." : "นี่คือหน้าตัวอย่างการตั้งค่า";
  const cardStyle = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800";

  return (
    <div className={`p-6 rounded-lg shadow-md ${cardStyle}`}>
      <h2 className="text-xl font-bold mb-4">Preview Card</h2>
      
      <ul className="mb-4 space-y-2">
        <li><strong>Current Theme:</strong> <span className="uppercase">{theme}</span></li>
        <li><strong>Current Language:</strong> <span className="uppercase">{language}</span></li>
      </ul>
      
      <div className="p-4 border border-dashed rounded border-gray-400 font-medium">
        {message}
      </div>
    </div>
  );
}
import Header from "../components/Header";
import SettingsPanel from "../components/SettingsPanel";
import PreviewCard from "../components/PreviewCard";
import { useSettings } from "../context/SettingsContext";

export default function Home() {
  const { theme } = useSettings();
  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-gray-100";

  return (
    <div className={`min-h-screen transition-colors duration-200 ${bgClass}`}>
      <Header />
      <main className="max-w-2xl mx-auto p-8">
        <SettingsPanel />
        <PreviewCard />
      </main>
    </div>
  );
}
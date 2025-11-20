import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

interface Props {
  left: string;
  right: string;
  isActive?: boolean;
  activeCallback?: (active: boolean) => void;
}

export default function Toggle({ left, right, isActive, activeCallback }: Props) {
  const [active, setActive] = useState(isActive ?? false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  useEffect(() => {
    //local storage scheme set
    if (activeCallback) {
      activeCallback(active);
    }
  }, [active, activeCallback]);

  return (
    <main className="flex flex-row gap-2">
      <h3 className={`${textColor}`}>{left}</h3>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`relative w-12 h-6 ${
          isDark ? "bg-neutral-800" : "bg-gray-300"
        } rounded-full cursor-pointer transition-colors duration-300`}
      >
        <div
          className={`
          absolute top-0.5 h-5 w-5 rounded-full transition-all duration-300
          ${active ? "translate-x-6 bg-green-500" : "translate-x-0 bg-red-600"}
        `}
        />
      </div>
      <h3 className={`${textColor}`}>{right}</h3>
    </main>
  );
}

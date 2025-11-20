import { useTheme } from "../ThemeProvider";
import Toggle from "./toggle";

export default function RFooter() {
  const { theme, setTheme } = useTheme();
  return (
    <footer
      className={` flex py-3 px-3 ${
        theme === "dark" ? "text-white bg-neutral-900" : "text-black bg-gray-100"
      }`}
    >
      <Toggle
        left="☀️"
        right="🌜"
        isActive={localStorage.getItem("theme-toggle") === "dark"}
        activeCallback={(isActive) => {
          setTheme(isActive ? "dark" : "light");
        }}
      ></Toggle>
    </footer>
  );
}

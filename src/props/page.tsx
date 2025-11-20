import { useTheme } from "../ThemeProvider";

interface Props {
  url: string;
  icon: string;
}

export default function Page({ icon, url }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <a
      className={`${
        isDark ? "bg-neutral-950 border-white/5 " : "bg-gray-200 border-black/5 "
      } border p-3 rounded-full`}
      href={url}
    >
      <img className=" rounded-full bg-transparent w-8 h-8" src={icon}></img>
    </a>
  );
}

import { useState } from "react";
import "./index.css";
import Page from "./props/page";

const specialWords: { [key: string]: string } = {
  ai: "https://chatgpt.com/",
  roblox: "https://www.roblox.com/",
  youtube: "https://www.youtube.com/",
  google: "https://www.google.com/",
  discord: "https://discord.com/",
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  tiktok: "https://www.tiktok.com/",
  reddit: "https://www.reddit.com/",
  amazon: "https://www.amazon.com/",
  ebay: "https://www.ebay.com/",
  walmart: "https://www.walmart.com/",
  target: "https://www.target.com/",
  bestbuy: "https://www.bestbuy.com/",
  ro: "https://roblox.com",
  go: "https://google.com",
};

function App() {
  const [url, setUrl] = useState("");
  const isCommand = url.toLocaleLowerCase() in specialWords;

  function normalizeUrl(u: string) {
    if (u.toLowerCase() in specialWords) {
      return specialWords[u];
    }
    if (u.startsWith("p/")) {
      const without = u.slice(2);
      return "https://" + without;
    }

    if (u.endsWith(".com")) {
      return "https://" + u.toLowerCase();
    }

    if (!u.startsWith("http://") && !u.startsWith("https://")) {
      return "http://www.google.com/search?q=" + u;
    }

    return u;
  }

  return (
    <main className="w-auto h-screen content-center justify-center flex items-center">
      <div className="flex flex-col gap-y-5 items-center">
        <h1 className="text-white text-3xl font-bold">Welcome, Alejandro.</h1>

        <form className="flex gap-2" target="_blank">
          <input
            type="text"
            value={url}
            placeholder="Search or insert an URL"
            className={`bg-neutral-950 px-3 py-2 text-white w-96 rounded-3xl
               outline-1 outline-white/20
               transition-all duration-300 hover:cursor-help ${
                 isCommand ? "ring-apple" : "ring-1 ring-white/20"
               }`}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            type="submit"
            onClick={() => window.open(normalizeUrl(url), "_blank")}
            className={
              "outline-1 outline-white/20 bg-neutral-800 px-4 py-2 rounded-4xl text-white hover:cursor-pointer" +
              (isCommand ? " ring-apple" : " ring-1 ring-white/20")
            }
          >
            Search
          </button>
        </form>

        <hr className="bg-white/10 w-[120%] h-0.5" />

        <div className="flex gap-2">
          <Page
            url="https://github.com"
            icon="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png"
          />
          <Page
            url="https://roblox.com/home"
            icon="https://upload.wikimedia.org/wikipedia/commons/1/1e/Roblox_Logo_2025.png"
          />
          <Page
            url="https://www.google.com/?client=safari"
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          />
          <Page
            url="https://chatgpt.com/"
            icon="https://cdn.iconscout.com/icon/free/png-256/free-chatgpt-icon-svg-download-png-7576880.png?f=webp"
          />
        </div>

        <footer>
          <p className="text-white text-sm font-light ">Made with ❤️ by Alejandro</p>
        </footer>
      </div>
    </main>
  );
}

export default App;

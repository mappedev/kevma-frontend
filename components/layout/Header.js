import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [darkModeActive, setDarkModeActive] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (isMounted) {
      setDarkModeActive((darkModeActive) => !darkModeActive);
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <header className="bg-white-primary h-24 w-full flex items-center justify-between px-4 z-50 fixed shadow sm:px-5 dark:bg-black-primary">
      <Link href="/">
        <a>
          <h1 className="font-bold text-3xl sm:text-4xl text-orange-primary">
            KevMa
          </h1>
        </a>
      </Link>
      <button
        className={`btn btn-darkmode ${darkModeActive && "active"}`}
        onClick={handleToggle}
      >
        <p className="z-50 w-1/2">Claro</p>
        <p className="z-50 w-1/2">Oscuro</p>
      </button>
    </header>
  );
};

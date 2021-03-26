import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <header className="bg-white-primary h-24 w-full flex items-center justify-between px-4 z-50 fixed shadow sm:px-5 dark:bg-black-primary">
      <Link href="/characters">
        <a>
          <h1 className="font-bold text-3xl sm:text-4xl text-orange-primary">
            KevMa
          </h1>
        </a>
      </Link>
      <div className="flex items-center">
        <button className="mr-2 h-8 md:mr-4">
          <Image
            src={`/icons/add-character${theme === "dark" ? "-dark" : ""}.svg`}
            alt="Icono que hace referencia a agregar un nuevo personaje"
            width={32}
            height={32}
          />
        </button>
        <button
          className={`btn btn-darkmode ${
            isMounted && theme === "dark" && "active"
          }`}
          onClick={switchTheme}
        >
          <span className="z-50 w-1/2 h-6">
            <Image
              src="/icons/sun.svg"
              alt="Icono que referencia un sol, indicando que el tema está en claro"
              width={24}
              height={24}
            />
          </span>
          <span className="z-50 w-1/2 h-6">
            <Image
              src="/icons/moon.svg"
              alt="Icono que referencia una luna, indicando que el tema está en oscuro"
              width={24}
              height={24}
            />
          </span>
        </button>
      </div>
    </header>
  );
};

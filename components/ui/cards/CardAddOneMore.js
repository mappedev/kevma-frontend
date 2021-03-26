import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const CardAddOneMore = () => {
  const { theme } = useTheme();

  return (
    <li className="card p-0 w-full sm:max-w-xl 2xl:max-w-none">
      <Link href="#">
        <a className="h-full flex-center flex-col transition-colors-200 hover:text-orange-primary">
          <Image
            src={`/icons/add-character${theme === "dark" ? "-dark" : ""}.svg`}
            alt="Icono que hace referencia a agregar un nuevo personaje"
            width={32}
            height={32}
          />
          <span>Agregar unos más</span>
        </a>
      </Link>
    </li>
  );
};

import { useTheme } from "next-themes";
import Image from "next/image";

export const CardItem = ({ additionalClass = "", children }) => {
  const { theme } = useTheme();

  return (
    <div className={`card card-item ${additionalClass}`}>
      <div className="absolute right-4 bottom-3 z-40">
        <button className="mr-2 transition-colors-200 hover:text-orange-primary">
          <Image
            src={`/icons/edit${theme === "dark" ? "-dark" : ""}.svg`}
            alt="Icono que referencia a un botón para editar al personaje"
            width={24}
            height={24}
          />
        </button>
        <button className="transition-colors-200 hover:text-orange-primary">
          <Image
            src={`/icons/delete${theme === "dark" ? "-dark" : ""}.svg`}
            alt="Icono que referencia a un botón para eliminar al personaje"
            width={24}
            height={24}
          />
        </button>
      </div>
      {children}
    </div>
  );
};

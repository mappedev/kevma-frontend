import { MenuItem } from "./MenuItem";

import { menuRoutes } from "utils/menuRoutes";

export const Menu = () => {
  return (
    <>
      <nav className="bg-white-primary fixed right-0 bottom-0 left-0 h-14 z-50 shadow md:top-24 md:bottom-0 md:left-0 md:py-4 md:w-48 md:h-screen dark:bg-black-primary">
        <ul className="flex items-center justify-evenly h-full text-xl md:block">
          <MenuItem href={menuRoutes.characters} title="Personajes" />
          <MenuItem href={menuRoutes.locations} title="Lugares" />
          <MenuItem href={menuRoutes.episodes} title="Episodios" />
        </ul>
      </nav>
    </>
  );
};

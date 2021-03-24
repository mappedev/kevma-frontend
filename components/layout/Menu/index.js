import { MenuItem } from "./MenuItem";

import { menuRoutes } from "utils/menuRoutes";

export const Menu = () => {
  return (
    // <ul className="h-full px-3 flex items-center justify-between md:block md:p-0">
    //   <nav className="bg-black-primary h-14 fixed right-0 bottom-0 left-0 text-white z-50 md:py-4 md:fixed md:top-24 md:right-48 md:bottom-0 md:left-0 md md:w-48 md:h-screen">
    //     <MenuItem href={menuRoutes.characters} title="Personajes" />
    //     <MenuItem href={menuRoutes.locations} title="Lugares" />
    //     <MenuItem href={menuRoutes.episodes} title="Episodios" />
    //   </nav>
    // </ul>
    <nav className="bg-white-primary fixed right-0 bottom-0 left-0 h-14 z-50 shadow md:top-24 md:bottom-0 md:left-0 md:py-4 md:w-48 md:h-screen dark:bg-black-primary">
      <ul className="flex items-center justify-evenly h-full text-xl md:block">
        <MenuItem href={menuRoutes.characters} title="Personajes" />
        <MenuItem href={menuRoutes.locations} title="Lugares" />
        <MenuItem href={menuRoutes.episodes} title="Episodios" />
      </ul>
    </nav>
  );
};

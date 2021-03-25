import Head from "next/head";

import { Main } from "layouts/Main";
import { LocationsCard } from "components/locations/LocationsCard";

export default function Locations() {
  return (
    <>
      <Head>
        <title>KevMa - Locations</title>
      </Head>
      <ul className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 xl:grid-cols-4">
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
        <LocationsCard
          name="Earth (C-137)"
          type="Planet"
          dimension="Dimension C-137"
        />
      </ul>
    </>
  );
}

Locations.getLayout = (page) => <Main>{page}</Main>;

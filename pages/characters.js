import Head from "next/head";

import { Main } from "layouts/Main";
import { CharacterCard } from "components/characters/CharacterCard";
import { CardAddOneMore } from "components/ui/cards/CardAddOneMore";

export default function Characters() {
  return (
    <>
      <Head>
        <title>KevMa - Characters</title>
      </Head>
      <ul className="list xl:grid-cols-2">
        <CharacterCard
          fullname="Prueba Prueba"
          status="Alive"
          species="Human"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Dead"
          species="Horno"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Unknow"
          species="Perro"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Alive"
          species="Human"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Alive"
          species="Doggie"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Dead"
          species="Human"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Alive"
          species="Robot"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CharacterCard
          fullname="Prueba Prueba"
          status="Unknow"
          species="Human"
          lastKnowLocation="Monte piedad"
          firstSeenLocation="Caracas"
        />
        <CardAddOneMore />
      </ul>
    </>
  );
}

Characters.getLayout = (page) => <Main>{page}</Main>;

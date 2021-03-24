import { Main } from "layouts/Main";
import { CharacterCard } from "components/characters/CharacterCard";

export default function Characters() {
  return (
    <ul className="grid grid-cols-1 gap-6 justify-items-center xl:grid-cols-2">
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
    </ul>
  );
}

Characters.getLayout = (page) => <Main>{page}</Main>;

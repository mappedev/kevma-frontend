import Link from "next/link";
import Image from "next/image";

import { Card } from "components/Card";

export const CharacterCard = ({
  fullname,
  status,
  species,
  lastKnowLocation,
  firstSeenLocation,
}) => {
  const statusColor =
    status === "Alive"
      ? "bg-sucess"
      : status === "Dead"
      ? "bg-danger"
      : "bg-normal";

  return (
    <li className="w-full">
      <Card additionalClass='p-0 sm:inline-flex sm:max-w-xl"'>
        <div className="w-full h-64 relative sm:w-56 sm:h-auto">
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/210.jpeg"
            alt="Avatar de un personaje de Rick and Morty"
            layout="fill"
          />
        </div>
        <div className="p-3">
          <div className="mb-4">
            <Link href="#">
              <a className="transition-colors-200 hover:text-orange-primary">
                <h2 className="text-2xl font-bold">{fullname}</h2>
              </a>
            </Link>
            <p>
              <span
                className={`inline-flex items-center w-2 h-2 rounded-full mr-2 ${statusColor}`}
              />
              {status} - {species}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-primary">Last known location:</h3>
            <Link href="#">
              <a className="transition-colors-200 hover:text-orange-primary">
                {lastKnowLocation}
              </a>
            </Link>
          </div>
          <div>
            <h3 className="text-gray-primary">First seen in:</h3>
            <Link href="#">
              <a className="transition-colors-200 hover:text-orange-primary">
                {firstSeenLocation}
              </a>
            </Link>
          </div>
        </div>
      </Card>
    </li>
  );
};

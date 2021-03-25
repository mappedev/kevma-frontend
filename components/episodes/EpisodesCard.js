import Link from "next/link";

import { Card } from "components/Card";

export const EpisodesCard = ({ name, airDate, episode }) => (
  <li className="w-full">
    <Card>
      <div className="mb-4">
        <Link href="#">
          <a className="transition-colors-200 hover:text-orange-primary">
            <h2 className="text-2xl">{name}</h2>
          </a>
        </Link>
        <p>{airDate}</p>
      </div>
      <div>
        <h3 className="text-gray-400">Temporada y capítulo</h3>
        <p>{episode}</p>
      </div>
    </Card>
  </li>
);

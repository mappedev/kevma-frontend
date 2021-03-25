import Link from "next/link";

import { Card } from "components/Card";

export const LocationsCard = ({ name, type, dimension }) => (
  <li className="w-full">
    <Card>
      <div className="mb-4">
        <Link href="#">
          <a className="transition-colors-200 hover:text-orange-primary">
            <h2 className="text-2xl">{name}</h2>
          </a>
        </Link>
        <p>{type}</p>
      </div>
      <div>
        <h3 className="text-gray-400">Dimensión</h3>
        <p>{dimension}</p>
      </div>
    </Card>
  </li>
);

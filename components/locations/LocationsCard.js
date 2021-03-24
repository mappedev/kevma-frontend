export const LocationsCard = ({ name, type, dimension }) => (
  <li className="card">
    <div className="mb-4">
      <h2 className="text-2xl">{name}</h2>
      <p>{type}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-gray-400">Dimensión</h3>
      <p>{dimension}</p>
    </div>
  </li>
);

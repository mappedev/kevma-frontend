export const EpisodesCard = ({ name, airDate, episode }) => (
  <li className="card">
    <div className="mb-4">
      <h2 className="text-2xl">{name}</h2>
      <p>{airDate}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-gray-400">Temporada y capítulo</h3>
      <p>{episode}</p>
    </div>
  </li>
);

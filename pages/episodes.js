import { Main } from "layouts/Main";
import { EpisodesCard } from "components/episodes/EpisodesCard";

export default function Episodes() {
  return (
    <ul className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 xl:grid-cols-4">
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
      <EpisodesCard name="Episodio 1" airDate="Julio 2 2012" episode="S01E01" />
    </ul>
  );
}

Episodes.getLayout = (page) => <Main>{page}</Main>;

import Head from "next/head";

import { Main } from "layouts/Main";
import { EpisodesCard } from "components/episodes/EpisodesCard";

export default function Episodes() {
  return (
    <>
      <Head>
        <title>KevMa - Episodes</title>
      </Head>
      <ul className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 xl:grid-cols-4">
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
        <EpisodesCard
          name="Episodio 1"
          airDate="Julio 2 2012"
          episode="S01E01"
        />
      </ul>
    </>
  );
}

Episodes.getLayout = (page) => <Main>{page}</Main>;

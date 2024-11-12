import { ComponentNotFound, DownloadBtn, Sidebar } from '@components';
import { defaultImageCast } from '@constants';
import { IMovieDetail, ISeasonEpisode, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import {
  fetcher,
  generateEpisodesByNumber,
  HOST_PATH,
  light,
  TELEGRAM_LINK
} from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
interface IRes {
  data: IMovieDetail;
}
const TVShowDetail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();
  const [seasons, setSeasons] = useState<ISeasonEpisode[]>([]);
  const { data, error } = useSWR<IRes, Error>(`/api/movie/${id || 0}`, fetcher);

  if (error) {
    return <ComponentNotFound />;
  }

  const metaData: ISeoInfo = {
    title: `${data?.data?.name} films - watch ${data?.data?.name}  on soulkingdom `,
    description: `${data?.data?.overview} complete cast of ${data?.data?.name} `
  };

  return (
    <MainContent>
      {data?.data === undefined ? (
        <FlexCenter>
          <BeatLoader color={light.primary_500} />
        </FlexCenter>
      ) : (
        <DetailStyles>
          <MetaTags metaData={metaData} />
          <section className="listing-layout">
            <section className="content-body">
              <div className="detail">
                <div className="image">
                  <Image
                    src={data?.data?.cover_path ?? ''}
                    alt={data?.data?.name}
                    width={160}
                    height={237}
                    loading={'lazy'}
                  />
                </div>
                <div className="info">
                  <SeactionHeading>{`${data?.data?.name} ( ${data?.data?.mm_name} )`}</SeactionHeading>
                  <p className="small">{data?.data?.released_date}</p>
                  {/* <div className="type">
                    {data?.data?.genres.map((item, index) => (
                      <span key={index}>{item.name}</span>
                    ))}
                  </div> */}
                  <p className="small">{`IMDB - ${data?.data?.rating}`}</p>
                </div>
              </div>
              <div className="description">
                <SeactionHeading>Complete Cast</SeactionHeading>
                <p>{data?.data?.overview}</p>
                <Image
                  src={data?.data?.backdrop_path || defaultImageCast}
                  alt={data?.data?.name}
                  width={500}
                  height={288}
                  loading={'lazy'}
                />
              </div>
              <div className="download">
                <header>
                  <h4>Download Links</h4>
                </header>
                {seasons.length > 0 &&
                  seasons.map((season, index) => (
                    <section className="wrap-season" key={index}>
                      <h4>{`Season - ${index + 1}`}</h4>
                      <article className="download-grid">
                        {season.episodes.map((episode, index) => (
                          <DownloadBtn
                            alt="download button"
                            id={season.id}
                            episode={episode}
                            key={index}
                          >
                            <p>{`Episode ${episode}`}</p>
                          </DownloadBtn>
                        ))}
                      </article>
                    </section>
                  ))}
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/tv_show/${id}` || '/'}
                  telLink={TELEGRAM_LINK || '/'}
                />
              </div>
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export default TVShowDetail;

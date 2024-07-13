import { ComponentAds, ComponentRandom, Listing } from '@components';
import { ads_url } from '@constants';
import { IAds, IMovies, ISeoInfo } from '@interface';
import { FlexCenter } from '@styles';
import { fetcher } from '@utils';
import Footer from 'components/Footer';
import MetaTags from 'components/MetaTags';
import { enumAds } from 'interface/enum';
import type { NextPage } from 'next';
import { useQuery, gql } from '@apollo/client';

interface IProps {
  movies: IMovies;
  error?: string;
  ads?: IAds[];
}
const GET_ANIME_QUERY = gql`
  query GetAnime {
    anime {
      name
      mm_name
      rating
      released_date
      show_type
      cover_path
      backdrop_path
    }
  }
`;
const GET_SHOWS_QUERY = gql`
  query GetTvShows {
    tv_shows {
      name
      mm_name
      rating
      released_date
      show_type
      cover_path
      backdrop_path
    }
  }
`;
const GET_LATEST_QUERY = gql`
  query GetLatest {
    latest {
      name
      mm_name
      rating
      released_date
      show_type
      cover_path
      backdrop_path
    }
  }
`;
const GET_MOVIES_QUERY = gql`
  query GetMovies {
    movies {
      name
      mm_name
      rating
      released_date
      show_type
      cover_path
      backdrop_path
    }
  }
`;
const GET_CAROUSEL_QUERY = gql`
  query GetCarouselMovies {
    carousel {
      name
      mm_name
      rating
      released_date
      show_type
      cover_path
      backdrop_path
    }
  }
`;
const GET_ADS_QUERY = gql`
  query GetAds {
    ads {
      name
      image
      link
    }
  }
`;

const Home: NextPage<IProps> = () => {
  const { data: adsData } = useQuery(GET_ADS_QUERY);
  const { data: moviesData } = useQuery(GET_MOVIES_QUERY);
  const { data: showData } = useQuery(GET_SHOWS_QUERY);
  const { data: animeData } = useQuery(GET_ANIME_QUERY);
  const { data: latestData } = useQuery(GET_LATEST_QUERY);
  const { data: carouselData } = useQuery(GET_CAROUSEL_QUERY);

  const metaData: ISeoInfo = {
    title: `Soulkingdom`,
    description: `Soulkingdom`
  };

  // if (error) {
  //   return (
  //     <FlexCenter>
  //       <p>{error}</p>
  //     </FlexCenter>
  //   );
  // }
  const firstAds = adsData?.ads[3];
  const secondAds = adsData?.ads[1];

  return (
    <>
      <MetaTags metaData={metaData} />
      <div style={{ height: '10px' }} />
      <div style={{ height: '10px' }} />
      <ComponentAds
        img_url={secondAds?.image || '/1000-120.gif'}
        url={ads_url}
      />
      <div style={{ height: '10px' }} />
      <ComponentRandom carousels={carouselData?.carousel} />
      <Listing
        animes={animeData?.anime}
        latest={latestData?.latest}
        tv_shows={showData?.tv_shows}
        movies={moviesData?.movies}
        data={moviesData?.movies}
        ads={adsData?.ads}
      />
      <Footer />
    </>
  );
};

export default Home;

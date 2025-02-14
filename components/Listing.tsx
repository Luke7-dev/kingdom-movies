import { ads_url, keywords, PATH_GENRES } from '@constants';
import {
  ArticleRow,
  ContentLayout,
  SeactionHeading,
  SectionLayout,
  SectionTitle,
  StyledHeading
} from '@styles';
import { DEFAULT_PAGE } from '@utils';
import { enumAds } from 'interface/enum';
import Link from 'next/link';

import { IAds, IMovie, IMovies } from '../interface';
import { ComponentCard } from './common';
import { ComponentAds } from './GoogleAds';
// import { ComponentGoogleAds } from './GoogleAds';
import { Sidebar } from './Sidebar';
import { ComponentPlaceholder } from './Skeleton';
interface IProps {
  animes: IMovie[] | undefined;
  latest: IMovie[] | undefined;
  tv_shows: IMovie[] | undefined;
  movies: IMovie[] | undefined;
  data: IMovies;
  ads?: IAds[];
}
export function Listing(props: IProps) {
  const { animes, latest, tv_shows, movies, ads } = props;
  const third = ads?.find(ads => ads.name === enumAds.WEB_HOME_THIRD_BANNER);
  const forth = ads?.find(ads => ads.name === enumAds.WEB_HOME_FORTH_BANNER);
  const fifth = ads?.find(ads => ads.name === enumAds.WEB_HOME_FIFTH_BANNER);
  const sixth = ads?.find(ads => ads.name === enumAds.WEB_HOME_SIXTH_BANNER);
  const side = ads?.find(ads => ads.name === enumAds.WEB_HOME_SIDE_BANNER);

  return (
    <ContentLayout>
      <StyledHeading>Content Recently Added</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.LATEST}/${DEFAULT_PAGE}`}>
                <SeactionHeading>Latest</SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.LATEST}/${DEFAULT_PAGE}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {latest ? (
                latest.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          <ComponentAds img_url={forth?.image} url={ads_url} />
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.ANIME}/${DEFAULT_PAGE}`}>
                <SeactionHeading>Animes </SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.ANIME}/${DEFAULT_PAGE}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {animes ? (
                animes.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          <ComponentAds img_url={fifth?.image} url={ads_url} />
          <SectionLayout>
            {tv_shows && tv_shows?.length > 0 && (
              <SectionTitle>
                <Link
                  href={`${PATH_GENRES}${keywords.TV_SHOWS}/${DEFAULT_PAGE}`}
                >
                  <SeactionHeading>TV Shows </SeactionHeading>
                </Link>
                <Link
                  href={`${PATH_GENRES}${keywords.TV_SHOWS}/${DEFAULT_PAGE}`}
                >{`See More >>`}</Link>
              </SectionTitle>
            )}
            <ArticleRow>
              {tv_shows ? (
                tv_shows.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          <ComponentAds img_url={sixth?.image} url={ads_url} />
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.MOVIES}/${DEFAULT_PAGE}`}>
                <SeactionHeading>Movies</SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.MOVIES}/${DEFAULT_PAGE}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {movies ? (
                movies.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
        </section>
        <Sidebar adsUrl={side?.image} />
      </section>
    </ContentLayout>
  );
}

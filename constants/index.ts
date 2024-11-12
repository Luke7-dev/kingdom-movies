import { IGenres } from '@interface';

export const DARK = 'dark';
export const LIGHT = 'light';
export const initPage = 0;
export const keywords = {
  LATEST: 'latest',
  POPULAR: 'popular',
  MOVIES: 'movies',
  TV_SHOWS: 'tv_shows',
  ANIME: 'anime'
};
export const PATH_SEARCH = '/search/';
export const PATH_GENRES = '/genres/';
export const PATH_MOVIE = '/movie/';
export const PATH_TVSHOWS = '/tv_shows/';
export const HOW_TO_DOWNLOAD = '/how_to_download';
export const DMCA_POLICY = '/dmca_policy';
export const ABOUT = '/about';

export const defaultImage = '/soul-kingdom-placeholder-1.png';
export const defaultImageSmall = '/soul-kingdom-placeholder-2.png';
export const defaultImageCast = '/soul-kingdom-placeholder-cast.png';
export const genres: IGenres[] = [
  {
    title: 'Action',
    count: 1014
  },
  {
    title: 'Adventure',
    count: 59
  },
  {
    title: 'Animation',
    count: 88
  },
  {
    title: 'Comedy',
    count: 23
  },
  {
    title: 'Crime',
    count: 123
  },
  {
    title: 'Documentary',
    count: 45
  },
  {
    title: 'Drama',
    count: 894
  },
  {
    title: 'Family',
    count: 94
  },
  {
    title: 'History',
    count: 64
  },
  {
    title: 'Horror',
    count: 12
  },
  {
    title: 'Music',
    count: 0
  },
  {
    title: 'Science Fiction',
    count: 1223
  },
  {
    title: 'Thriller',
    count: 84
  },
  {
    title: 'TV Movie',
    count: 894
  },
  {
    title: 'Uncategorized',
    count: 123
  },
  {
    title: 'War',
    count: 373
  }
];
export const years = [
  '2022',
  '2021',
  '2000',
  '1999',
  '2022',
  '2021',
  '2000',
  '1999',
  '2022',
  '2021',
  '2000',
  '1999',
  '2022',
  '2021',
  '2000',
  '1999'
];

export const enumShowType = {
  TV_SHOW: 'tv_show',
  MOVIE: 'movie'
} as const;

import { API_URL, TOKEN } from './config';

export const clientFetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: TOKEN || '' }
  });
  if (!res) {
    throw new Error(`An error occurred while fetching the data.`);
  }
  return res.json();
};

export const fetcher = async (path: string) => {
  const url = API_URL ? `${API_URL}${path}` : path;
  const res = await fetch(url, {
    headers: {
      Authorization: TOKEN || '',
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*'
    }
  });

  if (res.status !== 200) {
    throw new Error(`An error occurred while fetching the data.`);
  }

  return res.json();
};

export const generateEpisodesByNumber = (episode: number) => {
  const episodes = Array.from(Array(episode), (_, i) => i + 1);
  return Promise.resolve(episodes);
};

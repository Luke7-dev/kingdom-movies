import { PATH_GENRES } from '@constants';
import { IGenres } from '@interface';
import { setLoading } from '@store';
import { FlexCenter, StyledGenres } from '@styles';
import { fetcher } from '@utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

export const Genre = () => {
  const {
    query: { search }
  } = useRouter();

  const [genre, setGenre] = useState<IGenres[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchGenre();
  }, ['fetchGenre']);

  const fetchGenre = async () => {
    try {
      setLoading(true);
      const res = await fetcher(`/api/counts`);
      setGenre(res.data);
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <FlexCenter>
        <BeatLoader color={'#D12729'} />
      </FlexCenter>
    );
  }

  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {genre.length > 0 &&
          genre.map((item, index) => (
            <Link href={`${PATH_GENRES}${item.title}`} key={index}>
              <a>
                <div
                  className={
                    Object.keys(item)[0] === search
                      ? 'genre-item active'
                      : 'genre-item'
                  }
                >
                  <p>{item.title}</p>
                  <p>{item.count}</p>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </StyledGenres>
  );
};

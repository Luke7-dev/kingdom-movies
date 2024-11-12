import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongoose';
import MovieV1 from '../../models/movie_v1';
import { IGenres, IMovie } from '@interface';
import { genres } from '@constants';

type Data = {
  message: string;
  data: IGenres[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      res
        .status(200)
        .json({ message: 'Movies fetched successfully', data: genres });
      break;
    case 'POST':
      res.status(201);
      // .json({ message: 'Movie created successfully', movies: [newMovie] });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

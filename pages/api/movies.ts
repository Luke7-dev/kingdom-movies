import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongoose';
import MovieV1 from '../../models/movie_v1';
import { IMovie } from '@interface';

type Data = {
  message: string;
  data: IMovie[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET': {
      const movies = await MovieV1.find({});
      res
        .status(200)
        .json({ message: 'Movies fetched successfully', data: movies });
      break;
    }
    case 'POST': {
      // Handle POST request
      const newMovie = new MovieV1(req.body);
      await newMovie.save();
      res.status(201);
      // .json({ message: 'Movie created successfully', movies: [newMovie] });
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

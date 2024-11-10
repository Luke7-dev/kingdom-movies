import mongoose, { Schema, Document } from 'mongoose';

interface IMovie {
  name: string;
  mm_name: string;
  rating: string;
  released_date: Date;
  show_type: string;
  cover_path: string;
  backdrop_path: string;
}

interface IMovieV1 extends Document {
  anime: IMovie[];
  bl: IMovie[];
  latest: IMovie[];
  tv_shows: IMovie[];
  movies: IMovie[];
  carousels: IMovie[];
  upcomings: IMovie[];
  mini: IMovie[];
}

// Define the schema for the IMovie interface
const MovieSchema: Schema = new Schema({
  name: { type: String, required: true },
  mm_name: { type: String, required: true },
  rating: { type: String, required: true },
  released_date: { type: Date, required: true },
  show_type: { type: String, required: true },
  cover_path: { type: String, required: true },
  backdrop_path: { type: String, required: true }
});

// Define the schema for the movie_v1 collection
const MovieV1Schema: Schema = new Schema(
  {
    anime: { type: [MovieSchema], required: true },
    bl: { type: [MovieSchema], required: true },
    latest: { type: [MovieSchema], required: true },
    tv_shows: { type: [MovieSchema], required: true },
    movies: { type: [MovieSchema], required: true },
    carousels: { type: [MovieSchema], required: true },
    upcomings: { type: [MovieSchema], required: true },
    mini: { type: [MovieSchema], required: true }
  },
  {
    collection: 'movie_v1' // Specify the collection name here
  }
);

export default mongoose.models.MovieV1 ||
  mongoose.model<IMovieV1>('MovieV1', MovieV1Schema);

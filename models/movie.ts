import mongoose, { Schema, Document } from 'mongoose';

interface IMovie extends Document {
  name: string;
  mm_name: string;
  rating: string;
  released_date: Date;
  show_type: string;
  cover_path: string;
  backdrop_path: string;
}

const MovieSchema: Schema = new Schema({
  name: { type: String, required: true },
  mm_name: { type: String, required: true },
  rating: { type: String, required: true },
  released_date: { type: Date, required: true },
  show_type: { type: String, required: true },
  cover_path: { type: String, required: true },
  backdrop_path: { type: String, required: true }
});

export default mongoose.models.Movie ||
  mongoose.model<IMovie>('Movie', MovieSchema);

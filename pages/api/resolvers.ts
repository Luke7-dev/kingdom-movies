// resolvers.ts
import mongoose from 'mongoose';

// Assuming the models are defined in the same file or imported here
const MovieModel = mongoose.model(
  'Movies',
  new mongoose.Schema({
    name: String,
    mm_name: String,
    rating: Number,
    released_date: String,
    show_type: String,
    cover_path: String,
    backdrop_path: String
  })
);
const AdsModel = mongoose.model(
  'Ads',
  new mongoose.Schema({
    name: String,
    image: String,
    link: String
  })
);

const homepageLimit = 10;

const resolvers = {
  Query: {
    latest: async () =>
      await MovieModel.find({})
        .sort({ released_date: -1 })
        .limit(homepageLimit),
    anime: async () => await MovieModel.find({}).limit(homepageLimit),
    tv_shows: async () =>
      await MovieModel.find({ show_type: 'tv_show' }).limit(homepageLimit),
    movies: async () => await MovieModel.find({}).limit(homepageLimit),
    ads: async () => await AdsModel.find({}).sort({ createdAt: 1 }),
    carousel: async () => await MovieModel.find({}).limit(homepageLimit)
  }
};

export { resolvers };

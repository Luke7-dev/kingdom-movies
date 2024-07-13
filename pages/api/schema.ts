// schema.ts
const typeDefs = `#graphql
  type Movie {
    name: String
    mm_name: String
    rating: Float
    released_date: String
    show_type: String
    cover_path: String
    backdrop_path: String
  }
  type Ads {
    id: ID
    name: String
    image: String
    link: String
  }
  type Query {
    latest: [Movie]
    anime: [Movie]
    tv_shows: [Movie]
    movies: [Movie]
    ads: [Ads]
    carousel: [Movie]
  }
`;

export { typeDefs };

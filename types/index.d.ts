export {};

declare global {
  interface Window {
    adsbygoogle: any;
  }
  interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  }

  var mongoose: MongooseCache;
}

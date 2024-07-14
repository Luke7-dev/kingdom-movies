// dbConnect.ts
import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Extend the NodeJS.Global interface to include the mongoose property
declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

// Initialize the global.mongoose property if it doesn't exist
if (!(global as any).mongoose) {
  (global as any).mongoose = { conn: null, promise: null };
}

// Type assertion to make TypeScript happy
let cached = (global as any).mongoose as {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

import mongoose from 'mongoose';

const username = process.env.NEXT_PUBLIC_MONGO_USERNAME;
const password = process.env.NEXT_PUBLIC_MONGO_PASSWORD;
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.i2hab2t.mongodb.net/contact_us?retryWrites=true&w=majority`;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in your .env file'
  );
}
console.log("MONGODB_URI", MONGODB_URI);
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// @ts-expect-error: global.mongoose might not be defined initially
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!cached) {
    // @ts-expect-error: global.mongoose might not be defined initially
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

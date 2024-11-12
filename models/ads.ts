import mongoose, { Schema, Document } from 'mongoose';

interface IAd extends Document {
  // Define the fields for the ads collection
}

const AdSchema: Schema = new Schema(
  {
    // Define the schema for the ads collection
  },
  {
    collection: 'ads' // Specify the collection name here
  }
);

export default mongoose.models.Ad || mongoose.model<IAd>('Ad', AdSchema);

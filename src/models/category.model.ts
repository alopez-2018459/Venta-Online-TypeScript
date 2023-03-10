import mongoose, { Document, Schema } from "mongoose";

export interface ICategory {
  name: string;
  description: string;
  products: string;
}

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
    },
    description: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ICategoryModel>("Category", CategorySchema);

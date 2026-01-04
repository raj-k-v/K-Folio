import { Schema, model, Types } from "mongoose";

interface Media {
  url: string;
  type: "image" | "video";
}

export interface PostDocument {
  userId: Types.ObjectId;
  title: string;
  description?: string;
  tags: string[];
  media: Media[];
}

const mediaSchema = new Schema<Media>(
  {
    url: { type: String, required: true },
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
  },
  { _id: false }
);

const postSchema = new Schema<PostDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    tags: {
      type: [String],
      default: [],
    },

    media: {
      type: [mediaSchema],
      default: [],
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export const Post = model<PostDocument>("Post", postSchema);

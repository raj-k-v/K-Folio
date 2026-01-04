import { Request, Response } from "express";
import { Post } from "../models/post";

export const createPost = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // from auth middleware

    const { title, description, tags, media } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const post = await Post.create({
      userId,
      title,
      description,
      tags,
      media,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

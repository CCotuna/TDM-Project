import { createPost } from "../services/post.service.js";
export async function addPost(req, res) {
  const { title, subtitle, description, text, userId } = req.body;
  if (!title) {
    throw new Error("Title is required");
  }
  const postId = await createPost(title, subtitle, description, text, userId);

  res.send(JSON.stringify({ id: postId }));
}

import { getAllPosts } from "../services/post.service.js";
export async function getPosts(req, res) {
  const posts = await getAllPosts();

  res.send(JSON.stringify(posts));
}

import { deleteOnePost } from "../services/post.service.js";
export async function deletePost(req, res) {
  const { postId } = req.body;
  if (!postId) {
    throw new Error("Post ID is required");
  }

  await deleteOnePost(postId);
  res.send("Post deleted");
}

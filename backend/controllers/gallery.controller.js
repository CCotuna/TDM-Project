import { createPhoto } from "../services/gallery.service.js";
export async function addPhoto(req, res) {
  const { title, description, url } = req.body;
  if (!title) {
    throw new Error("Title is required");
  }
  const photoId = await createPhoto(title, description, url);

  res.send(JSON.stringify({ id: photoId }));
}

import { getAllPhotos } from "../services/gallery.service.js";
export async function getPhotos(req, res) {
  const photos = await getAllPhotos();

  res.send(JSON.stringify(photos));
}

import { deleteOnePhoto } from "../services/gallery.service.js";
export async function deletePhoto(req, res) {
  const { photoId } = req.body;
  if (!photoId) {
    throw new Error("Photo ID is required");
  }

  await deleteOnePhoto(photoId);
  res.send("Photo deleted");
}

import { updatePhoto } from "../services/gallery.service.js";
export async function editPhoto(req, res) {
  const { photoId, title, description, url } = req.body;
  if (!photoId) {
    throw new Error("Photo ID is required");
  }

  await updatePhoto(photoId, title, description, url);
  res.send("Photo updated");
}

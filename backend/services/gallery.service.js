import { sequelize } from "../db.js";

import { Gallery } from "../models/gallery.model.js";

export async function getAllPhotos() {
  return await Gallery.findAll();
}

export async function createPhoto(title, description, url) {
  const transaction = await sequelize.transaction();
  try {
    const photoRec = await Gallery.create(
      {
        title,
        description,
        url,
      },
      { transaction }
    );

    await transaction.commit();

    return photoRec.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOnePhoto(photoId) {
  const transaction = await sequelize.transaction();
  try {
    await Gallery.destroy({ where: { id: photoId } }, { transaction });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}

export async function updatePhoto(photoId, title, description, url) {
  const transaction = await sequelize.transaction();
  try {
    await Gallery.update(
      { title, description, url },
      { where: { id: photoId } }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}

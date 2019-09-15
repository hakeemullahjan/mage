export const selectImage = imageId => {
  return {
    type: 'SELECT_IMAGE',
    payload: imageId,
  };
};

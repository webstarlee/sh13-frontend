import types from './resourceTypes';

export const imageFetch = () => ({
  type: types.IMAGE_FETCH
});

export const imageUpload = (data) => ({
  type: types.IMAGE_UPLOAD,
  payload: data,
});

export const imageDelete = (data) => ({
  type: types.IMAGE_DELETE,
  payload: data
});
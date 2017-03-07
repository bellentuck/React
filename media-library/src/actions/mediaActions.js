import * as types from '../constants/actionTypes';

// Returns an action of type SELECTED_IMAGE plus the image selected.
export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

// Returns an action of type SELECTED_VIDEO plus the image selected.
export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

// Returns an action of type SEARCH_MEDIA_REQUEST plus the search criteria.
export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});

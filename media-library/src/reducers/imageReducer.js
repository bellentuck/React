import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image-related actions
// [The idea is to return an updated copy of the state depending on the action type.]
export default function(state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}

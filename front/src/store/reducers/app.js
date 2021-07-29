import {
  GET_WORDS_SUCCESS,
  GET_WORDS_FETCH,
  GET_WORDS_ERROR,
} from "../../constants/actionTypes";

export const appInitialState = {
  words: [],
  isFetching: false,
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case GET_WORDS_FETCH: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case GET_WORDS_SUCCESS: {
      return {
        ...state,
        words: payload,
        isFetching: false,
      };
    }
    case GET_WORDS_ERROR: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

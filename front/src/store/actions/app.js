import {
  GET_WORDS_SUCCESS,
  GET_WORDS_FETCH,
  GET_WORDS_ERROR
} from "../../constants/actionTypes";

export const getWords = async (dispatch, props) => {
  dispatch({ type: GET_WORDS_FETCH });
  try {
    const response = await fetch(`http://localhost:3001/phonewords?digits=${props}`);
    const words = await response.json()
    dispatch({ type: GET_WORDS_SUCCESS, payload: words });
  } catch(e) {
    dispatch({ type: GET_WORDS_ERROR });
  }
};

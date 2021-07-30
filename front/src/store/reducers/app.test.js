import {reducer, appInitialState} from "./app";
import {
  GET_WORDS_FETCH,
  GET_WORDS_ERROR,
  GET_WORDS_SUCCESS,
} from "../../constants/actionTypes";

describe("App reducer tests", () => {
  test("should show spinner", () => {
    const expectedState = {
      ...appInitialState,
      isFetching: true,
    };
    expect(reducer(appInitialState, {type: GET_WORDS_FETCH})).toEqual(expectedState);
  });

  test("should hide spinner", () => {
    const expectedState = {
      ...appInitialState,
      isFetching: false,
    };
    expect(reducer(appInitialState, {type: GET_WORDS_ERROR})).toEqual(expectedState);
  });

  test("should add words", () => {
    const expectedState = {
      ...appInitialState,
      words: ["example"],
    };
    expect(
      reducer(appInitialState, {type: GET_WORDS_SUCCESS, payload: ["example"]})
    ).toEqual(expectedState);
  });
});

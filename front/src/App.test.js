import React from "react";
import App from "./App";
import {renderAll} from "./util/test-utils";
import * as store from "./store";
import {fireEvent} from "@testing-library/react";

const buildComponent = (props) => renderAll(<App {...props} />);

describe("<App />", () => {
  test("renders app title", () => {
    const component = buildComponent();
    const title = component.getByText("Phone Words predication");
    expect(title).toBeInTheDocument();
  });

  test("should show LinearProgress", () => {
    store.useStore = jest.fn(() => ({
      app: {
        isFetching: true,
        words: [],
      },
    }));
    const {getByTestId} = buildComponent();
    const progress = getByTestId("progress");
    expect(progress).toBeInTheDocument();
  });

  test("should add digits after clicking on numbers", () => {
    store.useStore = jest.fn(() => ({
      app: {
        isFetching: true,
        words: [],
      },
    }));
    const {getByTestId} = buildComponent();
    getByTestId("number-2").click();
    expect(getByTestId("digit-2")).toBeInTheDocument();
  });

  test("should delete digits after clicking on delete icon", () => {
    store.useStore = jest.fn(() => ({
      app: {
        isFetching: true,
        words: [],
      },
    }));
    const {getByTestId, container} = buildComponent();
    getByTestId("number-2").click();
    const digit = getByTestId("digit-2");

    expect(digit).toBeInTheDocument();
    const icon = container.getElementsByClassName("MuiChip-deleteIcon")[0];
    fireEvent.click(icon);

    expect(digit).not.toBeInTheDocument();
  });
});

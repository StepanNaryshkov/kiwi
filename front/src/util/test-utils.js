import React from "react";
import {render, act} from "@testing-library/react";
import {StoreProvider} from "../store";

const AllProviders = ({children}) => <StoreProvider>{children}</StoreProvider>;

const renderAll = (ui, options) => ({
  ...render(ui, {wrapper: AllProviders, ...options}),
});

const asyncRenderAll = async (ui, options) => {
  let utils;
  await act(async () => {
    utils = {
      ...render(ui, {wrapper: AllProviders, ...options}),
    };
  });
  return utils;
};

// re-export everything
export * from "@testing-library/react";
export {renderAll, asyncRenderAll};

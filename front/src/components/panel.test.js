import {Panel} from "./panel";
import {renderAll} from "../util/test-utils";
import {fireEvent} from "@testing-library/react";

const buildComponent = (props) => renderAll(<Panel {...props} />);

describe("Panel component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders component", () => {
    const {getByTestId} = buildComponent({});
    expect(getByTestId("panel")).toBeInTheDocument();
  });

  test("should call setDigit", () => {
    const setDigitSpy = jest.fn();
    const {getByTestId} = buildComponent({
      setDigit: setDigitSpy,
    });
    fireEvent.click(getByTestId("number-2"));
    expect(setDigitSpy).toBeCalled();
  });

  test("should call handleSubmit", () => {
    const handleSubmitSpy = jest.fn();
    const {getByText} = buildComponent({
      handleSubmit: handleSubmitSpy,
    });
    fireEvent.click(getByText("Submit"));
    expect(handleSubmitSpy).toBeCalled();
  });
});

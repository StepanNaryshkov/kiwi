import React, {useEffect, useState} from "react";
import {Panel} from "./components/panel";
import {Chip, LinearProgress, Typography} from "@material-ui/core";
import {useDispatch, useStore} from "./store";
import {getWords} from "./store/actions/app";
import {debounce} from "./helpers/debounce";

export const App = () => {
  const [digits, setDigit] = useState([]);
  const {app} = useStore();
  const dispatch = useDispatch();
  const handleSubmit = debounce(() => {
    getWords(
      dispatch,
      digits.reduce((accumulator, currentValue) => accumulator + currentValue, "")
    );
    setDigit([]);
  }, 500);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.keyCode >= 50 && event.keyCode < 58) {
        setDigit((digits) => {
          return [...digits, event.key];
        });
      }
    });
  }, []);
  return (
    <div className="wrap">
      {app.isFetching && <LinearProgress />}
      <div className="digits">
        {digits.map((digit, index) => (
          <Chip
            key={index}
            label={digit}
            onDelete={() => setDigit(digits.filter((_, ind) => index !== ind))}
          />
        ))}
      </div>
      <Panel
        setDigit={setDigit}
        handleSubmit={handleSubmit}
        isFetching={app.isFetching}
      />
      <Typography component="h1">
        The count of real words is {app.words.length}
      </Typography>
      {app.words.map((word) => (
        <Chip key={word} label={word} />
      ))}
    </div>
  );
};

export default App;

import {Button} from "@material-ui/core";
import React from "react";
import "./_.css";

const validDigits = [{
  key: 2,
  values: 'abc'
}, {
  key: 3,
  values: 'def'
}, {
  key: 4,
  values: 'ghi'
}, {
  key: 5,
  values: 'jkl'
}, {
  key: 6,
  values: 'mno'
}, {
  key: 7,
  values: 'pqrs'
}, {
  key: 8,
  values: 'tuv'
}, {
  key: 9,
  values: 'wxyz'
}]
export const Panel = ({
  setDigit,
                        handleSubmit,
                        isFetching
                      }) => {
  return <div className='panel'>
    {validDigits.map(obj => {
      return <Button key={obj.key} variant="contained" color="secondary" onClick={() =>     setDigit(digits => {
        return [...digits, obj.key];
      })}>
        <strong>{obj.key}</strong><span className='panel__values'>&#32;&#32;{obj.values}</span>
      </Button>
    })}
    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isFetching}>
      Submit
    </Button>
  </div>
}

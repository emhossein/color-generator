import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = props => {
  const [alert, setAlert] = useState(false);
  const bcg = props.rgb.join(',');
  // const hex = rgbToHex(...props.rgb);
  const hexValue = `#${props.hexColor}`;

  const copyHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${props.index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyHandler}
    >
      <p className="percent-value">{props.weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

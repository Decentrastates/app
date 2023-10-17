import React from 'react';
import {type IconType} from '../../icons';

export const Explore: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 160 160"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 40.8002C58.3504 40.8002 40.8 58.3506 40.8 80.0002C40.8 101.65 58.3504 119.2 80 119.2C101.65 119.2 119.2 101.65 119.2 80.0002C119.2 58.3506 101.65 40.8002 80 40.8002ZM39.2 80.0002C39.2 57.467 57.4667 39.2002 80 39.2002C102.533 39.2002 120.8 57.467 120.8 80.0002C120.8 102.533 102.533 120.8 80 120.8C57.4667 120.8 39.2 102.533 39.2 80.0002Z"
        fill="#001F5C"
      />
      <path
        d="M93.466 61.3072L74.6157 69.7064C72.8207 70.5259 71.3243 72.062 70.5263 73.906L62.3475 93.2643C61.649 94.8003 62.0483 96.5422 63.1454 97.7711C63.9434 98.5906 64.9404 99 65.9381 99C66.4369 99 67.0352 98.8978 67.534 98.6928L86.3843 90.2936C88.1793 89.4741 89.6757 87.938 90.4737 86.094L98.6525 66.7357C99.351 65.1997 98.9517 63.4578 97.8546 62.2289C96.6572 61 94.9618 60.6928 93.4659 61.3072H93.466ZM85.3874 83.4309L77.2086 75.0318L91.6703 68.5788L85.3874 83.4309Z"
        fill="#3164FA"
      />
    </svg>
  );
};
import React from 'react';

export type RotateWrapperProps = {
  duration?:
    | 100
    | 500
    | 1000
    | 1500
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000;
  clockwiseDirection?: boolean;
  children: React.ReactNode;
};

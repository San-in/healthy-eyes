import {JSX} from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'link';
  size?: 'M' | 'L';
  beforeIcon?: JSX.Element;
  afterIcon?: JSX.Element;
};

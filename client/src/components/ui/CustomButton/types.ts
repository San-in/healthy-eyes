import {JSX} from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'link';
  size?: 'M' | 'L';
  disabled?: boolean;
  beforeIcon?: JSX.Element;
  afterIcon?: JSX.Element;
};

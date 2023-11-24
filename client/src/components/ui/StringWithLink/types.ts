export type StringWithLinkProps = {
  text: string;
  link: string;
  align?: 'center' | 'flex-start' | 'flex-end';
  textSize?: 'small' | 'normal' | 'large';
  onHandler: () => void;
};

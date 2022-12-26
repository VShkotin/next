import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}

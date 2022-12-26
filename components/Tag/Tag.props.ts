import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color: 'green' | 'primary' | 'ghost' | 'red' | 'grey';
  href?: string;
}

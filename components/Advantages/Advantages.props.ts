import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { HhData, TopPageAdvantage } from '../../interfaces/page.interface';

export interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: TopPageAdvantage[];
}

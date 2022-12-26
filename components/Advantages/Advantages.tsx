import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import Icon from './icon.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <Icon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </div>
  );
};

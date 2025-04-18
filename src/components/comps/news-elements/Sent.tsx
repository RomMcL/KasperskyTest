
import { FC } from 'react';

import { toUpperCase } from '../../../utils/auxiliary-functions';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    sent: string;
}


const Sent: FC<ComponentProps> = ({ sent }) => {

    const colorBackground = (sent: string) => {
        switch (sent) {
            case 'negative':
                return 'rgb(255,35,35)';
            case 'positive':
                return 'rgb(35,255,176)';
            default:
              return 'rgb(155,172,186)';
        }
    }

  return (
    <span 
        className={styles.header__sent}
        style={{backgroundColor: colorBackground(sent)}}
    >
        {toUpperCase(sent)}
    </span>
  )
}

export default Sent;

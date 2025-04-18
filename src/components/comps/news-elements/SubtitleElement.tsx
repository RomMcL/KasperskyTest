import { FC, ReactNode } from 'react';

import { iconSelection } from '../../../utils/auxiliary-functions';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    children: ReactNode;
    icon: string;
}


const SubtitleElement: FC<ComponentProps> = ({ children, icon }) => {

    const iconName = iconSelection(icon);

  return (
    <p className={styles.subtitle__element}>
        <span role='img' aria-hidden='true' 
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/icon/${iconName})` }}
        />            
        {children}
    </p>
  )
}

export default SubtitleElement;

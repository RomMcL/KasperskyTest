import { FC, ReactNode } from 'react';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    children?: ReactNode;
}


const ObscureSquare: FC<ComponentProps> = ({children}) => {

  return (
    <div className={styles.header__obsure_square}>
        {children}
    </div>
  )
}

export default ObscureSquare;

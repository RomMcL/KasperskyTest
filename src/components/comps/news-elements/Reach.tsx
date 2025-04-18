import { FC, ReactNode } from 'react';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    children: ReactNode;
    reach: number;
    duplicate: boolean;
}


const Reach: FC<ComponentProps> = ({ children, reach, duplicate}) => {

    const reachRounded = (reach: number) => { 
        const newReach = Number((reach/1000));
        const decimals = newReach >= 100 ? 0 : 1        
        return newReach.toFixed(decimals) + 'K';        
    }

    return (    
        <p className={styles.info__reach}>
            {reachRounded(reach)}
            <span className={!duplicate ? styles.date__accent_reach : ''}>
                {children}
            </span>
        </p>                
  )
}

export default Reach;

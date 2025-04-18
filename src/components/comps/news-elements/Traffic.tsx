import { FC, ReactNode } from 'react';

import { IData_TrafficItem } from '../../../types/news';

import styles from '../../../styles/components/newsBlock.module.css';

interface ComponentProps {
    children: ReactNode;
    traffic: IData_TrafficItem[];
}

const Traffic: FC<ComponentProps> = ({ children, traffic }) => {

    const abbreviation = (country: string) => {
        switch (country) {
            case 'United States of America':
                return 'USA';
            default:
              return country;
        }
    }

    const topTraffic = (traffic: IData_TrafficItem[]) => {        
        return (
            <div className={styles.traffic__countries}>
                {traffic.map((country) => {
                    return (
                        <p key={country.value}>
                            {abbreviation(country.value)}
                            <span>{Math.round(country.count*100)}%</span>
                        </p>
                    )
                })}
            </div>
        )
    }

    return (    
        <div className={styles.info__traffic}>
            {children}
            {topTraffic(traffic)}
        </div>                
  )
}

export default Traffic;

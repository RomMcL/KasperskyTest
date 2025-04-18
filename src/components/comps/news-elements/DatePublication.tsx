import { FC } from 'react';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    date: string;
    duplicate: boolean;
}


const DatePublication: FC<ComponentProps> = ({ date, duplicate }) => {

    const dateTransform = (date: string) => {
        const transformDate = new Date(Date.parse(date)).toLocaleString(
            "en-US", 
            { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
        );

        const dateArr = transformDate.split(/[, ]+/);

        const day = dateArr[2];
        const month_year = `${dateArr[1]} ${dateArr[3]}`;

        return ({
            day: day,
            month_year: month_year
        })        
    }

    return (    
        <p className={styles.info__date}>
            <span className={!duplicate ? styles.date__accent_day : ''}>
                {dateTransform(date).day}
            </span>
            {dateTransform(date).month_year}
        </p>
  )
}

export default DatePublication;

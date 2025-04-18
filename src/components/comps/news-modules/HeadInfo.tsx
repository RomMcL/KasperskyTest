import { FC } from 'react';

import { IData_TrafficItem } from '../../../types/news';

import DatePublication from '../../comps/news-elements/DatePublication';
import Reach from '../../comps/news-elements/Reach';
import Traffic from '../../comps/news-elements/Traffic';
import Sent from '../news-elements/Sent';
import ObscureSquare from '../news-elements/ObscureSquare';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    date: string;
    reach: number;
    traffic: IData_TrafficItem[];
    sent: string;
    duplicate: boolean;
}

const HeadInfo: FC<ComponentProps> = (props) => {

    const { date, reach, traffic, sent, duplicate } = props;

    return (
        <div className={styles.news__header}>
            <div className={styles.header__left_block}>
                <DatePublication date={date} duplicate={duplicate} />
                <Reach reach={reach} duplicate={duplicate}>
                    {!duplicate ? 'Reach' : 'Top Reache'}
                </ Reach>
                {!duplicate && 
                    <Traffic traffic={traffic}>Top Traffic:</Traffic>
                }            
            </div>
            <div className={styles.header__right_block}>
                {!duplicate && 
                    <Sent sent={sent} />
                }           
                <ObscureSquare>i</ObscureSquare>
                <ObscureSquare/>
            </div>
        </div>
    )
}

export default HeadInfo;
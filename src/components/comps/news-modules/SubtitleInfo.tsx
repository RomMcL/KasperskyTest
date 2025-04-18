import { FC } from 'react';

import SubtitleElement from '../news-elements/SubtitleElement';

import { toUpperCase } from '../../../utils/auxiliary-functions';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    domen: string;
    country: string;
    cntr_code: string;
    lang: string;
    autor: string[];
    duplicate: boolean;
}

const SubtitleInfo: FC<ComponentProps> = (props) => {

    const {  domen, country, cntr_code, lang, autor, duplicate } = props;

    return (
        <div className={styles.news__subtitle}>
            <SubtitleElement icon={domen}>
                <a href={'https://' + domen} target='_blank' rel='noopener noreferrer'>
                    {domen}
                </a>
            </SubtitleElement>
            <SubtitleElement icon={cntr_code}>{country}</SubtitleElement>
            {!duplicate &&
                <SubtitleElement icon={'book'}>{toUpperCase(lang)}</SubtitleElement>
            }
            <SubtitleElement icon={'man'}>
                {autor.length > 0 ? autor.join(', ') : 'Authors are unknown'}
            </SubtitleElement>           
        </div>
    )
}

export default SubtitleInfo;
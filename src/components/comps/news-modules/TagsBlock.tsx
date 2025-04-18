import { FC } from 'react';

import { IData_TagItem } from '../../../types/news';
import { iconSelection } from '../../../utils/auxiliary-functions';

import styles from '../../../styles/components/newsBlock.module.css';


interface ComponentProps {
    tags: IData_TagItem[];
}

const TagsBlock: FC<ComponentProps> = (props) => {

    const { tags } = props;

    return (
        <div className={styles.news__tags}>
            {
                tags.map((tag, index) => {

                    const iconName = iconSelection(tag.value);

                    return (
                        <p key={index} className={styles.tags__tag}>
                            <span role='img' aria-hidden='true'
                                className={styles.tag__icon}
                                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/icon/${iconName})` }}
                            /> 
                            {tag.value}
                            <span className={styles.tag__count}>{tag.count}</span>
                        </p>
                    )
                })
            }           
        </div>
    )
}

export default TagsBlock;

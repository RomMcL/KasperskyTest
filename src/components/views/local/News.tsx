import { useState } from 'react';

import { Button } from 'antd';
import { DownOutlined, UpOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words'; // https://www.npmjs.com/package/react-highlight-words?activeTab=readme

import HeadInfo from '../../comps/news-modules/HeadInfo';
import SubtitleInfo from '../../comps/news-modules/SubtitleInfo';
import TagsBlock from '../../comps/news-modules/TagsBlock';

import { IData_SnippetNews } from '../../../types/news';
import styles from '../../../styles/components/newsBlock.module.css';


const News = (props: IData_SnippetNews) => {

    const { TI, AB, URL, DOM, DP, LANG, REACH, KW, AU, CNTR, CNTR_CODE, SENT, TRAFFIC, HIGHLIGHTS } = props;
    
    const [isShowMore, setIsShowMore] = useState(false);

    const showMoreText = () => {
        setIsShowMore(!isShowMore);
    }

    const [byRelevance, setByRelevance] = useState(false);
    const [viewDuplicates, setViewDuplicates] = useState(false);
    const testForDuplicatesRelevance = () => {
        setByRelevance(!byRelevance);
    }
    const testForDuplicatesView = () => {
        setViewDuplicates(!viewDuplicates);
    }

    return (
        <div className={styles.news}>

            <HeadInfo date={DP} reach={REACH} traffic={TRAFFIC} sent={SENT} duplicate={false} /> 

            <h1 className={styles.news__title}>{TI}</h1>

            <SubtitleInfo domen={DOM} country={CNTR} cntr_code={CNTR_CODE} lang={LANG} autor={AU} duplicate={false} />

            <div className={styles.news__body}>

                <Highlighter
                    highlightClassName={styles.body__highlight}
                    searchWords={KW.map(kw => kw.value)}
                    autoEscape={true}
                    textToHighlight={AB}
                />

                {isShowMore &&
                    HIGHLIGHTS.map((block, index) => {
                        return (
                            <Highlighter key={index}
                                highlightClassName={styles.body__highlight}
                                searchWords={KW.map(kw => kw.value)}
                                autoEscape={true}
                                textToHighlight={block}
                            />
                        )
                    })
                }
            </div>

            <Button type="primary" 
                    icon={isShowMore ? <CaretUpOutlined /> : <CaretDownOutlined />} iconPosition={'end'} 
                    style={{backgroundColor:'transparent', color:'rgb(2,116,212)'}}
                    onClick={showMoreText}
            >
                {isShowMore ? 'Show less' : 'Show more'}
            </Button>

            <TagsBlock tags={KW} />

            <Button type='primary' 
                    style={{backgroundColor:'rgb(49, 53, 56)', color:'rgb(2,116,212)'}}
                    onClick={() => {window.open(URL)}}
            >
                Original Source
            </Button>

            <div className={styles.news__duplicates}>
                <div className={styles.duplicates__header}>
                    <p className={styles.duplicates__count}>Duplicates: <span>192</span></p>
                    <Button type='primary' 
                            icon={byRelevance ? <UpOutlined /> : <DownOutlined />} iconPosition={'end'} 
                            style={{backgroundColor:'transparent', color:'rgb(155,172,186)'}}
                            onClick={testForDuplicatesRelevance}
                    >
                        By Relevance
                    </Button>
                </div>
                
                <div className={styles.duplicates__card}>
                    <HeadInfo date={DP} reach={REACH} traffic={TRAFFIC} sent={SENT} duplicate={true} /> 
                    <h1 className={styles.news__title}>{TI}</h1>
                    <SubtitleInfo domen={DOM} country={CNTR} cntr_code={CNTR_CODE} lang={LANG} autor={AU} duplicate={true} />
                </div>

                {(byRelevance || viewDuplicates) &&
                    <div className={styles.duplicates__card}>
                        <h3 style={{color:'red'}}>Тестовый вариант не предполагает работы с дубликатами новостей...</h3>
                    </div>
                }

                <Button type='primary' 
                        icon={viewDuplicates ? <UpOutlined /> : <DownOutlined />} iconPosition={'start'} 
                        style={{backgroundColor:'transparent', borderColor:'rgb(155,172,186)', width:'100%', fontSize:'1.2rem', color:'rgb(155,172,186)'}}
                        onClick={testForDuplicatesView}
                >
                    View Duplicates
                </Button>
            </div>
        </div>
  )
}

export default News;

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from "antd";
import { LeftOutlined, CopyOutlined } from '@ant-design/icons';

import HighlightedTextarea from '../comps/additional_task-elements/HighlightedTextarea';

import queryExamples from '../../data/query_examples';

import { copyTextToClipboard } from '../../utils/auxiliary-functions';

import styles from '../../styles/components/additionalTaskPage.module.css';


const AdditionalTaskPage = () => {

    const navigate = useNavigate();

    const queryExampleRef = useRef<(HTMLParagraphElement | null)[]>([]);
    const copyBtnsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
    
    const handleClickCopyQueryExample = (index: number) => {
      const content: string | null | undefined  = queryExampleRef.current[index]?.textContent;
      copyTextToClipboard(content as string);
    };

    if (queryExampleRef.current.length !== queryExamples.length) {
      queryExampleRef.current = queryExamples.map(() => null);
      copyBtnsRef.current = queryExamples.map(() => null);
    }

    return (
      <section>
          
          <div className={styles.header_btns}>
            <Button type="primary"
              icon={<LeftOutlined />} iconPosition={'start'}
              onClick={() => navigate('/main')}
            >
              Back to the news list
            </Button>         
          </div>

          <h1>Highlighting the syntax of an input query</h1>

          <HighlightedTextarea />

          <span className={styles.note}>
            Примечание: экранирование внутренних двойных кавычек (при их наличии) происходит при отправке запроса. Внешние двойные кавычки при этом не экранируются.
          </span>

          <h2 className={styles.query_examples_title}>Примеры запросов</h2>
          <span>(с ключами и без, с вложенными двойными кавычками и без них)</span>
          {
            queryExamples.map((query, index) => {
              return (
                <div key={index} className={styles.query_example}>
                  <p ref={el => { queryExampleRef.current[index] = el; }}>{query}</p>
                  <Button type="primary" icon={<CopyOutlined />} size='small' 
                    ref={el => { copyBtnsRef.current[index] = el; }}
                    onClick={() => handleClickCopyQueryExample(index)}
                  />
                </div>
            )
            })
          }
      </section>
    )
}

export default AdditionalTaskPage;


import { useEffect, useState } from 'react';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'; // https://www.npmjs.com/package/react-highlight-within-textarea

import { Button } from 'antd';
import { CloseSquareOutlined, CopyOutlined, FileAddOutlined } from '@ant-design/icons';

import { 
    keysSearch, keywordSearch, escapeInnerQuotes, 
    copyTextToClipboard, pasteTextFromClipboard 
} from '../../../utils/auxiliary-functions';

import styles from '../../../styles/components/highlightedTextarea.module.css';


const HighlightedTextarea = () => {

    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');

    const handlePasteText = async () => {
        const text = pasteTextFromClipboard();
        setValue(await text);
    }

    useEffect(() => {
        setMessage('');
    }, [value])
   
    return (
        <div className={styles.custom_textarea__container}>
            <div className={styles.textarea__textarea}>
                <div className={styles.textarea__input_field}>
                    <HighlightWithinTextarea
                        placeholder='Enter a query with keywords' 
                        highlight={[
                            {
                                highlight: keysSearch(value),
                                className: styles.yellow
                            },
                            {
                                highlight: keywordSearch(value),
                                className: styles.blue
                            },
                            {
                                highlight: ['OR', 'AND', 'NOT'],
                                className: styles.red
                            }
                        ]}
                        value={value}
                        onChange={(value) => setValue(value)}                    
                    />
                </div>           
                <div className={styles.textarea__btns}>
                    { value ? 
                        <>
                            <Button type="primary" icon={<CopyOutlined />} size='small' onClick={() => copyTextToClipboard(value)}/>
                            <Button type="primary" icon={<CloseSquareOutlined />} size='small' onClick={() => setValue('')}/>
                        </> : 
                            <Button type="primary" icon={<FileAddOutlined />} size='small' onClick={handlePasteText}/>
                    }               
                </div>  
            </div>
            <div className={styles.textarea__footer}>
                {message &&
                    (<div>
                        <p>Sent request:</p>
                        <span className={styles.textarea__message}>{message}</span>
                    </div>)
                }               
                <Button type="primary"
                onClick={() => setMessage(escapeInnerQuotes(value))}
                >
                    Send request
                </Button>
            </div>
        </div>        
    )
}

export default HighlightedTextarea;

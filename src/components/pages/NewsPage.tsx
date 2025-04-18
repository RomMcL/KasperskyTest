import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux-state/store';

import { Button, Modal } from 'antd';
import { LeftOutlined, BarChartOutlined } from '@ant-design/icons';

import News from '../views/local/News';
import Chart from '../views/local/Chart';

import styles from '../../styles/components/newsPage.module.css';


const NewsPage = () => {

  const navigate = useNavigate();

  const news = useAppSelector(state => state.newsSlice.news[0]);

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return ( 
    <section>
        <div className={styles.header_btns}>
          <Button type="primary"
            icon={<LeftOutlined />} iconPosition={'start'}
            onClick={() => navigate('/main')}
          >
            Back to the news list
          </Button>
          {news &&
            <Button type="primary"
              icon={<BarChartOutlined />} iconPosition={'start'}
              onClick={showModal}
            >
              Show a traffic graph
            </Button>
          }          
        </div>
        
        {news &&
        <>
          <News
            ID={news.ID}
            TI={news.TI} 
            AB={news.AB} 
            URL={news.URL} 
            DOM={news.DOM} 
            DP={news.DP} 
            LANG={news.LANG} 
            REACH={news.REACH} 
            KW={news.KW} 
            AU={news.AU} 
            CNTR={news.CNTR} 
            CNTR_CODE={news.CNTR_CODE} 
            SENT={news.SENT} 
            TRAFFIC={news.TRAFFIC} 
            FAV={news.FAV} 
            HIGHLIGHTS={news.HIGHLIGHTS}        
          />

          <Modal
            open={open}
            title='Chart'          
            onCancel={handleCancel}
            footer={[]}
          >
            <Chart news={news.TI} traffic={news.TRAFFIC}/>
          </Modal>
        </>
          
        }        
    </section>
  )
}

export default NewsPage;

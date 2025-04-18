import { SyntheticEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux-state/store';

import { changeNews } from '../../redux-state/redusers/news';

import styles from '../../styles/components/newsListPage.module.css';

const NewsListPage = () => {

  const navigate = useNavigate();
  
  const dataNews = useAppSelector(state => state.newsSlice.dataNews);

  const dispatch = useAppDispatch();

  const selectNews = (_: SyntheticEvent, newsID: number) => {
    dispatch(changeNews(dataNews.filter((id) => id.ID === newsID)));
    navigate(`/news/${newsID}`);
  }
  
  return (
    <section>
      <h1>News List</h1>
      <ul className={styles.list}>
        {
          dataNews.map((news) => {
            return (
              <li 
                key={news.ID} 
                onClick={event => selectNews(event, news.ID)}
              >
                {news.TI}
              </li>
            )
          })
        }
      </ul>      
    </section>
  )
}

export default NewsListPage;

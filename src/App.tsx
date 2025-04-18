
import { Routes, Route } from 'react-router-dom';

import NewsListPage from './components/pages/NewsListPage';
import NewsPage from './components/pages/NewsPage';

import '@ant-design/v5-patch-for-react-19';

const App = () => {

    return (
        <main>
            <Routes>
                <Route
                    path={'/main'}
                    element={<NewsListPage />}          
                />
                <Route
                    path={'/news/:newsID'}
                    element={<NewsPage />}
                />
                <Route
                    path={'*'}
                    element={<NewsListPage />}
                />
            </Routes>
        </main>
    )
}

export default App;
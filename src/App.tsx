import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import sun from "./assets/sun.svg";
import night from "./assets/night.svg";

const App: React.FC = () => {
    return (
    <div className='dark'>
        <div className='absolute right-7 top-7'>
            <label className="inline-flex items-center cursor-pointer">
              <span className="me-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                <img src={night} className='w-6' />
              </span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                <img src={sun} className='w-9' />
              </span>
            </label>
        </div>
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
        </Routes>
    </div>
    );
};

export default App;

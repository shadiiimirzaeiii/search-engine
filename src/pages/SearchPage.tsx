import React, { useEffect, useState } from 'react';
import { RelatedTopic, TopicsType } from '@app-types/index';
import ListComponent from '@components/List';
import SpinnerComponent from '@components/Spinner';
import { getRequest } from '@helpers/api';
import { useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '@helpers/constants';


export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<RelatedTopic[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!query.length) return;
      fetchSuggestions(query);
    }, 900);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const fetchSuggestions = async (searchQuery: string) => {
    setLoading(true);
    try {
      const { RelatedTopics } = await getRequest<TopicsType>({
        url: `?q=${searchQuery}`,
        params: API_OPTIONS,
      }) as TopicsType;
      setSuggestions(RelatedTopics.filter(topics => topics.Text) || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const navigateToResultPage = () => navigate(`/results?qeury=${query}`);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-1/3 items-center justify-center mt-40 mx-auto">
      <h1 className='text-gray-400 text-center text-5xl font-bold'>Search engine</h1>
      <div className="relative mt-7">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"/>
              </svg>

          </div>
          <input
          type="search"
          value={query}
          onChange={onChangeInput}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search anything..."
          required />
          <button
          type="submit"
          disabled={!query.length}
          onClick={navigateToResultPage}
          className="text-white absolute end-2.5 bottom-2.5 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
            </button>
      </div>   
        { loading 
        ? <SpinnerComponent />
        : query.length && suggestions.length 
        ? <ListComponent suggestionsList={suggestions} />
        : null
        }
      </div>
    </div>
  );
}

import { RelatedTopic, TopicsType } from '@app-types/index';
import ResultComponent from '@components/ResultList';
import SkeletonComponent from '@components/Skeleton';
import { getRequest } from '@helpers/api';
import { API_OPTIONS } from '@helpers/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<RelatedTopic[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('qeury');
  const SkletonRepeat = 5;

  
  useEffect(() => {
    if (!query) return;
    fetchQuery(query);
  }, []);

  const fetchQuery = async (searchQuery: string) => {
    setLoading(true);
    try {
      const { RelatedTopics } = await getRequest<TopicsType>({
        url: `?q=${searchQuery}`,
        params: API_OPTIONS,
      }) as TopicsType;
      setResults(RelatedTopics.filter(topics => topics.Text) || []);
    } catch (error) {
      console.error('Error fetching result:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white max-w-4xl p-10">
    <h4 className='font-bold text-5xl mb-10'>"{query}" Result:</h4>
    {
    loading 
    ? <SkeletonComponent repeat={SkletonRepeat}/>
    : <ResultComponent list={results}/>
    }
  </div>
  );
};

export default DetailsPage;

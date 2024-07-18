import { useState, useEffect } from 'react';
import { fetchTopStories } from '../utils/api';

interface Story {
  id: number;
  title: string;
}

const useFetchStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const storyData = await fetchTopStories();
      setStories(storyData);
      setLoading(false);
    };
    fetchStories();
  }, []);

  return { stories, loading };
};

export default useFetchStories;

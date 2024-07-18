import { useState, useEffect } from 'react';
import { fetchStoryDetails, fetchComments } from '../utils/api';

interface Story {
  id: number;
  title: string;
  by: string;
  score: number;
  kids?: number[];
}

interface Comment {
  id: number;
  by: string;
  text: string;
}

const useFetchStoryDetails = (storyId: number) => {
  const [story, setStory] = useState<Story | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const storyData = await fetchStoryDetails(storyId);
      setStory(storyData);

      if (storyData.kids) {
        const commentData = await fetchComments(storyData.kids);
        setComments(commentData);
      }

      setLoading(false);
    };
    fetchDetails();
  }, [storyId]);

  return { story, comments, loading };
};

export default useFetchStoryDetails;

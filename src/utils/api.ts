import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchTopStories = async (page = 1, limit = 20) => {
  const response = await api.get('/topstories.json');
  const storyIds = response.data.slice((page - 1) * limit, page * limit);
  const storyPromises = storyIds.map(id => api.get(`/item/${id}.json`));
  const storyResults = await Promise.all(storyPromises);
  return storyResults.map(res => res.data);
};

export const fetchStoryDetails = async (id: number) => {
  const response = await api.get(`/item/${id}.json`);
  return response.data;
};

export const fetchComments = async (commentIds: number[]) => {
  const commentPromises = commentIds.map(id => api.get(`/item/${id}.json`));
  const commentResults = await Promise.all(commentPromises);
  return commentResults.map(res => res.data);
};

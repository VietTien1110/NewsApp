import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DetailsScreen from '../screens/DetailsScreen';
import { fetchStoryDetails, fetchComments } from '../utils/api';

jest.mock('../utils/api');

const mockedFetchStoryDetails = fetchStoryDetails as jest.MockedFunction<typeof fetchStoryDetails>;
const mockedFetchComments = fetchComments as jest.MockedFunction<typeof fetchComments>;

test('renders DetailsScreen correctly', async () => {
  mockedFetchStoryDetails.mockResolvedValue({
    id: 1,
    title: 'Test Story',
    by: 'author',
    score: 100,
    kids: [1, 2],
  });
  mockedFetchComments.mockResolvedValue([
    { id: 1, by: 'commenter1', text: 'Comment 1' },
    { id: 2, by: 'commenter2', text: 'Comment 2' },
  ]);

  const route = { params: { storyId: 1 } } as any;
  const { getByText } = render(<DetailsScreen route={route} />);
  
  await waitFor(() => expect(getByText('Test Story')).toBeTruthy());
  await waitFor(() => expect(getByText('Comment 1')).toBeTruthy());
  await waitFor(() => expect(getByText('Comment 2')).toBeTruthy());
});

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DetailsScreen from '../screens/DetailsScreen';
import { fetchStoryDetails, fetchComments } from '../utils/api';

jest.mock

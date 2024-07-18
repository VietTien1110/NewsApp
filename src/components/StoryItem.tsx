import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface StoryItemProps {
  story: {
    id: number;
    title: string;
  };
  onPress: (id: number) => void;
}

const StoryItem: React.FC<StoryItemProps> = ({story, onPress}) => (
  <TouchableOpacity onPress={() => onPress(story.id)}>
    <Text>{story.title}</Text>
  </TouchableOpacity>
);

export default React.memo(StoryItem);

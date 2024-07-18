import React from 'react';
import {View, Text} from 'react-native';

interface CommentItemProps {
  comment: {
    by: string;
    text: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({comment}) => (
  <View>
    <Text>{comment.by}</Text>
    <Text>{comment.text}</Text>
  </View>
);

export default React.memo(CommentItem);

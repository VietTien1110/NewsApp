import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import useFetchStoryDetails from '../hooks/useFetchStoryDetails';
import CommentItem from '../components/CommentItem';
import styles from '../styles/styles';

type RootStackParamList = {
  Home: undefined;
  Details: {storyId: number};
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  const {storyId} = route.params;
  const {story, comments, loading} = useFetchStoryDetails(storyId);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {story && (
            <View style={styles.container}>
              <Text style={styles.title}>{story.title}</Text>
              <Text style={styles.subtitle}>{story.by}</Text>
              <Text style={styles.subtitle}>{story.score} points</Text>
            </View>
          )}
          <FlatList
            data={comments}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CommentItem comment={item} />}
          />
        </>
      )}
    </View>
  );
};

export default DetailsScreen;

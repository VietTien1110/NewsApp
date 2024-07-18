import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import useFetchStories from '../hooks/useFetchStories';
import StoryItem from '../components/StoryItem';
import styles from '../styles/styles';

type RootStackParamList = {
  Home: undefined;
  Details: {storyId: number};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {stories, loading} = useFetchStories();

  const handlePress = (storyId: number) => {
    navigation.navigate('Details', {storyId});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={stories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <StoryItem story={item} onPress={handlePress} />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

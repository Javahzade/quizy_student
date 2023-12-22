import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LevelButton from '../../components/LevelButton/LevelButton';
import VectorIcon from '../../assets/icons/Vector.svg';
import ArrowVectorIcon from '../../assets/icons/ArrowVector.svg';
import ForwardVectorIcon from '../../assets/icons/ForwardVector.svg';
import CLockIcon from '../../assets/icons/Clockicon.svg';
import ChoosingButton from '../../components/ChoosingButton/ChoosingButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesSlice} from './slice';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/store';
function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  console.log(selectedCategory);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [choosedLevel, setChoosedLevel] = useState<string | null>(null);

  const onSelectLevel = (key: string) => {
    setSelectedLevel(key);
  };

  const onChooseLevel = (key: string) => {
    setChoosedLevel(key);
  };

  const apiCategory = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    const responseJson = await response.json();
    if (responseJson.trivia_categories) {
      dispatch(
        categoriesSlice.actions.setCategories(responseJson.trivia_categories),
      );
    }
  };

  useEffect(() => {
    apiCategory();
  }, []);

  const onShowCategory = () => {
    navigation.navigate('Categories');
  };
  console.log(
    `https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&difficulty=${selectedLevel}&type=${choosedLevel}`,
  );
  const onStartQuiz = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&difficulty=${selectedLevel}&type=${choosedLevel}`,
    );
    const reponseJson = await response.json();

    console.log(reponseJson);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={styles.area}>
        <View style={styles.header}>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <VectorIcon />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.choose}>
            <View style={{marginBottom: 24}}>
              <Text style={styles.choosing}>Choose category</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 24,
                }}>
                <Text style={styles.sport}>
                  {selectedCategory?.name || '--'}
                </Text>
                <TouchableOpacity onPress={onShowCategory}>
                  <ArrowVectorIcon />
                </TouchableOpacity>
              </View>
              <Text style={{color: 'white', fontSize: 16}}>Choose level</Text>
            </View>
            <View style={styles.container}>
              <LevelButton
                buttonTitle="EASY"
                onSelect={() => onSelectLevel('easy')}
                isSelected={selectedLevel === 'easy'}
                onSelectColor={'#FF9C00'}
              />
              <LevelButton
                buttonTitle="MEDIUM"
                onSelect={() => onSelectLevel('medium')}
                isSelected={selectedLevel === 'medium'}
                onSelectColor={'#31B057'}
              />
              <LevelButton
                buttonTitle="HARD"
                onSelect={() => onSelectLevel('hard')}
                isSelected={selectedLevel === 'hard'}
                onSelectColor={'#FD3654'}
              />
            </View>
          </View>
          <View style={styles.choosingtype}>
            <View style={styles.type}>
              <Text style={{fontSize: 16, color: 'white'}}>Choose type</Text>
            </View>
            <View style={styles.button}>
              <ChoosingButton
                buttonTitle="True/False"
                onSelect={() => onChooseLevel('boolean')}
                isSelected={choosedLevel === 'boolean'}
                onSelectColor={'#6A6AD0'}
              />
              <ChoosingButton
                buttonTitle="Multiple"
                onSelect={() => onChooseLevel('multiple')}
                isSelected={choosedLevel === 'multiple'}
                onSelectColor={'#6A6AD0'}
              />
            </View>
          </View>
          <View style={styles.timer}>
            <TouchableOpacity>
              <CLockIcon />
            </TouchableOpacity>
            <View style={styles.second}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '400',
                  color: 'white',
                }}>
                20 sec
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.start}
          onPress={onStartQuiz}
          disabled={!(selectedCategory && selectedLevel && choosedLevel)}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Start QUIZ
          </Text>
          <ForwardVectorIcon style={{position: 'absolute', right: 10}} />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5B4DC3',
  },
  area: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  choose: {
    // alignSelf:'center',
    justifyContent: 'center',
  },
  choosing: {
    color: 'white',
    fontSize: 16,
  },
  sport: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  choosingtype: {
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  type: {
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  timer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  second: {
    marginLeft: 12,
  },
  start: {
    backgroundColor: '#6A5AE0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
  },
});

export default HomeScreen;

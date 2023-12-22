import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {categoriesSlice} from './slice';
import {useNavigation} from '@react-navigation/native';

export const Categories = () => {
  const {categories} = useSelector((state: RootState) => state.categories);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSelectCategory = category => {
    dispatch(categoriesSlice.actions.setSelectedCategory(category));
    navigation.goBack();
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={styles.area}>
        <ScrollView>
          {categories.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.button}
              onPress={() => onSelectCategory(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {},
  area: {},
  button: {
    padding: 16,
  },
});

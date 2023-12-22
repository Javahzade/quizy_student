import React, { useEffect, useState } from 'react';
import {Dimensions,ImageBackground,StatusBar,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import axios from 'axios';
import CrossVector from '../../assets/icons/CrossVector.svg'
const WIDTH = Dimensions.get('window').width;

const TrueFalseScreen = () => {
  const [questionCount, setQuestionCount] = useState(null);
  const [timer, setTimer] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://opentdb.com/api_count.php?category=9';

    axios.get(apiUrl)
      .then(response => {
        const { category_question_count } = response.data;
        setQuestionCount(category_question_count.total_question_count);
      })
      .catch(error => {
        console.error('Error fetching question count:', error);
      });

    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleOptionPress = (option:any) => {
    setSelectedOption(option);
  };

  const getButtonStyle = (option:any) => {
    if (selectedOption === option) {
      return { backgroundColor: option === 'true' ? '#31B057' : '#FD3654' };
    }
    return {};
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={{width: '100%', height: '100%'}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.category}>
        <Text style={styles.categoryText}>Sport</Text>
        <Text>
          <CrossVector/>
        </Text>
      </View>

      <View style={styles.questionCount}>
        {questionCount !== null ? (
          <Text style={styles.categoryText}>1/{questionCount}</Text>
        ) : (
          <Text>Loading question count...</Text>
        )}
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.questionText}>
          "Which Pok&eacute;mon and it&#039;s evolutions were banned from
          appearing in a main role after the Episode 38 Incident?"
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, getButtonStyle('true')]}
          onPress={() => handleOptionPress('true')}>
          <Text style={styles.buttonText}>TRUE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, getButtonStyle('false')]}
          onPress={() => handleOptionPress('false')}>
          <Text style={styles.buttonText}>FALSE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  category: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 44,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  questionCount: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 12,
  },
  timerText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  question: {
    width: WIDTH / 1.2,
    marginHorizontal: 30,
    marginTop: WIDTH / 2,
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: WIDTH / 1.2,
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    width: 152,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
},
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
    },
});

export default TrueFalseScreen;
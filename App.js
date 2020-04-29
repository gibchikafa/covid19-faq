import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import SectionQuestions from './components/SectionQuestions'
import Colors from './components/views/Colors'
import { Image,Animated,Easing } from 'react-native';



const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
 
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;
 
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [-width, 0],
        extrapolate: 'clamp'
      });
 
      return {
        transform: [{ translateX }]
      }
    }
  }
}

const Stack = createStackNavigator();

function LogoTitleRight() {
  return (
    <Image
      style={{ width: 50, height: 50,borderRadius:50/2,marginRight:10, }}
      source={require('./components/views/sweden.png')}
    />
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'COVID19-FAQs',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: props => <LogoTitleRight {...props} />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="SectionQuestions" 
            component={SectionQuestions} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
import 'react-native-gesture-handler';
import {Linking} from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import SectionQuestions from './components/SectionQuestions'
import LanguageOptions from './components/LanguageOptions'
import Colors from './components/views/Colors'
import { withTheme } from 'react-native-elements';
import { Languages } from './components/Languages';


const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      showNotice:true,
      language: Languages.SWEDISH
    }
  }

  ToggleNotice = (language,navigation) => {
    if (language != Languages.SWEDISH) {
      this.setState({ showNotice:false, language:language });

      navigation.navigate("Home", { language: language});
    }
    else{
      this.setState({ showNotice:false});
    }
  }

  ShowModal = () => {
    this.setState({ modalVisible: true });
  }

  ToggleModal = (language, navigation) => {
    const visible = this.state.modalVisible;
    this.setState({ language: language, modalVisible: !visible });

    if (language != this.state.language) {
      navigation.navigate("Home", { language: language });
    }
  }

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
            headerRight: () => <LanguageOptions
              showModal={this.ShowModal}
              toggleModal={this.ToggleModal}
              language={this.state.language}
              modalVisible={this.state.modalVisible}
              showNotice={this.state.showNotice}
              toggleNotice={this.ToggleNotice}
            />,
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

export default App;
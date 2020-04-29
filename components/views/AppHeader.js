import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import {Header} from 'react-native-elements'

export class AppHeader extends Component{
    render(){
        return(
            <Header
                placement="left"
                centerComponent={{ text: this.props.page_title, style: { color: '#0da935' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}

export default AppHeader
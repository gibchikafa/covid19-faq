import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import CustomRow from './views/CustomRow';

class Section extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <FlatList
                    data={this.props.sectionList}
                    renderItem={({ item }) => <CustomRow
                        item={item} sectionPress = {this.props.sectionPress}
                    />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Section;
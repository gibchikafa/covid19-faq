import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export class CustomRow extends Component {
    render() {
        const { id, section } = this.props.item;
        return (
            <TouchableOpacity onPress={() => this.props.sectionPress(id)}>
                <View style={styles.container} key={id} >
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {section}
                    </Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight:15,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 12,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    }
});

export default CustomRow;
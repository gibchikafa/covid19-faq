import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking} from "react-native";
import { Colors } from './views/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            answer: props.answer,
            expanded: false,
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                    <Text style={[styles.title, styles.font]}>{this.props.question}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} />
                </TouchableOpacity>
                <View style={styles.parentHr} />
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <Text>{this.parseAnswer(this.props.answer)}</Text>
                    </View>
                }
            </View>
        )
    }

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded })
    }


    parseAnswer = (answer) => {
        let answer_parts = answer.split("statlink");
        if (answer_parts.length == 1) {
            return [<Text>{answer}</Text>];
        }
        else {
            let j = 0;
            let full_answer = [];

            while (j < answer_parts.length) {
                if (answer_parts[j].startsWith("=")) {
                    let link_parts = answer_parts[j].split("*");

                    let link = <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link_parts[0].replace("=", ""))}>{link_parts[1]}</Text>
                    full_answer.push(link);
                }
                else {
                    full_answer.push(<Text>{answer_parts[j]}</Text>)
                }

                j++;
            }

            return full_answer;
        }
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.DARKGRAY,
        width: '95%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 56,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        backgroundColor: Colors.CGRAY,
    },
    parentHr: {
        height: 1,
        color: Colors.WHITE,
        width: '100%'
    },
    child: {
        backgroundColor: Colors.GRAY,
        padding: 16,
    }

});
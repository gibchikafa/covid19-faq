import React, { Component } from 'react';
import Accordian from './Accordian'
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Colors } from './views/Colors'
import { ScrollView } from 'react-native-gesture-handler';
import { Languages } from './Languages';

class SectionQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.data,
            language: this.props.route.params.language
        }
    }

    render() {
        const { faqs, id, section } = this.state.data;
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.sectionHeader}>{this.sectionText()}: {section}</Text>
                        {this.renderAccordians(faqs)}
                    </View>
                </View>
            </ScrollView>
        )
    }

    renderAccordians = (faqs) => {
        const all_questions = [];
        faqs.map(question => {
            all_questions.push(
                <Accordian
                    question={question.question}
                    answer={question.answer}
                />
            );
        });
        return all_questions;
    }

    sectionText(){
        if(this.state.language == Languages.ENGLISH){
            return "Section";
        }

        return "Sektion";
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GRAY
    },
    sectionHeader: {
        padding: 15,
        fontSize: 20,
    }
});

export default SectionQuestions;
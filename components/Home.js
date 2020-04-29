import React, { Component } from 'react';

import { Colors } from './views/Colors';
import faqs from '../data/coronafaqs.json';
import Section from './Section';
import { AppHeader } from './views/AppHeader'
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './views/CustomRow';
import { ScrollView } from 'react-native-gesture-handler';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coronafaqs: faqs,
            page_title: "COVID19-FAQ"
        }
    }

    getSections = () => {
        let sections = [];
        for (section of this.state.coronafaqs) {
            let title = section.section;
            sections.push({ section: title, id: section.id });
        }

        return sections;
    }

    sectionPress = id => {
        let section_faqs = this.state.coronafaqs.filter((section) => section.id === id);

        this.props.navigation.navigate("SectionQuestions", {
            data: section_faqs[0]
        });
    }

    render() {
        let { coronafaqs, page_title } = this.state;
        let sections = this.getSections();

        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={sections}
                            renderItem={({ item }) => <CustomRow
                                item={item} sectionPress={this.sectionPress}
                            />}
                        />
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GRAY
    }
});

export default Home;
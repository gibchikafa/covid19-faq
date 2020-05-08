import React, { Component } from 'react';

import { Colors } from './views/Colors';
import faqs from '../data/coronafaqs.json';
import faqsSwed from '../data/coronafaqs-swedish.json';
import Section from './Section';
import { AppHeader } from './views/AppHeader'
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './views/CustomRow';
import { ScrollView } from 'react-native-gesture-handler';
import { Languages } from './Languages';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotice: true,
        }
    }

    toggleNotice = (language) => {
        if(language != Languages.SWEDISH){
            
        }
    }

    getLanguageFaqs = () => {
        let coronafaqs = faqsSwed; //default is swedish
        if(this.props.route.params != undefined){
            if(this.props.route.params.language == Languages.ENGLISH){
                coronafaqs = faqs;
            }
        }
        return coronafaqs;
    }

    getCurrentLanguage = () => {
        let language = Languages.SWEDISH;
        if(this.props.route.params != undefined){
            if(this.props.route.params.language == Languages.ENGLISH){
                language = Languages.ENGLISH;
            }
        }

        return language;
    }

    getSections = () => {
        let sections = [];
        let coronafaqs = this.getLanguageFaqs();

        for (section of coronafaqs) {
            let title = section.section;
            sections.push({ section: title, id: section.id });
        }

        return sections;
    }

    sectionPress = id => {
        let section_faqs = this.getLanguageFaqs().filter((section) => section.id === id);

        this.props.navigation.navigate("SectionQuestions", {
            data: section_faqs[0],
            language: this.getCurrentLanguage()
        });
    }

    render() {
        let sections = this.getSections();
        console.log(this.props.route);
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
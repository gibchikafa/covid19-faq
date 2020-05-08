import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Animated, Easing, View, Text, StyleSheet, TouchableOpacity, Button, Modal, Alert } from 'react-native';
import { Languages } from './Languages';
import { Colors } from './views/Colors'
import { Overlay} from 'react-native-elements'
import {Linking} from 'react-native'

const LanguageOptions = props => {
    const navigation = useNavigation();

    const GetFlag = () => {

        if (props.language == "ENG") {
            return require('./views/GB.png');
        }

        return require('./views/sweden.png');
    }


    const flag = GetFlag();
    return (
        <>
            <Overlay isVisible={props.showNotice} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View>
                    <View>
                        <Text style={styles.HeaderStyle}>Notice !!</Text>
                        <Text>
                            This application does not replace official sources of Corona virus information.
                            All the information in this application is taken from <Text> </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() =>
                                    Linking.openURL('https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/')}>
                                folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/
                            </Text>
                            <Text> and </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() =>
                                    Linking.openURL('https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/')}>
                                folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/
                            </Text>
                        </Text>

                        <TouchableOpacity style={styles.EnglishStyle} onPress={() => props.toggleNotice(Languages.ENGLISH, navigation)}>
                            <Image
                                //We are showing the Image from online
                                source={require('./views/GB.png')}
                                style={styles.ImageIconStyle}
                            />
                            <View style={styles.SeparatorLine} />
                            <Text style={styles.BtnTextStyle}>Continue in English</Text>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>
                        <Text style={styles.HeaderStyle}>Lägga märke till!!</Text>
                        <Text>
                            
                            Denna applikation ersätter inte officiella källor till Corona-virusinformation.
                            All information i denna ansökan är hämtad från <Text> </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() =>
                                    Linking.openURL('https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/')}>
                                folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/
                            </Text>
                            <Text> och </Text>
                            <Text style={{ color: 'blue' }}
                                onPress={() =>
                                    Linking.openURL('https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/')}>
                                folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/
                            </Text>
                        </Text>
                        <TouchableOpacity style={styles.SwedishStyle} onPress={() => props.toggleNotice(Languages.SWEDISH, navigation)}>
                            <Image
                                //We are showing the Image from online
                                source={require('./views/sweden.png')}
                                style={styles.ImageIconStyle}
                            />
                            <View style={styles.SeparatorLine} />
                            <Text style={styles.BtnTextStyle}>Fortsätt på svenska</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Overlay>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.TextStyle}>Change Language</Text>
                        <TouchableOpacity style={styles.SwedishStyle} onPress={() => props.toggleModal(Languages.SWEDISH, navigation)}>
                            <Image
                                //We are showing the Image from online
                                source={require('./views/sweden.png')}
                                style={styles.ImageIconStyle}
                            />
                            <View style={styles.SeparatorLine} />
                            <Text style={styles.BtnTextStyle}>Swedish</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.EnglishStyle} onPress={() => props.toggleModal(Languages.ENGLISH, navigation)}>
                            <Image
                                //We are showing the Image from online
                                source={require('./views/GB.png')}
                                style={styles.ImageIconStyle}
                            />
                            <View style={styles.SeparatorLine} />
                            <Text style={styles.BtnTextStyle}>English</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View>
                <TouchableOpacity style={styles.TouchableStyle} onPress={() => props.showModal()}>
                    <Text style={styles.LanguageStyle}>{props.language}</Text>
                    <Image
                        style={styles.ImageStyle}
                        source={flag}
                    />
                </TouchableOpacity>
            </View>
        </>

    )

}

const styles = StyleSheet.create({
    HeaderStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    TouchableStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextStyle: {
        fontWeight: 'bold',
        padding: 20
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        elevation: 2,
    },
    LanguageStyle: {
        fontWeight: 'bold',
        color: '#ffff',
        marginRight: 5
    },
    ImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        marginLeft: 20,
        marginRight: 20,
        width: 250,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    SwedishStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FECC00',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
        elevation: 2
    },
    EnglishStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#03297C',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
        elevation: 2
    },
    BtnTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
    },
    SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

export default LanguageOptions;
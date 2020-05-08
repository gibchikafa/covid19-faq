import React, { useState } from 'react';
import { Image, Animated, Easing, View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { Languages } from './Languages';
import { Overlay, Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Notice = props => {
    return (
        <>
            <Overlay isVisible={props.visible}  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.HeaderStyle}>Notice !!</Text>
                        <Text>
                            This application does not replace official sources of Corona vurus information. 
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
                        
                        <TouchableOpacity style={styles.EnglishStyle} onPress={() => props.toggleNotice(Languages.ENGLISH)}>
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
                            
                            Denna applikation ersätter inte officiella källor till Corona vurusinformation.
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
                        <TouchableOpacity style={styles.SwedishStyle} onPress={() => props.toggleNotice(Languages.SWEDISH)}>
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
        </>
    )

}

const styles = StyleSheet.create({
    HeaderStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: Colors.RED
    },
    centeredView: {
        flex: 1,
    },
    modalView: {
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

export default Notice;
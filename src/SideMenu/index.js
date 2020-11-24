import React, { Component } from 'react';
import { Platform, StyleSheet, Linking, UIManager, LayoutAnimation, Dimensions, Alert, FlatList, ScrollView, StatusBar, Keyboard, SafeAreaView, View, KeyboardAvoidingView, Animated, ImageBackground, BackHandler } from 'react-native';
import { Button, Image as I, Text, Icon, Input, Divider, Avatar } from 'react-native-elements';
import Colors from '../Utils/Colorss';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Styles from '../Component/Styles';
import TextJson from '../Component/TextJson';
import { SideMenuJson } from '../Component/ImageJson';
import Loader from '../Component/Loader';
import Image from 'react-native-scalable-image';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import GlobalButton from '../Component/GlobalButtom';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

export class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }


    componentWillUnmount() {
        this.setState({})
    }

    logout = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('LoginStackScreen')

    }


    GoTO(path) {
        console.log("Item Path", path);
        this.props.navigation.navigate(path);
    }


    renderSideMenuJson = ({ item, index }) => {
        return (
            <SafeAreaView style={Styles().container}>
                <View style={{ width: '100%', backgroundColor: Colors.White }}>
                    <View>
                        <TouchableNativeFeedback onPress={() => this.GoTO(item.path)} style={Styles().SideMenuItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: (width / 12) + (Config.margin * 2) }}>
                                    <Image
                                        source={item.iconimage}
                                        height={width / 12}
                                        resizeMethod='resize'
                                        placeholderStyle={{ backgroundColor: Colors.trans }}
                                    />
                                </View>

                                <View style={Styles().ItemView}>
                                    <Text style={Styles().ItemTitle}>{item.title}</Text>
                                </View>

                            </View>

                            <View style={{ alignItems: 'flex-end' }}>
                                <Icon
                                    name={Config.SideArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.Black}
                                />
                            </View>

                        </TouchableNativeFeedback>
                    </View>




                </View>
            </SafeAreaView>
        )
    }

    render() {
        const { loading } = this.state;
        return (
            <SafeAreaView style={[Styles().container, { width: '100%' }]}>
                {loading ? <Loader />
                    :
                    <ScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <View style={{ flex: 1 }}>
                            {SideMenuJson.Items != '' ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SideMenuJson.Items}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => String(index)}
                                    renderItem={SideMenuJson.Items ? this.renderSideMenuJson : null}
                                />

                                : <Text>{TextJson.NoDataFound.toUpperCase()}</Text>
                            }
                        </View>
                    </ScrollView>
                }

                <View>
                    <GlobalButton
                        ButtonTitle="LOG OUT"
                        ButtonType='solid'
                        ButtonWidth={width - (Config.margin)}
                        Bottoncolor={Colors.Orange5}
                        onButtonPress={() => this.logout()}
                    />
                </View>

            </SafeAreaView>
        );

    }
}

export default SideMenu
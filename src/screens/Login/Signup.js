import React, { Component } from 'react';
import { Dimensions, Image as I, Alert, FlatList, ScrollView, StatusBar, Keyboard, TouchableOpacity, SafeAreaView, ImageBackground, View, KeyboardAvoidingView, } from 'react-native';
import { Button, Image, Text, Icon, Input, Divider } from 'react-native-elements';
import Colors from '../../Utils/Colorss';
import Fonts from '../../Utils/CustomFonts';
import axios from 'axios';
import Config from '../../Utils/Config';
import Styles from '../../Component/Styles';
import TextJson from '../../Component/TextJson';
import GlobalButton from '../../Component/GlobalButtom';
import GlobalInput from '../../Component/GlobalInput';
import Snackbar from 'react-native-paper/lib/module/components/Snackbar';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Component/Loader';
import { StackActions } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const image = require('../../../assets/imageback.png');

let FocusValue = null;
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            Email_error: '',
            Password: '',
            Password_error: '',
            securePass: true,
            visible: false,
            ErrorMessage: '',
            loading: false,
            Confirmpassword: '',
            Confirmpassword_error: '',
            credentials: []

        }
    }

    validateEmail(email) {
        console.log('validateEmail :- ' + email);
        var Email_Regex = Config.EmailRegex;
        return Email_Regex.test(email);
    }

    async SignupFields() {
        Keyboard.dismiss();
        const { email, Email_error, Password, Password_error, Confirmpassword_error, Confirmpassword } = this.state;
        console.log('email', email, 'Password', Password);
        this.setState({ Email_error: '', Password_error: '', Confirmpassword_error: '' })

        let EmailN = ''
        if (email) { EmailN = email.trim() }
        let EmailValid = false
        if (EmailN) { EmailValid = this.validateEmail(EmailN) }
        let PasswordN = ''
        if (Password) { PasswordN = Password.trim() }
        if (PasswordN) { PasswordN = String(PasswordN) }
        let ConfirmpasswordN = ''
        if (Confirmpassword) { ConfirmpasswordN = Confirmpassword.trim() }
        if (ConfirmpasswordN) { ConfirmpasswordN = String(ConfirmpasswordN) }

        if (!EmailN && !PasswordN && !ConfirmpasswordN) {
            this.setState({ ErrorMessage: 'Please Enter email & Password' })
            FocusValue = this.EmailInput
            this._onToggleSnackBar();
        }
        else if (!EmailN) {
            this.setState({ ErrorMessage: 'Please Enter email Address' })
            FocusValue = this.EmailInput
            this._onToggleSnackBar();
        }
        else if (!EmailValid) {
            this.setState({ ErrorMessage: 'Please Enter Valid email Address' })
            FocusValue = this.EmailInput
            this._onToggleSnackBar();
        }
        else if (!PasswordN) {
            this.setState({ ErrorMessage: 'Please Enter Password' })
            FocusValue = this.PasswordInput
            this._onToggleSnackBar();
        }
        else if (PasswordN.length < 3) {
            this.setState({ ErrorMessage: 'Minimum 3 Characters are required' })
            FocusValue = this.PasswordInput
            this._onToggleSnackBar();
        }
        else if (!ConfirmpasswordN) {
            this.setState({ ErrorMessage: 'Confirm Password is required' })
            FocusValue = this.ConfirmPasswordInput
            this._onToggleSnackBar();
        }
        else if (ConfirmpasswordN.length < 3) {
            this.setState({ ErrorMessage: 'Minimum 3 character is required' })
            FocusValue = this.ConfirmPasswordInput
            this._onToggleSnackBar();
        }
        else if (PasswordN != ConfirmpasswordN) {
            this.setState({ ErrorMessage: 'Password & Confirm Password should be same' })
            FocusValue = this.ConfirmPasswordInput
            this._onToggleSnackBar();
        }
        else {
            this.EmailInput.clear(); this.PasswordInput.clear(); this.ConfirmPasswordInput.clear(); this.setState({ email: '', Password: '', Confirmpassword: '' });
            credentials = [{ email: email, Password: Password }]
            await AsyncStorage.setItem('credentials', JSON.stringify(credentials))
            this.props.navigation.navigate('Login')
        }
    }


    FocusToFields() {
        FocusValue.focus();
    }

    _onToggleSnackBar = () => {
        setTimeout(() => {
            this.setState(state => ({ visible: !state.visible }));
        }, 300);
    };

    _onDismissSnackBar = () => this.setState({ visible: false });

    render() {

        const { email, Email_error, loading, Password, Password_error, securePass, visible, Confirmpassword_error, Confirmpassword, ErrorMessage } = this.state;

        return (
            <SafeAreaView style={Styles().container}>
                <ImageBackground source={image} style={{ flex: 1 }}>
                    <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                            <View style={{ height: height / 2.5, width: width, justifyContent: 'flex-end', alignItems: 'center', }}>
                                <Text style={{ fontSize: height / 30, fontWeight: 'bold',marginBottom:Config.margin }}>{TextJson.Signup}</Text>
                            </View>

                            <View style={{ width: width, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>

                                    <View style={{ marginBottom: Config.margin }}>
                                        <View style={Styles().LoginInputView}>
                                            <GlobalInput
                                                AutoCapitalize="none"
                                                InputStyle={Styles().input_style, Styles().loginInputstyle}
                                                OnChangeText={value => this.setState({ email: value, Email_error: '' })}
                                                Value={email}
                                                SecureTextEntry={false}
                                                KeyboardType='email-address'
                                                Label={'Email'}
                                                ReturnKeyType='next'
                                                OnSubmitEditing={() => this.PasswordInput.focus()}
                                                Ref={input => (this.EmailInput = input)}
                                                Placeholder='Email'
                                                ErrorMessage={Email_error}
                                            />
                                        </View>


                                        <View style={Styles().LoginInputView}>
                                            <GlobalInput
                                                RightIcon={
                                                    <Icon
                                                        underlayColor='transparent'
                                                        type={!securePass ? "simple-line-icon" : 'material-community'}
                                                        name={!securePass ? "eye" : 'eye-off-outline'}
                                                        color="grey"
                                                        size={height / 35}
                                                        onPress={() => this.setState({ securePass: !securePass })}
                                                    />}
                                                SecureTextEntry={securePass}
                                                AutoCapitalize="none"
                                                InputStyle={Styles().input_style, Styles().loginInputstyle}
                                                OnChangeText={value => this.setState({ Password: value, Password_error: '' })}
                                                Value={Password}
                                                KeyboardType='default'
                                                Label={'Password'}
                                                ReturnKeyType='done'
                                                Ref={input => (this.PasswordInput = input)}
                                                Placeholder='Password'
                                                ErrorMessage={Password_error}
                                            />
                                        </View>

                                        <View style={Styles().ConfirmpassView}>
                                            <GlobalInput
                                                AutoCapitalize="none"
                                                InputStyle={Styles().input_style, Styles().loginInputstyle}
                                                OnChangeText={value => this.setState({ Confirmpassword: value, Confirmpassword_error: '' })}
                                                Value={Confirmpassword}
                                                SecureTextEntry={true}
                                                KeyboardType='default'
                                                Label={'Re-enter Password'}
                                                ReturnKeyType='done'
                                                Ref={input => (this.ConfirmPasswordInput = input)}
                                                Placeholder='Re-enter Password'
                                                ErrorMessage={Confirmpassword_error}
                                            />
                                        </View>



                                    </View>


                                    <View style={{ alignItems: 'center' }}>
                                        <GlobalButton
                                            ButtonTitle="REGISTER"
                                            ButtonType='solid'
                                            ButtonWidth={width - (Config.margin * 2)}
                                            Bottoncolor={Colors.Orange5}
                                            onButtonPress={() => this.SignupFields()}
                                        />
                                    </View>



                                </View>
                                {!loading ?
                                    <View />
                                    : <Loader />
                                }



                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <Snackbar
                        visible={visible}
                        onDismiss={this._onDismissSnackBar}
                        style={{ backgroundColor: Colors.overlay }}
                        action={{
                            label: 'Dismiss',
                            onPress: () => {
                                this.FocusToFields();
                                this._onDismissSnackBar
                            },
                        }}
                    >
                        {ErrorMessage}

                    </Snackbar>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default Signup


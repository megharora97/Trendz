import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { Text, } from 'react-native-elements'

import Header from '../../Component/Header';
import styles from '../../Component/Styles';

const { height, width } = Dimensions.get('window');

export default class Orders extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    render() {
        return (
            <SafeAreaView style={styles().container}>

                <Header
                    navigation={this.props.navigation}
                    onMenuPress={() => this.props.navigation.toggleDrawer()}
                />


                <View>
                    <Text>Orders</Text>
                </View>








            </SafeAreaView >

        );
    }
}
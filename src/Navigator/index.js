import React from 'react';
import { View, Dimensions, Platform, StatusBar, Alert, BackHandler, ToastAndroid, Animated, LogBox } from 'react-native';
import { Text, Button, Image, Badge } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Login/Home';
import Config from '../Utils/Config';
import Fonts from '../Utils/CustomFonts';
import { TabIcons } from '../Component/ImageJson';
import Signup from '../screens/Login/Signup';
import Profile from '../screens/Login/Profile';
import Wishlist from '../screens/Login/Wishlist';
import Orders from '../screens/Login/Orders';
import More from '../screens/Login/More';
import SideMenu from '../SideMenu';
import Colors from '../Utils/Colorss';

const { height, width } = Dimensions.get('window')
StatusBar.setBarStyle('light-content');
if (Platform.OS != 'ios') { StatusBar.setBackgroundColor('black'); }
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed,', 'VirtualizedLists should never be nested', "Require cycle:", "YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.", "Animated: `useNativeDriver` was not specified"])

let isVisible = true
let tabHeight = height / 14
let val = 'relative';
const showDrawer = false;


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Login
function LoginStackScreen() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}
        headerMode="none"
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Signup" component={Signup}
        headerMode="none"
        options={{
          headerShown: false,
        }} />

    </Stack.Navigator>
  )
};

//Home
function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}
        headerMode="none"
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  )
};


//Tabs
function Tabs({ navigation, route }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarVisible: isVisible,
      })}
      initialRouteName={HomeStackScreen}
      tabBarOptions={{
        activeTintColor: Colors.Pinkk,
        inactiveTintColor: Colors.Black,
        style: {
          height: tabHeight,
          position: val,
        },
        labelStyle: {
          marginBottom: Config.margin / 1.5,
          fontSize: Config.TitleSemiSmallFontSize,
          fontFamily: Fonts.GeometricRegular,
        },
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon'
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        activeTintColor: Colors.Red,
        unmountOnBlur: true,
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Image source={TabIcons.ProfileIcon} defaultSource={TabIcons.ProfileIcon} style={{ height: height / 35, width: height / 35 }}
            resizeMode='contain'
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMethod='resize' tintColor={color} />
        ),
      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        activeTintColor: Colors.Red,
        unmountOnBlur: true,
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Image source={TabIcons.ProfileIcon} defaultSource={TabIcons.ProfileIcon} style={{ height: height / 35, width: height / 35 }}
            resizeMode='contain'
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMethod='resize' tintColor={color} />
        ),
      }} />

      <Tab.Screen name="Orders" component={Orders} options={{
        activeTintColor: Colors.Red,
        unmountOnBlur: true,
        tabBarLabel: "My Order",
        tabBarIcon: ({ color, size }) => (
          <Image source={TabIcons.Orders} defaultSource={TabIcons.Orders} style={{ height: height / 35, width: height / 35 }}
            resizeMode='contain'
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMethod='resize' tintColor={color} />
        ),
      }} />


      <Tab.Screen name="Wishlist" component={Wishlist} options={{
        activeTintColor: Colors.Red,
        unmountOnBlur: true,
        tabBarLabel: "Wishlist",
        tabBarIcon: ({ color, size }) => (
          <Image source={TabIcons.WishlistIcon} defaultSource={TabIcons.WishlistIcon} style={{ height: height / 35, width: height / 35 }}
            resizeMode='contain'
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMethod='resize' tintColor={color} />
        ),
      }} />


      <Tab.Screen name="More" component={More} options={{
        activeTintColor: Colors.Red,
        unmountOnBlur: true,
        tabBarLabel: "More",
        tabBarIcon: ({ color, size }) => (
          <Image source={TabIcons.MoreIcon} defaultSource={TabIcons.MoreIcon} style={{ height: height / 35, width: height / 35 }}
            resizeMode='contain'
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMethod='resize' tintColor={color} />
        ),
      }} />

    </Tab.Navigator>
  );
}


//Drawer
function DrawerApp() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: !showDrawer ? null : width / 1.4,
      }}
      headerLayoutPreset='center'
      drawerContent={props => <SideMenu {...props} />}>

      <Drawer.Screen name="Home" component={Tabs}
        headerMode="none"
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}

//Main 
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen}
          headerMode="none"
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Drawer" component={DrawerApp}
          headerMode="none"
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

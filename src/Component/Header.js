import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Icon, Text, Image, Badge } from "react-native-elements";
import Colors from "../../src/Utils/Colorss";
import styles from '../Component/Styles';
import Fonts from '../../src/Utils/CustomFonts';
import { HeaderIcons } from '../../src/Component/ImageJson';
import Styles from '../Component/Styles';
import Config from '../Utils/Config';

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width;
const ipad = aspectRatio < 1.6


function IconWithBadge({ name, type, badgeCount, color, size }) {
  return (

    <View style={{ justifyContent: 'center' }}>
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            left: height / 90,
            bottom: height / 40,
            backgroundColor: Colors.Pinkk,
            borderRadius: height / 50,
            minWidth: height / 50,
            height: height / 50,
            paddingHorizontal: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }} >
          <Text style={{ color: 'white', fontSize: height / 65 }}>
            {badgeCount > 99 ? '99+' : badgeCount}
          </Text>
        </View>
      )}
      <Icon name={name} type={type} size={size} style={{ alignItems: 'flex-start' }} color={color} />
    </View>
  );
}

function CartIconWithBadge(props) {
  return <IconWithBadge {...props} badgeCount={3} />;
}


export default Header = (props) => {

  return (

    <View style={Styles().HeaderMainView}>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={props.onMenuPress}
          style={{ justifyContent: 'center' }}>
          <Image source={HeaderIcons.menuicon} style={{ height: height / 28, width: height / 28 }}
            placeholderStyle={{ backgroundColor: Colors.trans }}
            resizeMode='center'
            resizeMethod='resize' />
        </TouchableOpacity>
      </View>


      <View style={{ width: props.Type == 'BackType' && props.righttitle ? (width - (height / 10) - (Config.margin * 8.5)) : props.Type == 'BackType' ? (width - (height / 28) - (Config.margin * 3)) : (width - (height / 28) - (width / 7.5) - (Config.margin * 5)), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: height / 33 }}>
        <Image source={HeaderIcons.logo} placeholderStyle={{ backgroundColor: Colors.trans }} style={{ height: height / 14, width: height / 5.1, }} resizeMode='contain' resizeMethod='resize' />
      </View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ justifyContent: 'center' }}
          onPress={() => alert('Product Added to Cart')} >

          <CartIconWithBadge
            name='cart'
            type='material-community'
            color={Colors.Black}
            containerStyle={{
              justifyContent: 'center',
            }}
            size={height / 33}
            underlayColor='transparent'
          />
        </TouchableOpacity>
      </View>




    </View>
  )
}



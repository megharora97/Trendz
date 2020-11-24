import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../Utils/Colorss';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';


//--------------------- TabIcons -----------------
export const TabIcons = {
    HomeIcon: require('../../assets/icons/home.png'),
    MoreIcon: require('../../assets/icons/bundle.png'),
    Orders: require('../../assets/icons/custom.png'),
    WishlistIcon: require('../../assets/icons/wishlist.png'),
    ProfileIcon: require('../../assets/icons/profile.png'),
}

// ============== Header ====================
export const HeaderIcons = {
    logo: require('../../assets/headerlogo.png'),
    menuicon: require('../../assets/menu.png'),
}

// ------------- Home ----------------- 
export const HomeJson = {

    Category: [
        { img: require('../../assets/watch.png'), title: 'Watch' },
        { img: require('../../assets/mobile.png'), title: 'Mobile' },
        { img: require('../../assets/dress.png'), title: 'Dresses' },
        { img: require('../../assets/bags.png'), title: 'Bags' },
        { img: require('../../assets/jeans.png'), title: 'Jeans' },
        { img: require('../../assets/laptop.png'), title: 'Laptop' },
        { img: require('../../assets/clock.png'), title: 'Clock' },
        { img: require('../../assets/trouser.png'), title: 'Trousers' },
        { img: require('../../assets/mouse.png'), title: 'Mouse' },
    ],

    Images: [
        { img: require('../../assets/Adv.png'), }
    ],

    Offers: [
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
        { img: require('../../assets/offer3.png') },
       
    ],
    Brands: [
        { img: require('../../assets/myntra.png') },
        { img: require('../../assets/puma.png') },
        { img: require('../../assets/flipkart.png') },
        { img: require('../../assets/apple.png') },
        { img: require('../../assets/amzon.png') },
    ],
    Carousel: [
        { img: require('../../assets/bag11.png') },
        { img: require('../../assets/bags1.png') },
        { img: require('../../assets/bags2.png') },
        { img: require('../../assets/bags3.png') },
    ],

    Dresses: [
        { img: require('../../assets/boy1.png') },
        { img: require('../../assets/boy2.png') },
        { img: require('../../assets/boy3.png') },

    ],

    Bag: [
        { img: require('../../assets/bags2.png') },
        { img: require('../../assets/bags12.png') },
        { img: require('../../assets/bags13.png') },
        { img: require('../../assets/bags1.png') },
        { img: require('../../assets/bags3.png') },
    ],


    Dresses1: [
        { img: require('../../assets/girl.png') },
        { img: require('../../assets/girl2.png') },
        { img: require('../../assets/girl3.png') },
        { img: require('../../assets/girl4.png') },
        { img: require('../../assets/girl5.png') },
    ],
    Category1: [
        { img: require('../../assets/watch1.png'), },
        { img: require('../../assets/airpod.png'), },
    ],

    Blog: [
        { img: require('../../assets/blog1.png'), },
        { img: require('../../assets/blog2.png'), },
    ],

    Ethnic: [
        { img: require('../../assets/blog11.png'), },
        { img: require('../../assets/blog12.png'), },
        { img: require('../../assets/blog13.png'), },
    ],

}

//------------ Side Menu --------------
export const SideMenuJson = {

    Items: [
        {
            iconimage: require('../../assets/icons/home.png'),
            title: `HOME`,
            path: 'Home'
        },
        {
            iconimage: require('../../assets/icons/profile.png'),
            title: `PROFILE`,
            path: 'Profile'
        },
        {
            iconimage: require('../../assets/icons/custom.png'),
            title: `ORDERS`,
            path: 'Orders'
        },
        {
            iconimage: require('../../assets/icons/wishlist.png'),
            title: `WISHLIST`,
            path: 'Wishlist'
        },
        {
            iconimage: require('../../assets/icons/bundle.png'),
            title: `MORE`,
            path: 'More'
        },

    ],



}



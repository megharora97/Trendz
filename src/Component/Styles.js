import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Colors from '../Utils/Colorss';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create(props => ({
    container: { flex: 1, backgroundColor: Colors.White, alignItems: 'center' },
    container1: { flex: 1, backgroundColor: Colors.Grey1, alignItems: 'center' },
    LoginInputView: { flexDirection: 'row', marginHorizontal: Config.margin, marginBottom: Config.margin },
    input_style: { height: (height / 15) - (Config.TitleSmallFontSize) - (Config.margin), paddingBottom: -10, paddingTop: -10, color: Colors.Black, fontFamily: Fonts.GeometricRegular, fontSize: Config.TitleSemiBigFontSize, minHeight: 0 },
    loginInputstyle: { height: '100%', paddingBottom: -10, paddingTop: -10 },
    LoginInputView: { flexDirection: 'row', marginHorizontal: Config.margin, marginBottom: Config.margin },
    ProductCategoryPickerText: { fontWeight: 'bold', color: Colors.Black, },
    measureWindow2: { overflow: 'hidden', height: height / 20, width: '90%', },
    PickerChildContainer: { width: '100%', height: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', },
    SolidButtonText: { fontFamily: Fonts.product },
    ButtonStyle: { borderWidth: 1, borderRadius: Config.borderradius, marginBottom: Config.margin },
    LabelStyle: { color: Colors.Pinkk },
    DefaultErrorStyle: { height: 0, margin: 0 },
    IPIconDefaultContainerStyle: { height: 'auto', marginVertical: 0, paddingHorizontal: Config.margin },

    // -------------------Loader -------------------
    loadingAvatar: { paddingBottom: height / 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', height: height, width: '100%', },
    ImageMy: { width: height / 15, height: height / 15, backgroundColor: Colors.trans, },
    Loader: { backgroundColor: Colors.trans, justifyContent: 'center', alignItems: 'center', width: height / 8, height: height / 8, borderRadius: height / 10, },

    // ============================= Header ================
    HeaderMainView: { height: height / 14, padding: Config.margin, width: '100%', backgroundColor: Colors.White, flexDirection: 'row', justifyContent: 'space-between', elevation: 3 },
    SearchInputMainView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: Config.margin, borderWidth: 0.5, borderRadius: Config.borderradius, width: width - (Config.margin * 2), alignSelf: 'center', marginTop: Config.margin },

    // --------------------- HOME SCREEN -------------------------
    container: { flex: 1, backgroundColor: Colors.White, alignItems: 'center' },
    text: { justifyContent: 'center', marginHorizontal: Config.margin },
    title: { fontSize: Config.TitleSmallFontSize, fontWeight: 'bold' },
    PaperSizeTitle: { fontWeight: 'bold', fontSize: Config.TitleSemiSmallFontSize, textAlign: 'center' },

    elevate: { marginVertical: Config.margin, alignItems: 'center', width: (height - (Config.borderradius)) / 2.6, height: (height - (Config.borderradius)) / 2.10, justifyContent: 'center', borderRadius: Config.borderradius, overflow: 'hidden' },
    CorouselDot: { borderRadius: 10, width: height / 100, height: height / 100, marginHorizontal: -10, backgroundColor: Colors.Pinkk },

    elev: { marginLeft: !props ? null : props.ind == 0 ? Config.margin : 0 },
    PaperSizeTouchable: { justifyContent: 'space-between', alignItems: 'center', margin: Config.margin },

    renderimage: { width: (height - (Config.borderradius)) / 2.65, height: (height - (Config.borderradius)) / 2.13, borderRadius: Config.borderradius, overflow: 'hidden', alignItems: 'center' },
    PaperSizeView: { overflow: 'hidden', borderWidth: 1, borderColor: Colors.Grey94, borderRadius: width / 2, marginBottom: Config.margin / 2, width: height / 17, height: height / 17, alignItems: 'center', justifyContent: 'center' },

    elevate1: { borderRadius: Config.borderradius, width: (width - (Config.margin)) / 1.45, alignItems: 'center', height: (width - (Config.borderradius)) / 1.3, shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.4, shadowRadius: 3 },
    renderimage2: { width: (width - (Config.margin)) / 1.47, height: (width - (Config.borderradius)) / 1.31, borderRadius: Config.borderradius, },
    renderItem1: { marginTop: !props ? null : props.ind == 0 ? 0 : Config.margin },
    renderItem2img: { padding: Config.margin, paddingLeft: !props ? null : props.ind == 0 ? Config.margin : 0 },
    renderwarning: { marginTop: !props ? null : props.ind == 0 ? 0 : Config.margin },
    TextView: { marginTop: Config.margin },
    PaperSizeTouchable1: { marginLeft: !props ? null : props.ind == 0 ? Config.margin : 0 },
    PaperSizeImage: { height: height / 17, width: height / 17, },

    //====================== Tabs ==========================
    Touchablestyle: { width: width / 5, height: '100%', alignItems: 'center', justifyContent: 'space-between' },

    // ============= Side Menu ===================
    SideMenuView: { width: '100%', backgroundColor: Colors.White, paddingVertical: Config.margin / 2, borderBottomWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, paddingHorizontal: Config.margin },
    SideMenuTextView: { justifyContent: 'center', marginLeft: (width / 12) + (Config.margin * 2), width: width - (Config.margin * 25), },
    SideMenuText: { fontSize: Config.TitleMediumFontSize, textDecorationLine: 'underline', fontFamily: Fonts.GeometricRegular },
    SideMenuItem: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, padding: Config.margin },
    ItemTitle: { fontSize: Config.TitleSemiBigFontSize, fontFamily: Fonts.GeometricRegular },
    ItemView: { justifyContent: 'center', marginLeft: Config.margin, width: width - (Config.margin * 22), },
    InactiveCorouselDot: { borderRadius: 10, width: height / 150, height: height / 150, backgroundColor: Colors.Grey },
}));
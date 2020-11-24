import React from 'react';
import { Dimensions, FlatList, ScrollView, SafeAreaView, View } from 'react-native';
import { Image as I, Text, Icon } from 'react-native-elements'
import Colors from '../../Utils/Colorss';
import Config from '../../Utils/Config'
import Header from '../../Component/Header';
import styles from '../../Component/Styles';
import { HomeJson } from '../../Component/ImageJson';
import TextJson from '../../Component/TextJson';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../../Component/Loader';
import Image from 'react-native-scalable-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import GlobalInput from '../../Component/GlobalInput';

const { height, width } = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 0;

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            SearchValue: ''

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1);
    }

    renderItem = ({ item, index }) => {
        return (
            item.img ?
                < View key={index} style={[styles().elevate, styles({ ind: index }).elev,]} >
                    <TouchableNativeFeedback onPress={() => alert('hlo')} style={styles().renderimage}>
                        <I
                            source={item.img}
                            style={styles().renderimage}
                            placeholderStyle={{ backgroundColor: Colors.trans }}
                            resizeMode='contain'
                            resizeMethod='resize'
                        />
                    </TouchableNativeFeedback>
                </View>
                : null
        )
    }


    renderItem1 = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem1} >
                <TouchableNativeFeedback onPress={() => { alert('udhjdf') }} >
                    {item.img ? <Image
                        source={item.img}
                        width={width}
                        resizeMethod='resize'
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                    /> : null}
                </TouchableNativeFeedback>
            </View>
        )
    }

    renderItem2 = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem2img} >
                {item.img ? <TouchableNativeFeedback style={styles().elevate1}>
                    <I
                        source={item.img}
                        style={styles().renderimage2}
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                        resizeMode='contain'
                        resizeMethod='resize'
                    />
                </TouchableNativeFeedback> : null}
            </View>
        )
    }


    renderProductSec3 = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem2img} >
                {item.img ? <TouchableNativeFeedback style={{ alignItems: 'center', width: (height - (Config.borderradius)) / 2.2, height: (height - (Config.borderradius)) / 2.6, }}>
                    <I
                        source={item.img}
                        style={{ width: (height - (Config.borderradius)) / 2.2, height: (height - (Config.borderradius)) / 2.6, borderRadius: Config.borderradius, }}
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                        resizeMode='contain'
                        resizeMethod='resize'
                    />
                </TouchableNativeFeedback> : null}
            </View>
        )
    }


    renderbrand = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem2img} >
                {item.img ? <TouchableNativeFeedback style={{ alignItems: 'center', justifyContent: 'center', width: (width - (Config.margin)) / 5, overflow: 'hidden', height: (width - (Config.borderradius)) / 5, borderWidth: 0.5, borderColor: Colors.Grey94, borderRadius: (width - (Config.borderradius)) / 2.5, }}>
                    <I
                        source={item.img}
                        style={{ width: (width - (Config.margin)) / 5, height: (width - (Config.borderradius)) / 5, borderRadius: (width - (Config.borderradius)) / 2.5, overflow: 'hidden' }}
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                        resizeMode='center'
                        resizeMethod='resize'
                    />
                </TouchableNativeFeedback> : null}
            </View>
        )
    }


    renderBlog = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem2img} >
                {item.img ? <TouchableNativeFeedback style={{ alignItems: 'center', width: (height - (Config.borderradius)) / 2.6, height: (height - (Config.borderradius)) / 2.2, }}>
                    <I
                        source={item.img}
                        style={{ width: (height - (Config.borderradius)) / 2.6, height: (height - (Config.borderradius)) / 2.2, borderRadius: Config.borderradius, }}
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                        resizeMode='contain'
                        resizeMethod='resize'
                    />
                </TouchableNativeFeedback> : null}
            </View>



        )
    }

    renderProductSec = ({ item, index }) => {
        return (
            < View key={index} style={styles({ ind: index }).renderItem1} >
                <TouchableNativeFeedback onPress={() => { alert('udhjdf') }} >
                    {item.img ? <Image
                        source={item.img}
                        width={width}
                        resizeMethod='resize'
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                    /> : null}
                </TouchableNativeFeedback>
            </View>


        )
    }

    _renderSlideItem = ({ item, index }) => {
        console.log('item.img', item.img);
        return (
            <SafeAreaView>
                <TouchableOpacity   >
                    <Image
                        source={item.img}
                        width={width}
                        height={height - (Config.margin) / 4}
                        resizeMethod='resize'
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    //Category
    renderCat = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles().PaperSizeTouchable, styles({ ind: index }).PaperSizeTouchable1]}>
                <View style={styles().PaperSizeView}>
                    <Image
                        source={item.img}
                        style={styles().PaperSizeImage}
                        height={height / 15}
                        resizeMethod='resize'
                        placeholderStyle={{ backgroundColor: Colors.trans }}
                    />
                </View>

                <View>
                    <Text style={styles().PaperSizeTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    render() {
        const { loading, slider1ActiveSlide, SearchValue } = this.state
        return (
            <SafeAreaView style={styles().container}>

                <Header
                    navigation={this.props.navigation}
                    onMenuPress={() => this.props.navigation.toggleDrawer()}
                />


                {loading ? <Loader />
                    : <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                        <View style={[styles().SearchInputMainView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <GlobalInput
                                Value={SearchValue}
                                Placeholder="Search"
                                InputStyle={{ height: '100%' }}
                                LeftIcon={< Icon
                                    name='search'
                                    type='evilicons'
                                    color={Colors.Grey70}
                                    size={height / 33}
                                    underlayColor='transparent'
                                />}
                                Ref={input => { this.textInput = input }}
                                OnChangeText={(text) => this.setState({ SearchValue: text })}
                                ReturnKeyType='search'
                                // OnSubmitEditing={console.log('wow!!')}
                                RightIcon={< Icon
                                    name='cross'
                                    type='entypo'
                                    color={Colors.Grey70}
                                    size={height / 30}
                                    overlayColor='transparent'
                                    onPress={this.setState({ SearchValue: '', })}
                                />}
                            />
                        </View>


                        {/* Category */}
                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Category.toUpperCase()}</Text>
                            </View>

                            <View>
                                {HomeJson.Category ?
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                        horizontal={true}
                                        data={HomeJson.Category}
                                        initialNumToRender={4}
                                        extraData={this.state}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Category ? this.renderCat : null}
                                    />
                                    :
                                    null
                                }
                            </View>

                            <View style={styles().images}>
                                {HomeJson.Category1 && HomeJson.Category1.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Category1}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Category1 ? this.renderItem2 : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                    :
                                    null
                                }
                            </View>
                        </View>

                        {/* Offers */}
                        <View style={{}}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Offers.toUpperCase()}</Text>
                            </View>


                            <View style={{ marginBottom: -10 }}>
                                {HomeJson.Offers && HomeJson.Offers.length > 0 ?
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                        horizontal={true}
                                        data={HomeJson.Offers}
                                        initialNumToRender={4}
                                        extraData={this.state}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Offers ? this.renderItem2 : null}

                                    />
                                    :
                                    null
                                }
                            </View>
                        </View>


                        {/* Prod Section 1 */}
                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Bag.toUpperCase()}</Text>
                            </View>

                            <View style={styles().images}>
                                {HomeJson.Bag && HomeJson.Bag.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Bag}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Bag ? this.renderItem2 : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}

                                    />
                                    :
                                    null
                                }
                            </View>


                            <View>
                                <Carousel
                                    autoplay={true}
                                    loop={true}
                                    ref={(c) => { this._carousel = c; }}
                                    data={HomeJson.Carousel}
                                    renderItem={this._renderSlideItem}
                                    sliderWidth={width}
                                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                                    itemWidth={width}
                                />

                                <Pagination
                                    dotsLength={HomeJson.Carousel.length}
                                    activeDotIndex={slider1ActiveSlide}
                                    containerStyle={{ paddingTop: Config.margin / 2, paddingBottom: 0 }}
                                    inactiveDotOpacity={0.2}
                                    inactiveDotScale={1}
                                    dotStyle={styles().CorouselDot}
                                    inactiveDotStyle={styles().InactiveCorouselDot}
                                    carouselRef={this._carousel}
                                    tappableDots={!!this._carousel}
                                />

                            </View>
                        </View>

                        {/* Prod Section 2 */}
                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Dresses.toUpperCase()}</Text>
                            </View>

                            <View style={styles().images}>
                                {HomeJson.Dresses1 && HomeJson.Dresses1.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Dresses1}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Dresses1 ? this.renderItem2 : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}

                                    />
                                    :
                                    null
                                }
                            </View>


                            <View>
                                <Carousel
                                    autoplay={true}
                                    loop={true}
                                    ref={(c) => { this._carousel = c; }}
                                    data={HomeJson.Dresses1}
                                    renderItem={this._renderSlideItem}
                                    sliderWidth={width}
                                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                                    itemWidth={width}
                                />

                                <Pagination
                                    dotsLength={HomeJson.Dresses1.length}
                                    activeDotIndex={slider1ActiveSlide}
                                    containerStyle={{ paddingTop: Config.margin / 2, paddingBottom: 0 }}
                                    inactiveDotOpacity={0.2}
                                    inactiveDotScale={1}
                                    dotStyle={styles().CorouselDot}
                                    inactiveDotStyle={styles().InactiveCorouselDot}
                                    carouselRef={this._carousel}
                                    tappableDots={!!this._carousel}
                                />

                            </View>
                        </View>




                        {/* Prod Section 3 */}

                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.ProductSection.toUpperCase()}</Text>
                            </View>


                            <View style={styles().images}>

                                {HomeJson.Ethnic && HomeJson.Ethnic.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Ethnic}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Ethnic ? this.renderProductSec3 : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                    :
                                    null
                                }

                            </View>
                        </View>


                        {/* Brands */}
                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Brands.toUpperCase()}</Text>
                            </View>


                            <View style={styles().images}>

                                {HomeJson.Brands && HomeJson.Brands.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Brands}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Brands ? this.renderbrand : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                    :
                                    null
                                }

                            </View>
                        </View>

                        {/* Blog */}

                        <View style={{ marginTop: Config.margin }}>
                            <View style={styles().text}>
                                <Text style={styles().title}>{TextJson.Blog.toUpperCase()}</Text>
                            </View>


                            <View style={styles().images}>

                                {HomeJson.Blog && HomeJson.Blog.length > 0 ?
                                    <FlatList
                                        horizontal={true}
                                        data={HomeJson.Blog}
                                        extraData={this.state}
                                        scrollEnabled={true}
                                        initialNumToRender={4}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={HomeJson.Blog ? this.renderBlog : null}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                    :
                                    <Text>{TextJson.NoDataFound.toUpperCase()}</Text>
                                }

                            </View>
                        </View>


                        {/* Adv */}
                        <View>
                            {HomeJson.Images && HomeJson.Images.length > 0 ?
                                <FlatList
                                    horizontal={false}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={HomeJson.Images}
                                    extraData={this.state}
                                    initialNumToRender={4}
                                    keyExtractor={(item, index) => String(index)}
                                    renderItem={HomeJson.Images ? this.renderItem1 : null}
                                />

                                : <Text>{TextJson.NoDataFound.toUpperCase()}</Text>
                            }


                        </View>


                    </ScrollView>}
            </SafeAreaView >

        );
    }
}
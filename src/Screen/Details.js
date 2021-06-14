import React, {Component} from "react";
import {SafeAreaView, Text, StyleSheet, View, Image, ScrollView, TouchableOpacity} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import StarRating from "react-native-star-rating";
import {FontAwesome5,SimpleLineIcons,MaterialCommunityIcons} from '@expo/vector-icons';
export default class Details extends Component {


    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                require('../../assets/car-pro-1.png'),
                require('../../assets/car-pro-2.png'), // Network image
                require('../../assets/car-pro-3.png'),          // Local image
            ],
            starCount: 2.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {

        return (
            <SafeAreaView style={styles.body}>

                <View style={styles.container}>
                    <ScrollView>
                    <View style={styles.content}>
                            <SliderBox
                                images={this.state.images}
                                dotColor="#1960d8"
                                inactiveDotColor="#90A4AE"
                                // autoplay
                                // circleLoop
                                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                            />

                            <View style={styles.details}>
                                <View>
                                    <Text style={styles.name}>Mercedes-AMG GLE 63</Text>
                                    <View style={styles.separate}>
                                        <Text style={styles.price}>Price : 120 JD/day</Text>
                                        <View style={{flexDirection:'row-reverse', justifyContent:'space-between'}}>
                                            <Text style={styles.category}>Category : A</Text>
                                            <Text style={{color:'#0825ee73'}}>2020</Text>
                                        </View>

                                    </View>
                                    <View style={styles.separate}>
                                        <Text style={styles.title}>Description</Text>
                                        <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Aenean commodo ligula eget dolor. Aenean massa.</Text>
                                        <View style={{marginTop:10,flexDirection:'row-reverse',justifyContent:'center'}}>
                                            <View style={{flexDirection:'row-reverse',marginHorizontal:10}}>
                                                <SimpleLineIcons name='user-following' size={15} color="#d0d9eb"/>
                                                <Text style={{marginHorizontal:5,color:'#555'}}>4 users</Text>
                                            </View>
                                            <View style={{flexDirection:'row-reverse',marginHorizontal:10}}>
                                                <FontAwesome5 name='gas-pump' size={15} color="#d0d9eb"/>
                                                <Text style={{marginHorizontal:5,color:'#555'}}>40 MPG</Text>
                                            </View>
                                            <View style={{flexDirection:'row-reverse',marginHorizontal:10}}>
                                                <MaterialCommunityIcons name='car-door' size={15} color="#d0d9eb"/>
                                                <Text style={{marginHorizontal:5,color:'#555'}}>4</Text>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.separate}>
                                    <Text style={styles.title}>Color</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <TouchableOpacity style={[styles.btnColor, {backgroundColor: 'red'}]}/>
                                    <TouchableOpacity style={[styles.btnColor, {backgroundColor: 'blue'}]}/>
                                    <TouchableOpacity style={[styles.btnColor, {backgroundColor: 'orange'}]}/>
                                    <TouchableOpacity style={[styles.btnColor, {backgroundColor: 'gray'}]}/>
                                    <TouchableOpacity style={[styles.btnColor, {backgroundColor: 'black'}]}/>
                                </View>
                                </View>
                                <View style={{flexDirection:'row-reverse', justifyContent:'space-between'}}>
                                <View style={styles.star}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                        fullStarColor={'orange'}
                                        starSize={13}
                                    />
                                </View>
                                <TouchableOpacity style={styles.btn}><Text style={{color:'#fff'}}>Book Now</Text></TouchableOpacity>
                                </View>
                            </View>

                    </View>
                </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1960d8',
        width: '100%',
        height: '100%',
    },
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#eef5ff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        marginTop: 20,
    },
    content: {
        width: '100%',
        marginBottom:30
    },
    details: {
        paddingHorizontal: 15
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 15,

    },
    separate: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(231,231,231)',
        paddingBottom: 15,
        marginTop: 10

    },
    price: {
        color: 'red',
        fontWeight: '700',
        lineHeight: 30
    },
    category: {
        color: '#888'
    },
    title : {
        color:'#ccc',
        textTransform:'uppercase',
        marginBottom:5
    },
    star: {
        width: '30%',
        alignSelf: "flex-end",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    btnColor: {
        width: 20,
        height: 20,
        borderRadius: 100,
        marginHorizontal: 5
    },
    btn : {
        paddingHorizontal:20,
        paddingVertical: 10,
        backgroundColor: '#1960d8',
        borderRadius: 10,
        marginTop:10
    }
})
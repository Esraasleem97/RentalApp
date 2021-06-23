import React, {useState} from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import {FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import {GlobalStyle} from '../Style/GlobalStyle'


export default function Home({navigation}) {

    const [starCount, setStarCount] = useState(2.5);

    const onStarRatingPress = (rating) => {
        setStarCount(rating);
    }

    const DATATYPE = [
        {id: 1, icon: 'car-cog', name: 'cog'},
        {id: 2, icon: 'car-estate', name: 'estate'},
        {id: 3, icon: 'car-sports', name: 'sport'},
        {id: 4, icon: 'car-pickup', name: 'pickup'},
        {id: 5, icon: 'car-side', name: 'side'},

    ];

    const DATABASE = [
        {
            id: 1,
            img: require('../../assets/car-pro-1.png'),
            name: 'Car 1',
            category: 'A',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 2,
            img: require('../../assets/car-pro-2.png'),
            name: 'Car 2',
            category: 'B',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 3,
            img: require('../../assets/car-pro-3.png'),
            name: 'Car 3',
            category: 'C',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 4,
            img: require('../../assets/car-pro-4.png'),
            name: 'Car 4',
            category: 'D',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 5,
            img: require('../../assets/car-pro-1.png'),
            name: 'Car 1',
            category: 'A',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 6,
            img: require('../../assets/car-pro-2.png'),
            name: 'Car 2',
            category: 'B',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 7,
            img: require('../../assets/car-pro-3.png'),
            name: 'Car 3',
            category: 'C',
            price: '120 JD/day',
            year: '2021'
        },
        {
            id: 8,
            img: require('../../assets/car-pro-4.png'),
            name: 'Car 4',
            category: 'D',
            price: '120 JD/day',
            year: '2021'
        },
    ]
    return (

        <View style={GlobalStyle.body}>
            <View>
                {/*<Text style={{color: '#fff', fontSize: 25}}>Car Rental</Text>*/}
                {/*<Image style={styles.img_profile}*/}
                {/*       source={require('../../assets/avatar-2.png')}*/}
                {/*/>*/}
            </View>

            <SafeAreaView style={GlobalStyle.container}>

                <View style={GlobalStyle.content}>
                    <ScrollView>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='Search ...'
                            />
                            <Ionicons name="md-funnel" size={15} color="#6e9ded"/>
                        </View>
                        <ScrollView horizontal={true}>
                            {DATATYPE.map((item) => {
                                return (
                                    <TouchableOpacity style={styles.card} key={Math.random()}>
                                        <MaterialCommunityIcons name={item.icon} size={30} color="#000"/>
                                        <Text style={styles.card_text}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>
                        {/*<Text style={styles.title}>Booking Car Now </Text>*/}
                        <View style={styles.tabs}>
                            <TouchableOpacity><Text style={[styles.tab, styles.active]}>All
                                Cars</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.tab}>Latest Cars</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.tab}>Recently Arrived</Text></TouchableOpacity>


                        </View>
                        <SafeAreaView style={styles.section_pro}>
                            {DATABASE.map((item) => {
                                return (
                                    <TouchableOpacity
                                        key={Math.random()}
                                        style={styles.card_pro}>
                                        <View style={styles.card_content}>
                                            <View style={styles.card_pro_img}>
                                                <Image
                                                    style={{width: '100%', height: 65}}
                                                    source={item.img}/>
                                            </View>
                                            <View
                                                style={{
                                                    justifyContent: 'flex-start',
                                                    width: "100%",
                                                    paddingHorizontal: 10
                                                }}>
                                                <Text style={{
                                                    color: '#1960d8',
                                                    fontWeight: 'bold'
                                                }}>{item.name}</Text>
                                                <Text
                                                    style={{fontSize: 10, color: '#999'}}>Category
                                                    : {item.category}</Text>

                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                width: "100%",
                                                paddingHorizontal: 10,
                                                paddingVertical: 5
                                            }}>

                                                <Text style={{color: '#888', fontSize: 12}}>{item.price}</Text>
                                                <Text style={{color: '#888', fontSize: 12}}>{item.year}</Text>
                                            </View>
                                            <View style={styles.star}>
                                                <StarRating
                                                    disabled={false}
                                                    maxStars={5}
                                                    rating={starCount}
                                                    selectedStar={(rating) => onStarRatingPress(rating)}
                                                    fullStarColor={'orange'}
                                                    starSize={13}
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.btn}
                                                              onPress={() => navigation.navigate('Details')}>

                                                <Text
                                                    style={{color: '#1960d8', fontSize: 12}}
                                                >Booking Now</Text></TouchableOpacity>

                                        </View>
                                    </TouchableOpacity>

                                )
                            })}

                        </SafeAreaView>

                    </ScrollView>
                    <TouchableOpacity style={styles.bars} onPress={() => navigation.openDrawer()}>
                        <FontAwesome5 name='bars' size={25} color='#fff'/>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        </View>

    );

}
const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 9,
        marginVertical: 15,
        marginHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .25,
        shadowRadius: 20,
        elevation: 3,

    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 5


    },
    card_text: {
        fontSize: 10,

    },
    title: {
        marginVertical: 10,
        marginHorizontal: 25,
        fontWeight: 'bold',
        color: '#ccc'
    },
    section_pro: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30


    },
    card_pro: {
        alignItems: 'center',
        textAlign: 'center',
        width: '43%',
        height: 200,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 5,
    },
    card_content: {
        width: '100%',
        alignItems: 'center'
    },
    card_pro_img: {
        width: 110,
        alignItems: 'center',
        marginVertical: 10
    },
    btn: {
        padding: 10,
        // backgroundColor:'#1960d8',
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
        borderTopWidth: 1,
        borderColor: '#eee',
        width: '100%',
        // alignItems:'center'

    },
    star: {
        width: '65%',
        alignSelf: "flex-start",
        paddingBottom: 5,
        paddingHorizontal: 5
    },
    tabs: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tab: {
        marginHorizontal: 20,
        color: '#777'
    },
    active: {
        color: '#1960d8',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#1960d8'
    },
    bars: {
        position: 'absolute',
        right: 10,
        bottom: 80,
        width:60,
        height:60,
        backgroundColor:'#1960d8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    }
})

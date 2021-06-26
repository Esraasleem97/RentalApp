import {useNavigation} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import React, {useEffect, useState} from "react";
import Home from "../Screen/Home";
import Profile from "../Screen/Profile";
import {View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Drawer,

} from 'react-native-paper';

import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import Details from "../Screen/Details";
import {useDispatch, useSelector} from "react-redux";
import {checkToken, Logout} from "../Redux/actions/userActions";
import Loader from "../Components/Loader";

function Header() {

    const navigation = useNavigation()

    const {userToken} = useSelector(state => state);

    const {user} = userToken


    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', {user})}>
            <Image style={styles.img_profile} source={require('../../assets/avatar-2.png')}/>
        </TouchableOpacity>
    )
}

function GoBackHandler() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{marginHorizontal: 25}} onPress={() => navigation.goBack()}>
            <Icon
                name="arrow-left"
                size={25}
                color="#FFF"
            />
        </TouchableOpacity>
    )
}

function DrawerContent(props) {

    const dispatch = useDispatch();

    const {userToken} = useSelector(state => state);

    const {user} = userToken

    const [loadingWhileLogout, setLoadingWhileLogout] = useState(false)

    useEffect(() => {

        setLoadingWhileLogout(false)

        if (!user) {
            dispatch(checkToken())
        }
    }, [user, dispatch])

    const LogoutHandler = () => {

        setLoadingWhileLogout(true)

        dispatch(Logout());

        setTimeout(() => {
            setLoadingWhileLogout(false)

            props.check(false);
        }, 1000)


    };
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={require('../../assets/avatar-2.png')}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>{user && user.username}</Title>
                                <Caption style={styles.caption}>{user && user.email}</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {
                                props.navigation.navigate('Profile', {user})
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Booking"
                            onPress={() => {
                                props.navigation.navigate('BookmarkScreen')
                            }}
                        />


                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="information-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About us"
                            onPress={() => {
                                props.navigation.navigate('BookmarkScreen')
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="phone"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contact us"
                            onPress={() => {
                                props.navigation.navigate('BookmarkScreen')
                            }}
                        />


                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (

                        loadingWhileLogout
                            ? <Loader/>
                            : <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                    )}
                    label="Sign Out"
                    onPress={!loadingWhileLogout && LogoutHandler}/>
            </Drawer.Section>
        </View>
    );
}

export default function DrawerNav({check}) {
    const screenOptions = {
        headerShown: true,
        headerTitleStyle: {fontSize: 22},
        headerStyle: {backgroundColor: '#1960d8', borderBottomWidth: 0, elevation: 0},
        headerTintColor: '#fff',
        headerRight: props => <Header {...props} />,

    }
    const option = {
        headerLeft: props => <GoBackHandler {...props}/>,
    }

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} check={check}/>}
                          screenOptions={screenOptions}>
            <Drawer.Screen name="Home" component={Home} options={{
                headerLeft: () => <></>,
                headerTitleStyle: {marginHorizontal: -35, fontSize: 22}
            }}/>
            <Drawer.Screen name="Profile" component={Profile} options={option}/>

            <Drawer.Screen name="Details" component={Details} options={option}/>
        </Drawer.Navigator>


    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginTop: 10
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    img_profile: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginHorizontal: 30
    },
})

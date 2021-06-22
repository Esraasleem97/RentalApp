import {useNavigation} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import React from "react";
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
import {useDispatch} from "react-redux";
import {Logout} from "../Redux/actions/userActions";
import {HeaderBackButton} from "@react-navigation/stack";

function Header() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.img_profile} source={require('../../assets/avatar-2.png')}/>
        </TouchableOpacity>
    )
}
function GoBackHandler() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{marginHorizontal:25}} onPress= {() => navigation.goBack()}>
            <Icon
                name="arrow-left"
                size={25}
                color="#FFF"
            />
        </TouchableOpacity>
    )
}
function DrawerContent(props) {


    const dispatch = useDispatch()


    const LogoutHandler = () => {

        dispatch(Logout())

        props.check(false)

    }


    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>es@j_doe.com</Caption>
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
                                props.navigation.navigate('Profile')
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
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={LogoutHandler}/>
            </Drawer.Section>
        </View>
    );
}

export default function DrawerNav({check}) {


    const Drawer = createDrawerNavigator();
    return (

        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} check={check}/>}
                          screenOptions={{
                              headerShown: true,
                              headerTitleStyle: {fontSize: 22},
                              headerStyle: {backgroundColor: '#1960d8', borderBottomWidth: 0, elevation: 0},
                              headerTintColor: '#fff',
                              headerRight: props => <Header {...props} />,
                              drawerIcon: false
                          }}>
            <Drawer.Screen name="Home" component={Home} options={{
                headerLeft:() => <></>,
                headerTitleStyle:{marginHorizontal:-35,fontSize: 22}
            }}/>
            <Drawer.Screen name="Profile" component={Profile} options={{
                headerLeft:props => <GoBackHandler {...props}/>,
            }}/>
            <Drawer.Screen name="Details" component={Details}
                           options={{
                               headerLeft:props => <GoBackHandler {...props}/>
                           }}
            />
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

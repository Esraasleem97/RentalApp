import React from 'react';
import {Text, View} from "react-native";

export const Message = ({ children , color='#e74545'}) => {
    return (
        <View style={{width:'100%',justifyContent:'flex-start'}}>
            <Text style={{color}}>
                {children}
            </Text>
        </View>
    );

}
Message.defaultProps = {
    variant: 'info',

}
export default Message;

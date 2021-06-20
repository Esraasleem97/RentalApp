import React from 'react';
import {Text, View} from "react-native";

export const Message = ({ children , color='#e74545'}) => {
    return (
        <View >
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
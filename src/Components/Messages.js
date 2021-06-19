import React from 'react';
import {Text, View} from "react-native";

export const Message = ({ children}) => {
    return (
        <View >
            <Text style={{color:'#e74545'}}>
                {children}
            </Text>
        </View>
    );

}
Message.defaultProps = {
    variant: 'info',

}
export default Message;
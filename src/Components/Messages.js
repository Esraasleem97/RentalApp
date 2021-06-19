import React from 'react';
import Alert from "react-native";

export const Message = ({variant, children, className}) => {


    return (

        <div className={className}>
            <Alert variant={variant}>
                {children}
            </Alert>
        </div>
    );

}
Message.defaultProps = {
    variant: 'info',
    className: ''
}
export default Message;
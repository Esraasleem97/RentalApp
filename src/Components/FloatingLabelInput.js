import React, { Component } from 'react';
import {
    View,
    TextInput,
    Animated,
} from 'react-native';

const defaultStyles = {
    labelStyle: {
        position: 'absolute',
        left: 0,
        zIndex:10,
        paddingHorizontal:10

    },
    textInput: {
        height: 50,
        fontSize: 15,
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // backgroundColor:'#fff',
        // borderRadius:10,
        paddingHorizontal:10,
        marginBottom:15
    },
    focusedTextInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#1960d8'
    },
    selectionColor: '#1960d8',
}

export default class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };

    UNSAFE_componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);

    }

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }

    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        const style = defaultStyles;
        const animatedLabelStyle = {
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [34, 0],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [14, 12],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#888', '#1960d8'],
            }),
        };
        return (

            <View style={{ paddingTop: 18,width:'100%' }}>


                <Animated.Text style={[style.labelStyle,animatedLabelStyle]}>

                    {label}
                </Animated.Text>

                <TextInput
                    {...props}
                    style={[style.textInput,isFocused&&style.focusedTextInput]}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    blurOnSubmit
                    selectionColor={style.selectionColor}
                    underlineColorAndroid="transparent"
                />

            </View>
        );
    }
}

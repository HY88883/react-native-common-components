import React, {PureComponent, ReactNode} from 'react';
import {
  View,
  StyleSheet,
  ColorValue,
  StyleProp,
  ViewStyle,
  Text,
  Image,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '@/utils';
import Touchable from '@/components/Touchable';

interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  type?: 'noicon' | 'icon';
  icon?: ReactNode;
  text?: string;
  textStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button=(props:ButtonProps)=>{
    const {
      icon,
      buttonStyle,
      loading,
      text,
      type,
      textStyle,
      disabled,
      onPress,
    } = props;
    switch (type) {
      case 'icon':
        return (
            <Touchable
                style={[styles.buttonStyle, buttonStyle]}
                disabled={disabled}
                onPress={onPress}>
              {icon}
              {text ? (
                  <Text style={[styles.textStyle, textStyle]}>
                    {text}
                  </Text>
              ) : null}
            </Touchable>
        );
      case 'noicon':
        return (
            <Touchable
                style={[styles.buttonStyle, buttonStyle]}
                disabled={disabled}
                onPress={onPress}>
              {loading && (
                  <ActivityIndicator
                      style={{width: scaleSizeW(20), height: scaleSizeW(20)}}
                      animating={loading}
                      color={'#fff'}
                  />
              )}
              {text ? (
                  <Text style={[styles.textStyle, textStyle]}>
                    {text}
                  </Text>
              ) : null}
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: scaleSizeW(4),
    backgroundColor: '#1890ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:scaleSizeW(25),
    height:scaleSizeW(25)
  },
  textStyle: {
    fontSize: setSpText(14),
    color: '#fff',
  },
})

Button.defaultProps = {
  type: 'noicon',
  icon: null,
  text: '',
  loading: false,
  disabled: false,
  onPress: undefined,
};

export default Button;

import React, {PureComponent} from 'react';
import {View, StyleSheet, ColorValue, StyleProp, ViewProps} from 'react-native';

interface IDivider{
    lineHeight?: number;
    color?: ColorValue;
    style?: StyleProp<ViewProps>;
    type?:'horizontal'|'vertical';
}

const Divider=(props:IDivider)=>{
    let {lineHeight, color, style,type} = props;
    switch (type) {
        case 'horizontal':return (
            <View
                style={[
                    {
                        height: 0,
                        width:'80%',
                        borderTopWidth: lineHeight,
                        borderColor: color,
                        opacity: 0.7,
                        margin: StyleSheet.hairlineWidth,
                        alignSelf:'center'
                    },
                    style
                ]}
            />
        );
        case 'vertical':return (
            <View
                style={[
                    {
                        height: '5%',
                        width:0,
                        borderLeftWidth: lineHeight,
                        borderColor: color,
                        opacity: 0.7,
                        margin: StyleSheet.hairlineWidth,
                        alignSelf:'center'
                    },
                    style
                ]}
            />
        );
    }
}

Divider.defaultProps = {
    lineHeight: StyleSheet.hairlineWidth,
    color: '#bdbdbd',
    style:{},
    type:'horizontal'
};

export default Divider;

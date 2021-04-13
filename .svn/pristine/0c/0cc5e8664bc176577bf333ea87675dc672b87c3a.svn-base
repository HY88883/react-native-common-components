import React from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {FieldInputProps, FormikProps} from 'formik';
// import IconFont from "@/assets/iconfont";
import {scaleSizeH, scaleSizeW, setSpText, wp} from "@/utils/index";

interface IProps extends TextInputProps {
    field: FieldInputProps<any>;
    form: FormikProps<any>;
}

const IconFont=()=>(<View></View>)


class Input extends React.PureComponent<IProps> {
   /* onChangeText = (value: string) => {
        const {form, field, onChangeText} = this.props;
        form.handleChange(field.name)(value);
        if (onChangeText) {
            onChangeText(value);
        }
    };*/

    static defaultProps={
        haveIcon:false,
        iconName:'',
        placeholderText:'',
        container:{},
        inputStyle:{}
    }

    render() {
        const {form, field, haveIcon,iconName,container,inputStyle,...rest} = this.props;
        console.log(JSON.stringify(form.handleChange))
        return (
            <View style={[styles.container,container]}>
                {
                    haveIcon?<View style={{flexDirection:'row',alignItems:'center'}}>
                        <IconFont name={iconName} style={{marginLeft:scaleSizeW(10)}} />
                        <TextInput
                            style={[styles.input,inputStyle]}
                            underlineColorAndroid='transparent'
                            {...rest}
                            onChangeText={form.handleChange(field.name)}
                            onBlur={form.handleBlur(field.name)}
                            value={form.values[field.name]}
                        />
                    </View>:<TextInput
                        style={[styles.input,inputStyle]}
                        underlineColorAndroid='transparent'
                        {...rest}
                        onChangeText={form.handleChange(field.name)}
                        onBlur={form.handleBlur(field.name)}
                        value={form.values[field.name]}
                    />
                }
                <View>
                    <Text style={styles.error}>{form.touched[field.name]&&form.errors[field.name]}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginVertical: scaleSizeH(10),
    },
    input: {
      height:scaleSizeH(40),
        padding:0,
      paddingHorizontal: scaleSizeW(10),
        width:wp(70),
        fontSize:setSpText(15),
    },
    error: {
      position: 'absolute',
      color: 'red',
      marginTop: scaleSizeH(3),
      marginLeft: scaleSizeH(10),
      fontSize: setSpText(12),
    },
});

export default Input;

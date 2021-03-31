import {Callback, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Toast} from "@ant-design/react-native";
import React, {PureComponent} from "react";
import {Image, StyleSheet, View, Text, StyleProp, ViewProps} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText} from "@/utils/index";
import Touchable from "@/components/Touchable";
import {ActionSheet} from 'teaset'

export const MyImagePicker={
    launchCamera:(callback:Callback)=>{
        launchCamera(
            {
                mediaType: 'photo',
                maxHeight: 500,
                maxWidth: 500,
                quality: 1.0,
                includeBase64:false,
                saveToPhotos:true,
                cameraType: 'back'
            },
            async (response) => {
                if(response.didCancel){
                }else if(response.errorCode){
                    Toast.fail('操作失败',1)
                }else callback(response);
            },
        );
    },
    launchImageLibrary:(callback:Callback)=>{
        launchImageLibrary(
            {
                mediaType: 'photo',
                maxHeight: 500,
                maxWidth: 500,
                quality: 1.0,
                includeBase64:false,
            },
            async (response) => {
                if(response.didCancel){
                }else if(response.errorCode){
                    Toast.fail('操作失败',1)
                }else callback(response);
            },
        );
    }
}

interface IImagePickerComponent {
    callback?:Callback;
    pickerView?:StyleProp<ViewProps>;
}

/**
 * 图片上传
 */
class ImagePickerComponent extends PureComponent<IImagePickerComponent>{

    static defaultProps = {
        callback:()=>{},
        pickerView:{}
    }

    onPress = () => {
        const {callback}=this.props;
        let items = [
            {title: '拍摄', onPress:()=> MyImagePicker.launchCamera(callback)},
            {title: '从相册中选择', onPress: ()=>MyImagePicker.launchImageLibrary(callback)},
        ];
        let cancelItem = {title: '取消'};
        ActionSheet.show(items, cancelItem);
    };


    render() {
        const {pickerView}=this.props
       return <Touchable style={[styles.pickerView,pickerView]} onPress={this.onPress}>
           <View>
               <Image source={require('./add.png')} style={styles.imageStyle}/>
               <Text style={styles.text}>上传</Text>
           </View>
       </Touchable>
   }
}

const styles=StyleSheet.create({
    pickerView:{
        width:scaleSizeW(150),
        height : scaleSizeW(150),
        borderRadius:scaleSizeW(12),
        borderColor:'#333',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor :'#fff'
    },
    text:{
        fontSize : setSpText(16),
        fontWeight:'600',
        color:'#333',
        marginTop:scaleSizeH(5)
    },
    imageStyle:{
        width:scaleSizeW(24),
        height : scaleSizeW(24)
    }
})

export default ImagePickerComponent

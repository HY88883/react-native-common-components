import {
  Callback,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Toast} from '@ant-design/react-native';
import React, {PureComponent} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewProps,
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText, wp} from '@/utils/index';
import Touchable from '@/components/Touchable';
import { ActionSheet, Button } from '@ant-design/react-native';
import axios from 'axios';
import {headersOptions, Idata, uploadUrl} from '@/components/Upload';
import CircularProgress from '@/components/CircularProgress';

//imagePicker封装
export const MyImagePicker = {
  launchCamera: (callback: Callback) => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
        saveToPhotos: true,
        cameraType: 'back',
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          callback(response);
        }
      },
    );
  },
  launchImageLibrary: (callback: Callback) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          callback(response);
        }
      },
    );
  },
};

interface IImagePickerComponent {
  callback?: Callback;
  pickerView?: StyleProp<ViewProps>;
  type?: 'photo' | 'shoot';
  shootView?: StyleProp<ViewProps>;
  callback?: (value: Idata) => void;
  layout?: 'column' | 'row';
  maxCount?: number;
}

interface IImagePickerState {
  visible: boolean;
  fill: number;
  content: string;
  ImageList: Idata[];
}

/**
 * 选择本地图片或拍摄上传
 */
class ImagePickerComponent extends PureComponent<
  IImagePickerComponent,
  IImagePickerState
> {
  static defaultProps = {
    callback: () => {},
    pickerView: {},
    type: 'photo',
    shootView: {},
    callback: () => {},
    layout: 'column',
    maxCount: 5,
  };

  state = {
    visible: false,
    fill: 0,
    content: '',
    ImageList: [],
  };

  //照相机
  launchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
        saveToPhotos: true,
        cameraType: 'back',
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          this.uploadImage(response);
        }
      },
    );
  };

  //相册
  launchImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          this.uploadImage(response);
        }
      },
    );
  };

  //上传图片
  uploadImage = async picker => {
    const {callback, headers} = this.props;
    const headersObject = {
      ...headersOptions,
      headers,
    };
    const configs = {
      headers: headersObject,
      withCredentials: true,
      onUploadProgress: progress => {
        if (progress.lengthComputable) {
          let {loaded, total} = progress;
          let rate = Math.round((loaded / total) * 90) || 0;
          this.setState({visible: true, fill: rate, content: '上传'});
        }
      },
    };
    const formData = new FormData();
    const imgObj = {
      uri: picker.uri,
      name: picker.fileName,
      type: 'application/octet-stream',
    };
    formData.append('file', imgObj);
    try {
      const {data: res} = await axios.post(uploadUrl, formData, configs);
      if (res.success) {
        this.setState(
          {fill: 100, ImageList: [...this.state.ImageList, res.data]},
          () => {
            !!callback && callback(this.state.ImageList);
            setTimeout(() => {
              this.setState({fill: 0, visible: false});
              Toast.success('上传成功', 1);
            }, 500);
          },
        );
      }
    } catch (e) {}
  };

  onPress = () => {
    let items = [
      { onPress: this.launchCamera},
      {onPress: this.launchImageLibrary},
    ];
    const BUTTONS = [
      '拍摄',
      '从相册中选择',
      '取消',
    ];
    ActionSheet.showActionSheetWithOptions(
        {
          options: BUTTONS,
          cancelButtonIndex: 2,
        },
        buttonIndex => {
          if(buttonIndex===0||buttonIndex===1){
            items[buttonIndex].onPress()
          }
        }
    );
  };

  onShootPress = () => {
    this.launchCamera();
  };

  get photo() {
    const {fill, visible, ImageList, content} = this.state;
    const {pickerView, layout} = this.props;
    return (
      <Touchable style={[styles.pickerView, pickerView]} onPress={this.onPress}>
        <CircularProgress visible={visible} fill={fill} content={content} />
        {ImageList.length === 0 ? (
          <View>
            <Image source={require('./add.png')} style={styles.imageStyle} />
            <Text style={styles.text}>上传</Text>
          </View>
        ) : (
          <Image
            source={{uri: ImageList[ImageList.length - 1].link}}
            style={styles.photoImageStyle}
          />
        )}
      </Touchable>
    );
  }

  get shoot() {
    const {fill, visible, ImageList, content} = this.state;
    console.log(JSON.stringify(ImageList));
    const {shootView, layout, maxCount} = this.props;
    return (
      <View style={shootView}>
        <CircularProgress visible={visible} fill={fill} content={content} />
        {ImageList.length <= maxCount && (
          <Touchable onPress={this.onShootPress}>
            <Image source={require('./shoot.png')} style={styles.shootImage} />
          </Touchable>
        )}
        {layout === 'column' ? (
          <View>
            {ImageList.length > 0 &&
              ImageList.map((item, index) => (
                <Touchable key={item.attachId}>
                  <Image
                    source={{uri: item.link}}
                    style={styles.shootColumnImageStyle}
                  />
                </Touchable>
              ))}
          </View>
        ) : (
          <View style={styles.shootViewContainer}>
            {ImageList.length > 0 &&
              ImageList.map((item, index) => (
                <Touchable key={item.attachId}>
                  <Image
                    source={{uri: item.link}}
                    style={styles.shootImageStyle}
                  />
                </Touchable>
              ))}
          </View>
        )}
      </View>
    );
  }

  render() {
    const {type, pickerView} = this.props;
    switch (type) {
      case 'photo':
        return this.photo;
      case 'shoot':
        return this.shoot;
    }
  }
}

const styles = StyleSheet.create({
  pickerView: {
    width: scaleSizeW(150),
    height: scaleSizeW(150),
    borderRadius: scaleSizeW(12),
    borderColor: '#333',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: setSpText(16),
    fontWeight: '600',
    color: '#333',
    marginTop: scaleSizeH(5),
  },
  imageStyle: {
    width: scaleSizeW(24),
    height: scaleSizeW(24),
  },
  shootImage: {
    width: scaleSizeW(24),
    height: scaleSizeW(24),
  },
  shootImageStyle: {
    width: scaleSizeW(110),
    height: scaleSizeW(110),
    borderRadius: scaleSizeW(12),
    margin: scaleSizeW(4),
  },
  shootViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  shootColumnImageStyle: {
    width: wp(90),
    height: scaleSizeH(200),
    alignSelf: 'center',
    margin: scaleSizeW(4),
  },
  photoImageStyle: {
    width: scaleSizeW(150),
    height: scaleSizeW(150),
    borderRadius:scaleSizeW(12),
  },
});

export default ImagePickerComponent;

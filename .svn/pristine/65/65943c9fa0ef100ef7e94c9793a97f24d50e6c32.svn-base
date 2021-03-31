import React, {Component, PropTypes, PureComponent} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Platform,
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import {scaleSizeH, viewportHeight} from '@/utils/index';
import {Toast} from '@ant-design/react-native';

interface IMyAlbumView {
  curentImage: number;
  imaeDataUrl: string[];
  cancel: (index?: number) => void;
}

/**
 * 图片展示
 */
class MyAlbumView extends PureComponent<IMyAlbumView> {
  _Close = () => {
    this.props.cancel();
  };
  renderLoad = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} size={'large'} color={'#3c85ff'} />
      </View>
    );
  };
  // savePhoto=()=> {
  //     if(Platform.OS==='android'){
  //         const RNFS = require('react-native-fs'); //文件处理
  //         const storeLocation = `${RNFS.DocumentDirectoryPath}`;
  //         let pathName = new Date().getTime() + "文件名.png"
  //         let downloadDest = `${storeLocation}/${pathName}`;
  //         const ret = RNFS.downloadFile({fromUrl:saveImageUrl,toFile:downloadDest});
  //         ret.promise.then(res => {
  //             if(res && res.statusCode === 200){
  //                 var promise = CameraRoll.saveToCameraRoll("file://" + downloadDest);
  //                 promise.then(function(result) {
  //                     console.log("图片已保存至相册")
  //                 }).catch(function(error) {
  //                     console.log("保存失败")
  //                 })
  //             }
  //         })
  //     }
  //     else{
  //         let index = this.props.curentImage;
  //         let url = this.props.imaeDataUrl[index];
  //         let promise = CameraRoll.saveToCameraRoll(url)
  //         promise.then(function(result) {
  //             Toast.success("图片已保存至相册",1)
  //         }).catch(function(error) {
  //             Toast.fail("保存失败",1)
  //         })
  //     }
  // }

  render() {
    const {imaeDataUrl: imageData, curentImage} = this.props;
    let ImageObjArray: [] = [];
    for (let i = 0; i < imageData.length; i++) {
      let Obj = {};
      Obj.url = imageData[i];
      ImageObjArray.push(Obj);
    }
    return (
      <View
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
        <Modal
          animationType={'slide'}
          transparent={true}
          onRequestClose={this._Close}>
          <ImageViewer
            imageUrls={ImageObjArray} // 照片路径
            enableImageZoom={true} // 是否开启手势缩放
            // saveToLocalByLongPress={true} //是否开启长按保存
            index={curentImage} // 初始显示第几张
            // failImageSource={} // 加载失败图片
            loadingRender={this.renderLoad}
            enableSwipeDown={false}
            // menuContext={{ "saveToLocal": "保存图片", "cancel": "取消" }}
            menuContext={{cancel: '取消'}}
            // onChange={(index) => { }} // 图片切换时触发
            onClick={() => {
              this._Close();
            }}
            onCancel={() => {
              this._Close();
            }}
            backgroundColor={'#666'}
            useNativeDriver
            onSave={url => {
              console.log('x===========');
            }}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyAlbumView;

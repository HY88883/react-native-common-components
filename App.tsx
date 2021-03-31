import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Provider} from '@ant-design/react-native';
import MyDocumentPicker from '@/components/MyDocumentPicker';
import Upload from '@/components/Upload';
import Touchable from "@/components/Touchable";
import MyImagePicker from "@/components/MyImagePicker";
import ImagePickerComponent from "@/components/MyImagePicker";


class App extends Component {
  state = {
    fill: 0,
    visible: false,
  };

  componentDidMount(): void {
  }

  onPress =  () => {
    MyDocumentPicker.pickerSingleFile(
      async value => {
          console.log(value)

      },null)
  };

  render() {
      console.log(this.state)
    return (
      <Provider>
        <View style={{flex: 1,justifyContent:'center'}}>
           <Upload listType={'picture-card'}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
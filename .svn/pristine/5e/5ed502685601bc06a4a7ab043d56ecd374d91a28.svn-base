import React, {Component} from 'react';
import {ActivityIndicator, Image, Platform, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import {Grid, Provider} from '@ant-design/react-native';
import MyDocumentPicker from '@/components/MyDocumentPicker';
import Upload from '@/components/Upload';
import Touchable from "@/components/Touchable";
import MyImagePicker from "@/components/MyImagePicker";
import ImagePickerComponent from "@/components/MyImagePicker";
import {scaleSizeH, scaleSizeW, setSpText, wp} from "@/utils/index";
import MyGrid from "@/components/MyGrid";
import {Field, Formik} from "formik";
import Input from "@/components/Input";
import * as Yup from 'yup';
import {
    Avatar,
    Button,
    Carrousel,
    CircularProgress,
    Divider,
    MyAlbumView,
    MyDatePicker,
    MyModal, MyModalDropdown
} from "@/components/index";


const data = Array.from(new Array(6)).map((_val, i) => ({
    iconx: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
}));

const initialValues = {
    username: '',
    password: '',
    tenantId: '000000'
}

const validationSchema = Yup.object().shape({
    username: Yup.string().trim().required('请输入手机号码'),
    password: Yup.string().trim().required('请输入密码'),
});

class Demo extends Component {
    state = {
        fill: 0,
        visible: false,
        albumVisible:false
    };
    private BackAndroid: any;

    onSubmit=(values)=>{
        console.log(values)
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void {
        if(this.state.visible){
            setTimeout(() => {
                this.setState({visible:false})
            },2000)
        }
    }

    render() {
        console.log(this.state)
        const {visible,albumVisible}=this.state
        if(albumVisible){
            return                     <MyAlbumView imaeDataUrl={['https://t7.baidu.com/it/u=1289999949,1171310040&fm=193&f=GIF','https://t7.baidu.com/it/u=3856305042,3534148316&fm=193&f=GIF',
                'https://t7.baidu.com/it/u=618936275,430993586&fm=193&f=GIF',
                'https://t7.baidu.com/it/u=458768340,2511869234&fm=193&f=GIF']}
                                                    curentImage={0}
                                                    cancel={()=>{this.setState({albumVisible : false})}} />

        }
        return (
            <Provider >
                <ScrollView style={{flex:1,}} contentContainerStyle={{}}>
                    <Text style={styles.text}>头像：</Text>
                    <Avatar type={'image'} uri={'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'}/>
                    <Text style={styles.text}>按钮：</Text>
                    <Button text={'登录'} loading buttonStyle={{width:wp(20)}}/>
                    <Text style={styles.text}>轮播图：</Text>
                    <Carrousel data={['https://t7.baidu.com/it/u=1289999949,1171310040&fm=193&f=GIF','https://t7.baidu.com/it/u=3856305042,3534148316&fm=193&f=GIF',
                        'https://t7.baidu.com/it/u=618936275,430993586&fm=193&f=GIF',
                        'https://t7.baidu.com/it/u=458768340,2511869234&fm=193&f=GIF']} dotsLength={4}/>
                    <Text style={styles.text}>环形进度条：</Text>
                    <Button text="点击显示" onPress={()=> this.setState({visible:!this.state.visible})}/>
                    <CircularProgress visible={visible} content={'下载'} fill={50}/>
                    <Text style={styles.text}>分割线：</Text>
                    <Divider/>
                    <Text style={styles.text}>列表分页：</Text>
                    {/*ListPage*/}
                    <Button text="点击跳转到列表页" onPress={()=> this.props.navigation.navigate('ListPage')}/>
                    <Text style={styles.text}>图片展示：</Text>
                    <Button text="点击跳转到图片展示" onPress={()=> this.setState({albumVisible:true})}/>

                    <Text style={styles.text}>多选按钮：</Text>
                    <Button text="点击跳转到多选按钮页" onPress={()=> this.props.navigation.navigate('CheckboxDemo')}/>

                    <Text style={styles.text}>折叠面板：</Text>
                    <Button text="点击跳转到折叠面板" onPress={()=> this.props.navigation.navigate('CollapsibleDemo')}/>
                    {/*MyDatePicker*/}
                    <Text style={styles.text}>日期选择器：</Text>
                    <MyDatePicker title={'生日'} extra={'请选择'} onChange={(value)=>{
                        console.log(value)
                    }} mode={'datetime'}/>

                    {/*本地文件选择器*/}
                    <Text style={styles.text}>本地文件选择器：</Text>
                    <Button text="点击打开本地文件夹" onPress={()=>{
                        MyDocumentPicker.pickerSingleFile(value=>{
                            console.log(value)
                        },error=>{
                            console.log(error)
                        })
                    }}/>

                    {/*宫格*/}
                    <Text style={styles.text}>宫格：</Text>
                   <MyGrid data={[{text:1},{text:2},{text:3},{text:4},{text:5},{text:6},]}/>

                    <Text style={styles.text}>选择图片上传：</Text>
                    <ImagePickerComponent type={'photo'}/>
                    <Text style={styles.text}>拍摄图片上传：</Text>
                    <ImagePickerComponent type={'shoot'} maxCount={4} layout={'row'}/>

                    <Text style={styles.text}>对话框：</Text>
                    <Button text="点击显示对话框" onPress={()=> MyModal.alert('测试','你好！',data1 => {
                        console.log(data1)
                    })}/>
                    <Text style={styles.text}>下拉选择框：</Text>
                    <MyModalDropdown options={['测试','程序','案例','react','javascript','java']} onSelect={(index, value) => {
                        console.log(index,value)
                    }}><Text style={styles.text}>请点击选择</Text></MyModalDropdown>
                </ScrollView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        marginVertical:scaleSizeH(10)
    },
    button:{
        zIndex:1000
    },
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
    },
    loginImage: {
        width: scaleSizeW(130),
        height: scaleSizeW(130),
        marginTop: scaleSizeH(100),
        alignSelf: 'center',
        marginBottom: scaleSizeH(10),
    },
    titleText: {
        fontSize: setSpText(25),
        fontWeight: '900',
        color: '#3C85FF',
    },
    mimaStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:scaleSizeW(40),
    },
    yanzhengma:{
        color:'#3C85FF',
        fontSize:setSpText(16),
        fontWeight:'500'
    },
    btnsStyle:{
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'#3C85FF',
        backgroundColor:'#3C85FF',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:wp(70),
        alignSelf:'center',
        paddingVertical:scaleSizeH(10),
        borderRadius:scaleSizeW(4),
        marginTop:scaleSizeH(20)
    },
    loginStyle:{
        color:'#fff',
        fontSize:setSpText(14),
    },
    createStyle:{
        alignSelf:'center',
        marginTop:scaleSizeH(15)
    },
    createText:{
        color:'#3C85FF',
        fontSize:setSpText(14),
    }
});

export default Demo;

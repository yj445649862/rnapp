/**
 * Created by andy on 2017-09-08.
 */
import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import { Button } from 'antd-mobile';
import ScreenFlash from './views/ScreenFlash'
export default class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ScreenFlash></ScreenFlash>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    }
})

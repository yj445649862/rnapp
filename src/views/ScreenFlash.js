//闪屏页面

import React from 'react' ;
import {View,StyleSheet,Text,Image,Dimensions} from 'react-native'

import {Button} from 'antd-mobile'
export default class ScreenFlash extends React.Component{
    constructor(props){
        super(props)
        this.state={
            countdown:30,
            timeInterVal:''
        }
    }
    componentDidMount(){
        let _this = this ;
        let leftTime = this.state.countdown
        let timeInterval = setInterval(()=>{
            leftTime-- ;
            if(leftTime<=0){
                clearInterval(this.state.timeInterVal)
            }
            _this.setState({
                countdown:leftTime
            })

        },1000)
        this.setState({
            timeInterVal:timeInterval
        })
    }
    countdownClick(){
       clearInterval(this.state.timeInterVal)
    }
    render(){
        return (
            <View style={styles.top}>
                <Text onPress={this.countdownClick.bind(this)} style={styles.countdown}>{this.state.countdown}秒后跳过</Text>
               <Image style={styles.bottm} source={{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1505047496&di=32ed3d9e486db66d9527d73eeb5c28a0&src=http://image.tianjimedia.com/uploadImages/2013/088/0MTCI9IGDPVQ.jpg'}}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    top:{
       flex:1,
    },
    countdown:{
        zIndex:11,
        width:200,
        position:'absolute',
        bottom:32,
        right:10
    },
    bottm:{
        width:Dimensions.get('window').width,
        resizeMode:'stretch',
        height:Dimensions.get('window').height
    }
});

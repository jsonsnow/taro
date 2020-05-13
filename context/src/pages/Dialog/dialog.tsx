import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class Dialog extends Component {
    render () {
        return (
            <View className='dialog'>
                <View className='header'>Welcom!</View>
                <View className='body'>
                    {this.props.children}
                </View>
                <View className='footer'> --divider --</View>
            </View>
        )
    }
}
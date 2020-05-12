import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from "@tarojs/components";

export default class LoginStatus extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn
        let status = null
        if (isLoggedIn) {
            status = <Text>已登录</Text>
        } else {
            status = <Text>未登录</Text>
        }
        return (
            <View>
                {status}
            </View>
        )
    }
}
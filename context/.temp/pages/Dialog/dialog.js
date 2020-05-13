import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
export default class Dialog extends Taro.Component {
  render() {
    return <View className="dialog">
                <View className="header">Welcom!</View>
                <View className="body">
                    {this.props.children}
                </View>
                <View className="footer"> --divider --</View>
            </View>;
  }
}
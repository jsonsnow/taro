import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
import Mouse from "./mouse";
import Cat from "./cat";
export default class MouseTracker extends Taro.Component {
  render() {
    return <View>
                <View>点击鼠标</View>
                <Mouse renderCat={mouse => <Cat mouse={mouse}></Cat>} />
            </View>;
  }
}
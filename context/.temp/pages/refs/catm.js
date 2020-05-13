import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
export default class CatMiao extends Taro.Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return <View />;
  }
  miao = () => console.log('miao,miao,miao');
}
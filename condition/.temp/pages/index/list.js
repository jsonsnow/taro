import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
export default class Numberlist extends Taro.Component {
  render() {
    const numbers = [...Array(100).keys()]; // [0, 1, 2, ..., 98, 99]
    const listItems = numbers.map(number => {
      return <View><g-list taroKey={String(number)} className="g-list">我是第 {number + 1} 个数子</g-list></View>;
    });
    return listItems;
  }
}
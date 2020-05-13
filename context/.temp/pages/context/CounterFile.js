import Nerv from "nervjs";
import { CounterContext } from './Counter';
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
export default class Counter extends Taro.Component {
  render() {
    const value = this.context;
    console.log(value);
    return <View>
                Count: {value}
            </View>;
  }
}
Counter.contextType = CounterContext;
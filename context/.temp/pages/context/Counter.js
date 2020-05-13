import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button, Text } from "@tarojs/components";
export const CounterContext = Taro.createContext(0);
export default class IndexCount extends Taro.Component {
  render() {
    const [count, setCount] = Taro.useState(0);
    console.log(count);
    return <CounterContext.Provider value={count}>
            <View className="container">
              <Text>{count}</Text>
              <Button onClick={() => setCount(0)}>Reset</Button>
              <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
              <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
            </View>
          </CounterContext.Provider>;
  }
}
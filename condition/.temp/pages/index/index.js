import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import './index.scss';
import LoginStatus from '../LoginStatus';
import TextList from './textList';
import ToDoCounter from './todoCounter';
export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <Text>Hello world!</Text>
        <LoginStatus isLoggedIn={false}></LoginStatus>
        <TextList></TextList>
        <ToDoCounter></ToDoCounter>
        
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };
}
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import LoginStatus from '../LoginStatus'
import Numberlist from './list'
import TextList from './textList'
import ToDoCounter from './todoCounter'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <LoginStatus isLoggedIn={false}></LoginStatus>
        <TextList></TextList>
        <ToDoCounter></ToDoCounter>
        {/* <Numberlist></Numberlist> */}
      </View>
    )
  }
}

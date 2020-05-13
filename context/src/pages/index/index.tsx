import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Counter from '../context/CounterFile'
import IndexCount from '../context/Counter'
import Child from '../context/Child'
import Dialog from '../Dialog/dialog'
import MouseTracker from '../Mouse/MouseTracker'
import MyComponent from '../refs/ref'

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
        {/* <Text>Hello world!</Text>
        <IndexCount></IndexCount>
        {/* <Counter></Counter> */}
        {/* <Child></Child> */}
        {/* <Dialog>
          <View className='dialog-message'>thank you for using taro</View>
        </Dialog> */} 
        <MyComponent>mmm</MyComponent>
      </View>
    )
  }
}

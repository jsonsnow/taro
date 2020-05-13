import {CounterContext} from './Counter'
import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Counter extends Component {
    static contextType = CounterContext
    render () {
        const value = this.context
        console.log(value)
        return (
            <View>
                Count: {value}
            </View>
        )
    }
}
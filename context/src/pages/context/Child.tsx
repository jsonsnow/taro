import { Component } from "@tarojs/taro";
import Counter from './CounterFile'

export default class Child extends Component {
    shouldComponentUpdate () {
        return false
    }

    render () {
        return <Counter/>
    }
}
import { Component } from "@tarojs/taro";
import { View ,Image, Text} from "@tarojs/components";
import './cell.scss'

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = props.data
    }

    onClickCell = (e: Event) => {
        e.stopPropagation()
        console.log(this.state)
        let func = this.props.callback
        console.log(this.props)
        console.log(typeof func)
        //this.props.clickCallback(this.state)
    }
    render () {
        return (
            <View className="cell-contaier" onClick={this.onClickCell}>
                <Image className='cell-icon' src={this.state.src}></Image>
                <View className='cell-text-view'>
                <View className='cell-title'>{this.state.title}</View>
                <View className='cell-desc'>{this.state.desc}</View>
                </View>
            </View>
        )
    }
}
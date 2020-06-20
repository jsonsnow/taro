import {Component, Config} from '@tarojs/taro'
import { View, Text } from "@tarojs/components";
import './detail.scss'
import Cell from './cell';

export default class Detail extends Component {

    constructor(props) {
        super(props)
        let data = {
            'src':'',
            'title':"我是title",
            "desc":"我是desc"}
        this.state = {'list':[data, data, data, data, data, data, data, data, data, data, data]}
    }

    config: Config = {
        navigationBarTitleText: "详情"
    }

    onClickCell = (data) => {
        //console.log(data)
    }
    render () {
        let listView = this.state.list.map((value) => {
            return (<Cell data={value} click={this.onClickCell}></Cell>)
        })
        return (<View>
            <Text className='detail-class'>{JSON.stringify(this.$router.params)}</Text>
            <View>
                {listView}
            </View>
        </View>)
    }
}
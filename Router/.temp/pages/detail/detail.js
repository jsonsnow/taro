import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from "@tarojs/components";
import './detail.scss';
import Cell from './cell';
export default class Detail extends Taro.Component {
  constructor(props) {
    super(props);

    let data = {
      'src': '',
      'title': "我是title",
      "desc": "我是desc"
    };
    this.state = { 'list': [data, data, data, data, data, data, data, data, data, data, data] };
  }
  render() {
    let listView = this.state.list.map(value => {
      return <Cell data={value} click={this.onClickCell}></Cell>;
    });
    return <View>
            <Text className="detail-class">{JSON.stringify(this.$router.params)}</Text>
            <View>
                {listView}
            </View>
        </View>;
  }
  config = {
    navigationBarTitleText: "详情"
  };
  onClickCell = data => {
    //console.log(data)
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
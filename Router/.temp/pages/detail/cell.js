import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from "@tarojs/components";
import './cell.scss';
export default class Cell extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = props.data;
  }
  render() {
    return <View className="cell-contaier" onClick={this.onClickCell}>
                <Image className="cell-icon" src={this.state.src}></Image>
                <View className="cell-text-view">
                <View className="cell-title">{this.state.title}</View>
                <View className="cell-desc">{this.state.desc}</View>
                </View>
            </View>;
  }
  onClickCell = e => {
    e.stopPropagation();
    console.log(this.state);
    let func = this.props.callback;
    console.log(this.props);
    console.log(typeof func);
    //this.props.clickCallback(this.state)
  };
}
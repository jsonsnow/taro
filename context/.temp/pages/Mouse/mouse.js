import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
export default class Mouse extends Taro.Component {
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleClick.bind(this)
    this.state = { x: 0, y: 0 };
  }
  handleClick(e) {
    const { x, y } = e.detail;
    this.setState({
      x,
      y
    });
  }
  render() {
    console.log(this.state);
    return <View style={{ height: '100%' }} onClick={this.handleClick.bind(this)}>
                CES{this.props.renderCat(this.state)}
            </View>;
  }
}
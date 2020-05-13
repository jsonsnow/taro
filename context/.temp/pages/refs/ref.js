import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import CatMiao from "./catm";
import { View } from "@tarojs/components";
export default class MyComponent extends Taro.Component {
  constructor() {
    super(...arguments);
  }
  roar() {
    this.cat.miao();
  }
  render() {
    return <View onClick={this.roar.bind(this)}>
            <CatMiao ref={this.refCat}></CatMiao>
            点击
          </View>;
  }
  refCat = node => this.cat = node;
}
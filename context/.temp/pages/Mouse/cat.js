import Nerv from "nervjs";
import catImage from './0eb30f2442a7d933c94b0ca9a64bd11372f0010c.jpeg';
import Taro from "@tarojs/taro-h5";
import { Image } from '@tarojs/components';
export default class Cat extends Taro.Component {
  render() {
    const { mouse } = this.props;
    console.log(mouse);
    return <Image src={catImage} style={{ position: 'absolute', left: `${mouse.x}px`, top: `${mouse.y}px` }}></Image>;
  }
}
Cat.defaultProps = {
  mouse: { x: 0, y: 0 }
};
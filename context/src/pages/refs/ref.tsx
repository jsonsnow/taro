import { Component } from "@tarojs/taro";
import CatMiao from "./catm";
import { View } from "@tarojs/components";

export default class MyComponent extends Component {
    roar () {
        this.cat.miao()
    }

    refCat = (node) => this.cat = node
    
    render () {
        return (
          <View onClick={this.roar.bind(this)}>
            <CatMiao ref={this.refCat}></CatMiao>
            点击
          </View>
        )
    }
}
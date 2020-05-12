import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

export default class TextList extends Component {
    state = {
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning Taro!'},
        {id: 2, title: 'Installation', content: 'You can install Taro from npm.'}
      ]
    }
    render () {
      const { posts } = this.state
      const sidebar = (
        <View>
          {posts.map((post) =>
            <Text key={post.id}>
              {post.title} </Text>
          )}
        </View>
      )
      const content = posts.map((post) => {
        return <View key={post.id}>
          <Text>{post.title} </Text>
          <Text>{post.content}</Text>
        </View>
      })
      return (
        <View>
          {sidebar}
          <View className="divider" />
          {content}
        </View>
      )
    }
}
import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Button, Input } from "@tarojs/components";
let todoCounter = 0;
export default class ToDoCounter extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      todos: [],
      inputText: ''
    };
  }
  createNewToDo(todo) {
    return {
      completed: false,
      id: todoCounter++,
      text: todo
    };
  }
  onNewTodo() {
    const input = this.setState({
      todos: [...this.state.todos, this.createNewToDo(this.state.inputText)],
      inputText: ''
    });
  }
  render() {
    const { todos } = this.state;
    const elements = todos.map(todo => {
      console.log(todo);
      return <View><Text key={String(todo.id)}>{todo.text}</Text></View>;
    });
    return <View>
                {elements}
                <Input placeholder="输入标题" className="input" value={this.state.inputText} onChange={this.onChange}></Input>
                <Button onClick={this.onNewTodo.bind(this)}>创建todo</Button>
            </View>;
  }
  onChange = e => {
    this.setState({ inputText: e.target.value });
  };
}
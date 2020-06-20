import { Component, useState } from "@tarojs/taro";
import { View, Button, Text, Sldebar } from "@tarojs/components";

const ThemeContext = Taro.createContext('light');

// 用户登录 context
const UserContext = Taro.createContext({
  name: 'Guest',
});

class App extends Taro.Component {
  render() {
    const {signedInUser, theme} = this.props;

    // 提供初始 context 值的 App 组件
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// 一个组件可能会消费多个 context
function Content() {
  const theme = useContext(ThemeContext)
  const user =  useContext(UserContext)
  return (
    <ProfilePage user={user} theme={theme} />
  )
}


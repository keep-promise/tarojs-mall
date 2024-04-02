import { useLaunch } from '@tarojs/taro';

// 引入全局样式
import './assets/iconfont/iconfont.css';
import './app.scss';

function App(props) {
  useLaunch(() => {
    console.log('app launch');
  });

  return props.children;
}

export default App;

const defaultConfig = {
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    {
      root: "subPage",
      pages: [
        "pkgA/cat/index",
        "pkgA/dog/index"
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};

const config = {
  pages: [
    "pages/index/index",
    "pages/index/index2",
    "pages/index/index3",
    "pages/index/index4"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png"
      },
      {
        text: "分类",
        pagePath: "pages/index/index2",
        selectedIconPath: "./assets/images/tab-cate-current.png",
        iconPath: "./assets/images/tab-cate.png"
      },
      {
        text: "购物车",
        pagePath: "pages/index/index3",
        selectedIconPath: "./assets/images/tab-cart-current.png",
        iconPath: "./assets/images/tab-cart.png"
      },
      {
        text: "我的",
        pagePath: "pages/index/index4",
        selectedIconPath: "./assets/images/tab-my-current.png",
        iconPath: "./assets/images/tab-my.png"
      }
    ]
  }
};

export default defineAppConfig(config);
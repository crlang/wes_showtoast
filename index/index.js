import {showToast} from "../utils/utils";

Page({
  data: {

  },
  stBtn(ev) {
    const dt = ev.currentTarget.dataset;
    if(dt.type) {
      showToast('这是提示',dt.type,1200);
    }
    if(dt.type === 'load') {
      setTimeout(() => {
        console.log('5秒后手动隐藏');
        wx.hideLoading({
          complete: (res) => {},
        });
      }, 5000);
    }
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})

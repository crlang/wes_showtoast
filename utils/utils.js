/**
 * toast 消息提示封装
 * @param {String} title 提示内容
 * @param {String} [type='none'] 提示图标，默认none，可选[none:无,error:错误,success:成功,warning:警告,question:疑问,loading:加载,load:加载动作]图标
 * @param {Number} [duration = 1200] 默认1200，消息提示框关闭时间
 */
export function showToast(title, type = 'none', duration = 1200, mask = true) {
  if (typeof title !== 'string') {
    console.error('Toast Err: 内容不为字符串');
    return false;
  }

  if(type === 'load') {
    wx.showLoading({
      title,
      mask,
      success: function () { },
      fail: function () { },
      complete: function () { }
    })
  }else {
    let image = '',
      icon = 'none';
    if (type !== 'none') {
      icon = type;
      if (type !== 'loading') {
        image = '/images/icon_tip-'+type+'.png';
      }
    }
    wx.showToast({
      title,
      icon,
      image,
      duration,
      mask,
      success: function () { },
      fail: function () { },
      complete: function () { }
    });   
  }
}
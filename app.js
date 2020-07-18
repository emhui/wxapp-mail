//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    new_list: [
      {
        id: 0,
        img: '/image/s5.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '100g',
        type: '手机数码'
      },
      {
        id: 1,
        img: '/image/s4.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '半斤',
        type: '生鲜果蔬'
      },
      {
        id: 90,
        img: '/image/s5.png',
        price: 0.01,
        name: "小白菜",
        text: "小白菜",
        weight: '八两',
        type: '生鲜果蔬'
      },
      {
        id: 80,
        img: '/image/s6.png',
        price: 0.01,
        name: "老干妈",
        text: "老干妈",
        weight: '100g',
        type: '生鲜果蔬'
      },
      {
        id: 70,
        img: '/image/s5.png',
        price: 0.01,
        name: "韭菜",
        text: "韭菜",
        weight: '100g',
        type: '家用电器'
      },
      {
        id: 60,
        img: '/image/s4.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '100g',
        type: '个护清洁'
      },
      {
        id: 50,
        img: '/image/s6.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '100g',
        type: '生活美食'
      },
      {
        id: 40,
        img: '/image/s5.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '100g',
        type: '热搜推荐'
      },
      {
        id: 30,
        img: '/image/s4.png',
        price: 0.01,
        name: "芹菜",
        text: "芹菜",
        weight: '100g',
        type: '酒水饮料'
      },
      {
        id: 20,
        img: '/image/s5.png',
        price: 0.01,
        name: "胡萝卜",
        text: "胡萝卜",
        weight: '100g',
        type: '生鲜果蔬'
      },
      {
        id: 10,
        img: '/image/s6.png',
        price: 0.01,
        name: "辣椒",
        text: "辣椒",
        weight: '100g',
        type: '生鲜果蔬'
      }
    ]
  },
  saveItem: function (item) {
    wx.setStorageSync('item', item)
  },
  getItem: function () {
    return wx.getStorageSync('item')
  },
  saveToCart: function (item, num, selected = false) {
    let cart = this.getCart()
    let element
    if ((cart.length > 0) && (element = cart.find(e => e.id === item.id))) {
      element.num = num
      element.selected = selected
    } else {
      cart.push({
        id: item.id,
        item: item,
        num: num, // 购买数量
        selected: selected
      })
    }
    wx.setStorageSync('cart', cart)
  },
  getCart: function () {
    let cart = wx.getStorageSync('cart')
    if (!cart) {
      return []
    }
    return cart
  },
  saveInfo: function(name, tel, region) {
    wx.setStorageSync('info', {
      "name": name,
      "tel": tel,
      "address": region
    })
  },
  getInfo: function() {
    return wx.getStorageSync('info')
  }
})
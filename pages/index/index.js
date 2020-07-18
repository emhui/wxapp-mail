//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [{
        img: '/image/b1.jpg'
      },
      {
        img: '/image/b2.jpg'
      },
      {
        img: '/image/b3.jpg'
      }
    ]
  },
  onLoad: function () {
    this.setData({
      new_list: app.globalData.new_list,
      search: this.search.bind(this)
    })
  },
  detail: function (e) {
    var item = e.currentTarget.dataset.item
    // this.saveItem(item)
    app.saveItem(item)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  saveItem: function (item) {
    wx.setStorageSync('item', item)
  },
  search: function (value) {
    console.log(value);
    
    let result =  app.globalData.new_list.filter(e => e.name.includes(value))
    console.log(result);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result
          /* [{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }] */)
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
    app.saveItem(e.detail.item)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})
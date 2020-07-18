// pages/info/info.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['', '', ''],
    customItem: '全部',
    nameInputValue: '',
    telInputValue: ''
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value.join(''));

    this.setData({
      region: e.detail.value
    })
  },
  bindKeyInputName: function (e) {
    this.setData({
      nameInputValue: e.detail.value
    })
  },
  bindKeyInputTel: function (e) {
    this.setData({
      telInputValue: e.detail.value
    })
  },
  saveInfo: function (e) {
    app.saveInfo(this.data.nameInputValue, this.data.telInputValue, this.data.region.join(' '))
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let info = app.getInfo()
    if (info) {
      
      console.log(info.address.split(' '));
      
      this.setData({
        region: info.address.split(' '),
        nameInputValue: info.name,
        telInputValue: info.tel
      })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/login/login.js
import request from "../../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  loginSubmit: async function (e) {
    let phone = e.detail.value.phone;
    let password = e.detail.value.password;
    let result = await request('/login/cellphone', {phone: phone, password: password});
    if(result.code == 200){
      wx.showToast({
        title: '登陆成功'
      });

      //将用户信息存储到本地
      wx.setStorageSync('userInfo', JSON.stringify(result.profile));

      //跳转到个人中心
      wx.reLaunch({
        url: '/pages/personal/personal'
      });
    }else if(result.code == 400 || result.code == 502) {
      wx.showToast({
        title: '登陆失败' + result.msg
      })
    }else {
      wx.showToast({
        title: '登陆失败,请重新确认信息'
      })
    }
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
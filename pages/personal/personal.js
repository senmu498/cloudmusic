import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, //用户信息
    collectionList: [], //收藏歌单数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //用户信息
    let userInfoDate = wx.getStorageSync('userInfo');
    let userInfo = JSON.parse(userInfoDate);
    if(userInfo){
      this.setData({
        userInfo: userInfo
      })
    }

    //获取收藏歌单数据
    let collectionListData = await request('/user/playlist', {uid: userInfo.userId});
    this.setData({
      collectionList: collectionListData.playlist
    });
    
  },

  /**
  * 跳转到登录界面
  */
  toLogin(){
    wx.navigateTo({
      url: '/pages/personal/login/login',
    })
  },
  /**
  * 退出登录
  */
  logout() {
    try {
      wx.clearStorageSync();
      this.setData({
        userInfo: null,
        collectionList: null
      });
    } catch(e) {
    }
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
import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerList: [],   //轮播图数据
      recommendList: [],  //推荐歌单
      newestAlbumList: [],  //最新专辑
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      //获取轮播图数据
      let bannerListData = await request('/banner', {type: 2});
      this.setData({
          bannerList: bannerListData.banners
      });

      //获取推荐歌单数据
      let recommendListData = await request('/personalized', {limit: 8});
      this.setData({
          recommendList: recommendListData.result
      });

      //获取最新专辑数据
      let resultArr = [];
      let newestAlbumListData = await request('/album/newest', {limit: 9});
      resultArr.push({albumList: newestAlbumListData.albums.slice(0,3)});
      resultArr.push({albumList: newestAlbumListData.albums.slice(3,6)});
      resultArr.push({albumList: newestAlbumListData.albums.slice(6,9)});
      this.setData({
        newestAlbumList: resultArr
      });
  },

  /** 
   * 跳转搜索
  */
 toSearch() {
  wx.navigateTo({
    url: '/pages/index/search/search',
  })
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
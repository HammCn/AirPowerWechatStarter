import { UserEntity } from '../../model/entity/UserEntity'
import { UserService } from '../../service/UserService'

Page({
  data: {
    currentUserInfo: new UserEntity(),
  },
  onGoToProfile() {
    wx.navigateTo({
      url: '../common/profile/index',
    })
  },
  async onShow() {
    try {
      const user = await UserService.create().getMyInfo(true)
      this.setData({
        currentUserInfo: user,
      })
    } catch (e) {
      const user = new UserEntity()
      user.nickName = '游客'
      this.setData({
        currentUserInfo: user,
      })
    }
  },
  async onScanQrcode() {
    const res = await wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
    })
    console.log(res.result)
    const dialog = await wx.showModal({
      title: '扫码结果',
      content: res.result,
      confirmText: '复制结果',
    })
    if (dialog.confirm) {
      wx.setClipboardData({
        data: res.result,
      })
    }
  },
})

import { AirAlert } from '../../../airpower/feedback/AirAlert'
import { MailSendDto } from '../../../model/dto/common/MailSendDto'
import { RegisterDto } from '../../../model/dto/common/RegisterDto'
import { MailService } from '../../../service/MailService'
import { UserService } from '../../../service/UserService'

Page({
  data: {
    email: '',
    code: '',
    password: '',
  },
  onShow() {
    wx.hideHomeButton()
  },
  async onRegister() {
    const dto = RegisterDto.newInstance(this.data)
    dto.account = this.data.email
    dto.nickName = '新用户'
    await UserService.create('注册中').register(dto)
    await AirAlert.show('账号注册成功, 请妥善保管你的登录密码',"注册成功")
    wx.navigateBack()
  },
  async onSendEmailCode() {
    const dto = MailSendDto.newInstance(this.data)
    await MailService.create('发送中').sendEmailCode(dto)
    wx.showToast({
      title: '发送成功',
    })
  },
})

import { AirAlert } from '../../../airpower/feedback/AirAlert'
import { MailSendDto } from '../../../model/dto/common/MailSendDto'
import { ResetPasswordDto } from '../../../model/dto/common/ResetPasswordDto'
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
  async onResetPassword() {
    const dto = ResetPasswordDto.newInstance(this.data)
    dto.account = this.data.email
    await UserService.create('重置中').resetPassword(dto)
    await AirAlert.show('密码重置成功, 请使用新密码重新登录', '重置成功')
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

import { AirApi } from '../../../airpower/config/AirApi'
import { AirAlert } from '../../../airpower/feedback/AirAlert'
import { AirNotification } from '../../../airpower/feedback/AirNotification'
import { MailSendDto } from '../../../model/mail/MailSendDto'
import { MailService } from '../../../model/mail/MailService'
import { ResetPasswordDto } from '../../../model/user/ResetPasswordDto'
import { UserService } from '../../../model/user/UserService'

Page({
  data: {
    email: '',
    code: '',
    password: '',
  },
  onShow() {
    AirApi.hideHomeButton()
  },
  async onResetPassword() {
    const dto = ResetPasswordDto.newInstance(this.data)
    dto.account = this.data.email
    await UserService.create('重置中').resetPassword(dto)
    await AirAlert.show('重置成功', '密码重置成功, 请使用新密码重新登录')
    AirApi.navigateBack()
  },
  async onSendEmailCode() {
    const dto = MailSendDto.newInstance(this.data)
    await MailService.create('发送中').sendEmailCode(dto)
    AirNotification.success('发送成功')
  },
})

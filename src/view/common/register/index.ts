import { AirApi } from '../../../airpower/config/AirApi'
import { AirAlert } from '../../../airpower/feedback/AirAlert'
import { AirNotification } from '../../../airpower/feedback/AirNotification'
import { MailSendDto } from '../../../model/mail/MailSendDto'
import { MailService } from '../../../model/mail/MailService'
import { RegisterDto } from '../../../model/user/RegisterDto'
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
  async onRegister() {
    const dto = RegisterDto.newInstance(this.data)
    dto.account = this.data.email
    dto.nickName = '新用户'
    await UserService.create('注册中').register(dto)
    await AirAlert.show('注册成功', '账号注册成功, 请妥善保管你的登录密码')
    AirApi.navigateBack()
  },
  async onSendEmailCode() {
    const dto = MailSendDto.newInstance(this.data)
    await MailService.create('发送中').sendEmailCode(dto)
    AirNotification.success("发送成功")
  },
})

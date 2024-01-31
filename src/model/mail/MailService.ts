import { AirAbstractService } from '../../airpower/base/AirAbstractService'
import { MailSendDto } from './MailSendDto'

export class MailService extends AirAbstractService {
  baseUrl = 'mail'

  /**
   * 发送验证码
   * @param dto 数据
   */
  async sendEmailCode(dto: MailSendDto): Promise<void> {
    await this.api('send', 'mail').post(dto)
  }
}

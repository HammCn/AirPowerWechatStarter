import { AirAbstractService } from '../airpower/base/AirAbstractService'
import { AirEntity } from '../airpower/base/AirEntity'
import { MailSendDto } from '../model/dto/common/MailSendDto'

export class MailService extends AirAbstractService<AirEntity> {
  baseUrl = 'mail'

  entityClass = AirEntity

  /**
   * 发送验证码
   * @param dto 数据
   */
  async sendEmailCode(dto: MailSendDto): Promise<void> {
    await this.api('send', 'mail').post(dto)
  }
}

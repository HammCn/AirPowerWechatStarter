import { AirAbstractService } from '../airpower/base/AirAbstractService'
import { AirHttp } from '../airpower/helper/AirHttp'
import { BaseEntity } from './BaseEntity'

/**
 * # 项目接口服务基类
 */
export abstract class AbstractBaseService<E extends BaseEntity> extends AirAbstractService<E> {
  api(url: string, baseUrl?: string | undefined): AirHttp {
    const http = super.api(url, baseUrl)
    http.setHeader('version', 1000)
    return http
  }
}

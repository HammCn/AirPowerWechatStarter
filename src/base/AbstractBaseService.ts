import { AirAbstractEntityService } from '../airpower/base/AirAbstractEntityService'
import { AirHttp } from '../airpower/helper/AirHttp'
import { BaseEntity } from './BaseEntity'

/**
 * # 项目接口服务基类
 */
export abstract class AbstractBaseService<E extends BaseEntity> extends AirAbstractEntityService<E> {
  api(url: string, baseUrl?: string | undefined): AirHttp {
    const http = super.api(url, baseUrl)
    http.setHeader('version', 1000)
    return http
  }
}

import { UserEntity } from '../../entity/UserEntity'

export class RegisterDto extends UserEntity {
  code!: string
}

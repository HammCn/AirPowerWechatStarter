import { UserEntity } from '../../entity/UserEntity'

export class ResetPasswordDto extends UserEntity {
  code!: string
}

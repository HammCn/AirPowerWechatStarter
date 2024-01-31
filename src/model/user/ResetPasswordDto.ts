import { UserEntity } from '../role/UserEntity'

export class ResetPasswordDto extends UserEntity {
  code!: string
}

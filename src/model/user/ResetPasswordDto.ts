import { UserEntity } from "./UserEntity";


export class ResetPasswordDto extends UserEntity {
  code!: string
}

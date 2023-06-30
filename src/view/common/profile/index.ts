import { WechatEvent } from '../../../../typings/types'
import { AirConfig } from '../../../airpower/config/AirConfig'
import { AirFile } from '../../../airpower/helper/AirFile'
import { AirHttp } from '../../../airpower/helper/AirHttp'
import { UserEntity } from '../../../model/entity/UserEntity'
import { UserSexDictionary } from '../../../model/dictionary/UserSexDictionary'
import { UserService } from '../../../service/UserService'

Page({
  data: {
    nickName: '',
    bio: '',
    head: '',
    sex: 0,
    sexStr: '女',
    headUrl: '',
  },
  async onShow() {
    const user = await UserService.create().getMyInfo()
    this.setData({
      nickName: user.nickName,
      bio: user.bio,
      head: user.head,
      sex: user.sex || 0,
      sexStr: UserSexDictionary.getLabel(user.sex || 0),
      headUrl: AirFile.getStaticFileUrl(user.head),
    })
  },
  async onAvatarChanged(evt: WechatEvent) {
    const file = await new AirHttp().upload({
      name: AirConfig.uploadFileName,
      url: AirConfig.apiUrl + AirConfig.uploadUrl,
      filePath: evt.detail.avatarUrl,
    })
    this.setData({
      head: file.url,
      headUrl: AirFile.getStaticFileUrl(file.url),
    })
  },
  async onSexChange() {
    const res = await wx.showActionSheet({
      alertText: '选择性别',
      itemList: UserSexDictionary.map((item) => item.label),
    })
    this.setData({
      sex: UserSexDictionary[res.tapIndex].key as number,
      sexStr: UserSexDictionary[res.tapIndex].label,
    })
  },
  async onModify() {
    const user = UserEntity.fromJson(this.data)
    console.log(user)
    await UserService.create('保存中').updateMyInfo(user)
    wx.navigateBack()
  },
})

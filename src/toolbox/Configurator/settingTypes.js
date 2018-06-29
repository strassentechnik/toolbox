import imageStatic from 'assets/images/setting_static.svg'
import imageSettling from 'assets/images/setting_settling.svg'
import imageTipping from 'assets/images/setting_tipping.svg'
import imageFast from 'assets/images/setting_fast.svg'

const settingTypes = {
  static: {
    value: 'static',
    label: 'Festaufbau',
    image: imageStatic,
  },
  settling: {
    value: 'settling',
    label: 'Abroller',
    image: imageSettling,
  },
  tipping: {
    value: 'tipping',
    label: 'Kipper',
    image: imageTipping,
  },
  fast: {
    value: 'fast',
    label: 'Schnellwechsel-System',
    image: imageFast,
  },
}

export default settingTypes

import image2axle from 'assets/images/type_2axle.svg'
import image3axle from 'assets/images/type_3axle.svg'
import image4axle from 'assets/images/type_4axle.svg'
import imageUnimog from 'assets/images/type_unimog.svg'
import imageTrailer from 'assets/images/type_trailer.svg'

const vehicleTypes = {
  axle2: {
    value: '2axle',
    label: '2-Achser',
    image: image2axle,
  },
  axle3: {
    value: '3axle',
    label: '3-Achser',
    image: image3axle,
  },
  axle4: {
    value: '4axle',
    label: '4-Achser',
    image: image4axle,
  },
  unimog: {
    value: 'unimog',
    label: 'Unimog',
    image: imageUnimog,
  },
  trailer: {
    value: 'trailer',
    label: 'Anhänger',
    image: imageTrailer,
  },
}

export default vehicleTypes

import { IMAGE_SELECTED, IMAGES_LOADED } from '../actions'

const initialState = {
  images: [
    'https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg',
    'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg',
    'https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg',
    'https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg',
    'https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg'
  ]
}

initialState.selectedImage = initialState.images[0]

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case IMAGES_LOADED:
      return {...state, images: action.images}
    case IMAGE_SELECTED:
      return {...state, selectedImage: action.image}
    default:
      return state
  }
}

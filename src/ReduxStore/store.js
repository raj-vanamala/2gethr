import { createStore} from 'redux'

import imageInfoReducer from '../Reducers/ImageInfoReducer'

// const reducers = combineReducers({

//     imagesInfoReducer

// })

export const store = createStore(imageInfoReducer);
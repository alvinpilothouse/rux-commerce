/* eslint-disable indent */
import { SET_CURRENT_VARIANT } from './mutation-types'

export default {
    [SET_CURRENT_VARIANT](state, data) {
        state.selectedVariant = state.selectedProduct.variants[data]
    },
}

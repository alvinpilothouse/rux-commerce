/* import EventService from "@/services/auth/Register.js"; */
import * as types from './mutation-types'

export const setCurrentVariant = ({ commit }, payload) => {
    commit(types.SET_CURRENT_VARIANT, payload)
}
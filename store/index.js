/* import createPersistedState from 'vuex-persistedstate' */

// modules
/* import cart from './modules/cart' */
import product from './modules/product'

export default {
    modules: {
        product: {
            namespaced: true,
            modules: {
                product,
                /* cart */
            }
        },
    }
    /* plugins: [dataState] */
}

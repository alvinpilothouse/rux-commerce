import Vue from 'vue'
import _ from 'lodash'

Vue.filter('startCase', (str) => {
    if (!str) return ''
    str = _.startCase(str.toString())
    return str
})
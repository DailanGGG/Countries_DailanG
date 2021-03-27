import Vue from "vue"
import Router from "vue-router"
import Countries from "./components/Countries"
import CountryDetail from "./components/CountryDetail"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // muestra los countries
        {
            path: '/',
            name: 'Countries',
            component: Countries
        },
        {
            path: '/:countrie/details',
            name: 'CountryDetail',
            component: CountryDetail
        }
    ]
})
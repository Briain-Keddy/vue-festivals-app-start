import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        loggedIn: false
    },
    getters:{},
    mutaations:{
        SET_LOGGED_IN_STATUS(state, loggedIn){
            state.loggedIn = loggedIn
        }
    },
    actions:{
        login(context, credenials){
            axios
           .post('https://festivals-api.herokuapp.com/api/users/login',{
             email: credenials.email,
             password: credenials.password
           })
           .then(response =>{
             //console.log(response.data.token)
             context.commit('SET_LOGGED_IN_STATUS', true)
             localStorage.setItem('token', response.data.token)
           })
           .catch(error => {
             console.log(error)
             console.log(error.response)
           })
        },
        logout(context){
            localStorage.removeItem('token')
            context.commit('SET_LOGGED_IN_STATUS', false)
        }
    }
})
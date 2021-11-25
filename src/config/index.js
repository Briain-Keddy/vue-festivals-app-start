import axios from 'axios'

export default axios.create({
    baseURL:"http://festivals-api.herokuapp.com/api"
})
<template>
  <b-col>
    <h2>Welcome to the Cloud Festivals Website</h2>
    <input type="email" v-model="form.email" /> <br>
    <input type="password" v-model="form.password" /><br>
    <button @click="login()">Submit</button>
  </b-col>
</template>

<script>
import axios from 'axios';
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data(){
    return{
      form:{
        email: "",
        password: ""
      }
    }
  },
  methods:{
    login(){
      axios
           .post('https://festivals-api.herokuapp.com/api/users/login',{
             email: this.form.email,
             password: this.form.password
           })
           .then(response =>{
             console.log(response.data)
           })
           .catch(error => {
             console.log(error)
             console.log(error.response)
           })
    }
  }
};
</script>

<template>
  <b-col>
    <h2>Welcome to the Cloud Festivals Website</h2>
    <div v-if="!loggedIn">
      <input type="email" v-model="form.email" /> <br>
      <input type="password" v-model="form.password" /><br>
      <button @click="login()">Submit</button>
    </div>
    <p v-else>
      You are log in
    </p>
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
  props:{
    loggedIn: Boolean
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
             console.log(response.data.token)
             this.$emit('login')
           })
           .catch(error => {
             console.log(error)
             console.log(error.response)
           })
    }
  }
};
</script>

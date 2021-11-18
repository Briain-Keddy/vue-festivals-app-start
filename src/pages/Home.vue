<template>
  <b-col>
    <h2>Welcome to the Cloud Festivals Website</h2>
    <div v-if="!$store.state.loggedIn">
      <input type="email" v-model="form.email" /> <br>
      <input type="password" v-model="form.password" /><br>
      <button @click="login(form)">Submit</button>
    </div>
    <p v-else>
      You are logged in
    </p>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Home",
  components: {
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
    ...mapActions(['login'])
  }
};
</script>

<template>
    <b-col>
        <h2>Edit Festival</h2>
        <b-form-group
            label="Title"
            label-for="title-input"
        >
        <b-form-input
          id="title-input"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Description"
            label-for="desc-input"
        >
        <b-form-textarea
            id="desc-input"
            v-model="form.description"
            placeholder="Enter description..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        </b-form-group>
        <b-form-group
            label="City"
            label-for="city-input"
        >
        <b-form-input
          id="city-input"
          v-model="form.city"
          type="text"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Start Date"
            label-for="start-input"
        >
        <b-form-datepicker 
          id="start-input"
          v-model="form.start_date"
          required
        ></b-form-datepicker >
        </b-form-group>
        <b-form-group
            label="End Date"
            label-for="end-input"
        >
        <b-form-datepicker 
          id="end-input"
          v-model="form.end_date"
          required
        ></b-form-datepicker >
        </b-form-group>
        <b-button @click="submitForm()">Submit</b-button>
        <b-button @click="cancel()">Cancel</b-button>
    </b-col>
</template>

<script>
import axios from '@/config'

export default {
    name: "FestivalsCreate",
    data(){
        return{
            form: {
                title: "",
                description: "",
                city: "",
                start_date: "",
                end_date: ""
            }
        }
    },
    methods: {
        submitForm(){
            let token = localStorage.getItem('token')

            axios.put(`/festivals/${this.$route.params.id}`, this.form, {
                title: this.form.title,
                description: this.form.description,
                city: this.form.city,
                start_date: this.form.start_date,
                end_date: this.form.end_date,
            }, {
                    headers: {
                       "Authorization": `Bearer ${token}` 
                   }
                   })
                 .then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "festivals_show",
                         params:{
                             id: this.$route.params.id
                         }
                     })
                 })
                 .catch(err => {
                    console.log(err)
                    console.log(err.response.data.errors)
                })
        },
        cancel(){
            this.$router.go(-1)
        }
    }
};
</script>

<style>
</style>
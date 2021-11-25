<template>
  <b-col>
    <h2>Festivals</h2>

    <b-button 
    :to="{
        name: 'festivals_create'
    }"
    variant="primary"
    class="float-right"
    >
        Create
    </b-button>

    <b-table responsive head-variant="dark" striped hover :items="festivals" :fields="headings">
        <template #cell(title)="data">
            <router-link :to="{name:'festivals_show', params: { id: data.item.id }}">{{ data.value }}</router-link>
        </template>
        <template #cell(start_date)="data">
            {{ new Date(data.value).toLocalString() }}
        </template>
        <template #cell(end_date)="data">
            {{ new Date(data.value).toLocalString() }}
        </template>
    </b-table>
    <p 
       v-for="festival in festivals"
       :key="festival._id"
    >
        <router-link :to="{name:'festivals_show', params: { id: festival._id }}">{{ festival.title }}</router-link>
    </p>
  </b-col>
</template>

<script>
import axios from '@/config'

export default {
  name: "FestivalsIndex",
  components: {},
  data(){
      return{
          headings: [
              {
                  key: 'title',
                  sortable: true
              }, 
              'descripation', 
              'city', 
              'start_date', 
              'end_date'
              ],
          festivals: []
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData(){
          axios.get("/festivals")
               .then(response => {
                   console.log(response.data)
                   this.festivals = response.data
               })
               .catch(error => console.log(error))
      }
  }
};
</script>

<style scoped>
.btn{
    margin-bottom: 10px;
}
</style>
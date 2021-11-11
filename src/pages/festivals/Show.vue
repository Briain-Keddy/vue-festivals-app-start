<template>
  <b-col>
    <h2>Show Festival Page</h2>
    <p>
        {{ festival.title }}
    </p>
    <p>
        {{ festival.description }}
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FestivalsShow",
  components: {},
  data(){
      return{
          festival: {}
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData(){
          axios
               .get(`http://festivals-api.herokuapp.com/api/festivals/${this.$route.params.id}`,
               {
                   headers: {
                       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZlc3RpdmFscy5pZSIsIl9pZCI6IjYxODAzYTMxNGM2OTczOGEyMGQxOTMyMyIsImlhdCI6MTYzNjYzMDY3Nn0.p5J7oDrun_9syiQhtj9jDzG6ALb78lh8PECP60IqOgA"
                   }
               })
               .then(response => {
                   console.log(response.data)
                   this.festival = response.data
               })
               .catch(error => console.log(error))
      }
  }
};
</script>
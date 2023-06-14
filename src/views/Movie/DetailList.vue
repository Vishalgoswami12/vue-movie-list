<template>

<div class="container center" > 
          <h2>{{ data?.name }}</h2>
          <img :src=data?.image?.medium />
         
          <p>Summary -  {{data?.summary}}</p>
          <!-- <p v-html="formatted"></p> -->
          <h3>Genres-{{ data?.genres?.join() }}</h3>
 </div> 
</template>


<script setup>

import { ref,onMounted } from "vue";
import { useRoute } from "vue-router";
let id = useRoute().params.id

let data = ref([])

onMounted(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((res) => res.json())
    .then((res) => data.value = res )

})

</script>
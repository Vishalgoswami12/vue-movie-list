<template>
        <div class="container center">
            <div class="crad">
                <div class="card-header">
                    <h4>Movie List</h4>
                </div>
                <div class="grid" >
                    <div v-for="(ele,index) in data" :key="index">
                        <h2>{{ ele.show.name }}</h2>
                        <img  :src= ele?.show?.image?.medium alt="image"  />    
                        <p>Language - {{ ele.show.language }}</p>
                        <p>Genres - {{ ele.show.genres.join() }}</p>
                        <h4>Site - {{ ele.show.officialSite }}</h4>
                        <RouterLink :to="{path:`/movie/` + ele.show.id + `/detail`}" class="btn btn-success" >
                          Detail
                        </RouterLink>
                </div>
                </div>

            </div>

        </div>

</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref([]);

onMounted(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then((res) => res.json())
    .then((res) => {
        data.value = res;
    })
}
);
console.log(data)




</script>



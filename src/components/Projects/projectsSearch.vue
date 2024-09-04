<script setup>
    import { ref } from 'vue';

const categories = ref([
  'TI e Programação',
  'Web Design',
  'Design',
  'Administração',
  'Tradução',
  'Minha área favorita',
  'Maiores avaliações'
]);
</script>
<template>
    <div class="search">
            <div class="inputSearch">
                <div class="form-group inputBox">
                    <input type="text" class="form-control" id="search" aria-describedby="searchHelp" placeholder=" ">
                    <label class="searchlabelInput" for="search">Pesquisar</label>
                </div>
            </div>
            <div class="categories">
                <div class="category" v-for="(category, index) in categories" :key="index">
                    <label>
                        <input type="checkbox">
                            {{ category }}
                    </label>
                </div>
            </div>
    </div>
</template>
<style scoped>
    @import '@/assets/Sass/project/_project.scss';
</style>

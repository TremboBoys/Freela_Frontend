<script setup>
import projectsSearch from '../../components/Projects/projectsSearch.vue'
import projectsSelect from '../../components/Projects/projectsSelect.vue'

</script>

<template>
    <div class="project">
        <div class="main-project">
            <projectsSearch />
            <div class="selectProject">
                <projectsSelect />
            </div>
        </div>
    </div>

        
        
</template>

<style scoped>
@import '../../assets/Sass/project/_project.scss';

</style>
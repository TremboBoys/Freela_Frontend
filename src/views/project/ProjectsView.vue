<script setup>
import projectsSearch from '../../components/projects/ProjectsSearch.vue'
import projectsSelect from '../../components/projects/ProjectsSelect.vue'

</script>

<template>
    <div class="project">
        <div class="main-project">
            <div class="main-search">
                <div class="searchProject">
                    <projectsSearch />
                </div>
            </div>
            
            <div class="main-select">
                <div class="selectProject">
                    <projectsSelect />   
                </div>
                <div class="selectProject">
                    <projectsSelect />   
                </div>
            </div>
        </div>
    </div>

        
        
</template>

<style scoped>
@import '../../assets/Sass/project/_project.scss';

.main-select {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
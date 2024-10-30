<script setup>
import { useWarningStore } from '@/stores/warning/warning';

const useWarning = useWarningStore();
</script>

<template>
    <div class="container-warning">
        <div class="warning" :style="(useWarning.state.success == true) ? 'background-color: green;' : (useWarning.state.failure == true) ? 'background-color: red;' : 'background-color: orange;' ">
            <div class="container-info">
                <div class="container-check" :style="(useWarning.state.success == true) ? 'border-right: 2px solid rgb(5, 100, 5);' : (useWarning.state.failure == true) ? 'border-right: 2px solid rgb(197, 16, 16);' : 'border-right: 2px solid rgb(197, 16, 16);' ">
                    <svg xmlns="http://www.w3.org/2000/svg" v-if="useWarning.state.success === true" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" v-else-if="useWarning.state.failure === true" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" v-else-if="useWarning.state.warning === true" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
                <div class="container-text">
                    <p>{{ useWarning.state.message }}</p>
                </div>
            </div>
            <div class="container-progress"></div>
        </div>
    </div>
</template>


<style scoped>
@import '@/assets/Sass/global/_quickWarnings.scss';
</style>
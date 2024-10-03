<script setup>
import { reactive } from 'vue';
import TitleFreela from '@/components/report/TitleFreela.vue';
import TitleProject from '@/components/report/TitleProject.vue';
import DescriptionFreela from '@/components/report/DescriptionFreela.vue';
import ButtonProject from '@/components/report/ButtonProject.vue';
const data = reactive({
    titleFreela: 'Relatório',
    titleProject: 'Título do projeto',
});

</script>
<template>
    <div class="content">
        <TitleFreela class="title" :title="data.titleFreela" />
        <TitleProject :title="data.titleProject" />
        <DescriptionFreela label="Descrição do Relatório" v-model="descricao" placeholder="Digite a descrição" />
        <ButtonProject @click="enviar" />
    </div>
</template>
<style scoped>
@import '@/assets/Sass/report/_reportFreela.scss';
.content {
    color: #000 !important;
}
</style>
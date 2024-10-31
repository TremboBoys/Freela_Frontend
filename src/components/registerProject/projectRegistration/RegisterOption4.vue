<script setup>

</script>
<template>
    <div class="text">
        <p>Suporte Administrativo</p>
    </div>
    <button class="option">
        <p>Assistente virtual</p>
    </button>
    <button class="option">
        <p>Atenção ao cliente</p>
    </button>
    <button class="option">
        <p>Data entry</p>
    </button>
    <button class="option">
        <p>Investigação de mercado</p>
    </button>
    <button class="option">
        <p>Televendas</p>
    </button>
    <button class="option">
        <p>Inteligência Artificial</p>
    </button>
    <button class="option">
        <p>Outros</p>
    </button>
    <RouterLink to="/register-project/description" class="router-link">
        <button class="continue">
            <p>Continuar</p>
        </button>
    </RouterLink>
</template>
<style scoped>
@import '@/assets/Sass/project-registration/_project-registration.scss';
</style>
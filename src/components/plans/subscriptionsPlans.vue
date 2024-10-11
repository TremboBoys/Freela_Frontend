<script setup>
    import planFree from './planFree.vue';
    import planMonthly from './planMonthly.vue';
    import planYear from './planYear.vue';
</script>
<template>
    <div class="container">
        <planFree />
        <planMonthly />
        <planYear />
    </div>
</template>
<style scoped lang="scss">   
@import '../../assets/Sass/plans/_subscriptionPlans.scss';
</style>
<script setup>
</script>
<template>
    <div class="main-container">
        <div class="design">
            <input type="text" class="input">
        </div>
        <div class="resgister">
            <h1>Cadastre seu projeto</h1>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
}

.design {
    margin: 67px 124px 40px 80px;
    width: 308px;
    height: 825px;
    flex-shrink: 0;
    border-radius: 11px;
    border: 1px solid #D9D9D9;
    background: #FFF;
}

.input {
    margin: 46px 16px 32px 16px;
    width: 276px;
    height: 50px;
    flex-shrink: 0;
    fill: #FFF;
    stroke-width: 1px;
    stroke: #D9D9D9;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    padding: 16px;
    color: #000;
    -webkit-text-stroke-width: 5;
    -webkit-text-stroke-color: #FFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
}
</style>
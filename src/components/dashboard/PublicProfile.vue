<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
    <div class="container">
        <div class="public">
            <p>Perfil Público:</p>
            <div class="switch" :class="{ 'active': isActive }" @click="toggle">
                <div class="slider"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.switch {
  width: 50px;
  height: 25px;
  background-color: #ccc;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.switch.active {
  background-color: #007bff;
}

.slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.3s ease;
}

.switch.active .slider {
  left: 26px;
}
</style>
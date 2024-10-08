<script setup>
import StarRating from './StarRating.vue';
import { ref } from 'vue';

const props = defineProps({
  label: String
});

const selectedRating = ref(null);
</script>

<template>
  <tr>
    <td class="left">{{ label }}</td>
    <td class="star-cell"><StarRating :selected="selectedRating" rating="1" /></td>
    <td class="star-cell"><StarRating :selected="selectedRating" rating="2" /></td>
    <td class="star-cell"><StarRating :selected="selectedRating" rating="3" /></td>
    <td class="star-cell"><StarRating :selected="selectedRating" rating="4" /></td>
    <td class="star-cell"><StarRating :selected="selectedRating" rating="5" /></td>
  </tr>
</template>

<style scoped>
td {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 8px;
}
</style>

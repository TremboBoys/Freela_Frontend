<template>
  <div class="chart-container">
    <h2>Receitas Mensais</h2>
    <canvas ref="chartCanvas"></canvas>
    <div v-if="selectedMonth" class="month-details">
      <h3>Detalhes dos Meses {{ selectedMonthIndex + 1 }}</h3>
      <p>Receita: R$ {{ selectedMonth }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const chartCanvas = ref(null);
const chartInstance = ref(null);
const selectedMonth = ref(null);
const selectedMonthIndex = ref(null);
const monthData = [1500, 2300, 1750, 2900, 3200, 1800, 2500, 2000, 2100, 3000, 2800, 3500];
const setupChart = () => {
  chartInstance.value = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',],
      datasets: [
        {
          label: 'Receita (R$)',
          data: monthData,
          backgroundColor: '#0d4247',
          borderColor: '#00695c',
          borderWidth: 1,
          hoverBackgroundColor: '#042f33',
        },
      ],
    },
    options: {
      responsive: true,
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          selectedMonth.value = monthData[index];
          selectedMonthIndex.value = index;
        }
      },
    },
  });
};

onMounted(() => {
  setupChart();
});
</script>

<style scoped>
@import '@/assets/Sass/finances/_graphFinance.scss';
</style>
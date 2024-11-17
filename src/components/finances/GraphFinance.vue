<template>
    <div class="chart-container">
      <h2>Receitas Semanais</h2>
      <canvas ref="chartCanvas"></canvas>
      <div v-if="selectedWeek" class="week-details">
        <h3>Detalhes da Semana {{ selectedWeekIndex + 1 }}</h3>
        <p>Receita: R$ {{ selectedWeek }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  const chartCanvas = ref(null);
  const chartInstance = ref(null);
  const selectedWeek = ref(null);
  const selectedWeekIndex = ref(null);
  
  // Dados simulados de receitas por semana
  const weeklyData = [1500, 2300, 1750, 2900, 3200, 1800, 2500];
  
  const setupChart = () => {
    chartInstance.value = new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'],
        datasets: [
          {
            label: 'Receita (R$)',
            data: weeklyData,
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
            selectedWeek.value = weeklyData[index];
            selectedWeekIndex.value = index;
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
  .chart-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .week-details {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
  }
  </style>
  
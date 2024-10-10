<script setup>
import AcessTable from './AcessTable.vue';
</script>

<template>
  <div class="authMethods-container">
    <h1>Métodos de autenticação</h1>
    <div class="MethodText">
      <p>
        Proteja o acesso da sua conta na Workana Cada vez que iniciar sessão na Workana
        solicitaremos sua senha habitual e adicionaremos um código como etapa extra de segurança.
        Mais informações em nossa Centro de ajuda
      </p>
      <ul>
        <li>Lembre-se que quando a autenticação em dois passos está habilitada, não é possível usar o Workana Time Report nem o App Mobile.</li>
        <li>O código de autenticação pode ser encontrado em um app no seu celular.</li>
        <li>Mesmo que alguém descubra sua senha, não será possível acessar sua conta sem o código.</li>
      </ul>
    </div>
    <AcessTable/>
  </div>
</template>

<style scoped>
@import "../../../assets/Sass/configProfile/_SecArea.scss";
</style>

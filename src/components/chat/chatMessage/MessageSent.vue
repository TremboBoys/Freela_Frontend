<script setup>
import { defineProps } from 'vue';

// Recebe as mensagens enviadas como props
const props = defineProps({
  messages: Array
});

// Função para determinar se o avatar deve ser exibido
function shouldShowAvatar(index) {
  // Verifica se é a primeira mensagem ou se o texto é diferente da mensagem anterior
  return index === 0 || (props.messages[index].text !== props.messages[index - 1].text);
}
</script>

<template>
  <div class="container-sent">
    <div class="messageSent" v-for="(message, index) in messages" :key="index">
      <div class="message">
        <!-- Condição para mostrar o avatar apenas na primeira mensagem do grupo -->
        <div class="messages">
          <div class="message-text" v-if="message.text">
            <p class="text">{{ message.text }}</p>
          </div>
          <div class="message-text" v-if="message.file">
            <p class="text">File: {{ message.file }}</p>
          </div>
        </div>
        <div class="avatar" v-if="shouldShowAvatar(index)">
          <img src="@/assets/images/dashboard/luiz.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import '@/assets/Sass/chat/chatMessage/_messageSent.scss';
</style>

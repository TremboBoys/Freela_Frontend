<script setup></script>
<template>
      <button class="freelancer">
          <p>Sou Freelancer</p>
        </button>
</template>
<style scoped lang="scss">
button{
    background-color: #F2F2F2;
    border: 2px solid #0b5ebd;
    border-radius: 12px;
    width: 18vw;
    height: 7vh;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 1.2rem;
        font-weight: 500;   
    }
    transition: background-color 0.3s ease, transform 0.4s ease;
}
button:hover {
    background-color: #D9D9D9;
    transform: scale(1.1);
    transition: background-color 0.3s ease, transform 0.4s ease;
}
button:active {
  background-color: #BFBFBF;
  transform: scale(1);
  transition: background-color 0.3s ease, transform 0.4s ease;
}
</style>
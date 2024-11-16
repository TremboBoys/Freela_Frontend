<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="container">
        <div class="left">
            <img src="@/assets/images/dashboard/user.png" class="avatar" alt="">
            <div class="container-name-user">
                <p class="name">{{ props.user.user.name }}</p>
                <p class="username">@{{ props.user.user.username }}</p>
                <!-- <p class="isOnline">Visto pela última vez as 17:54h</p> -->
            </div>
        </div>
        <div class="right">
            <div class="icons">
                <img src="@/assets/images/chat/search.png" class="icon" alt="">
                <img src="@/assets/images/chat/notification.png" class="icon" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/Sass/chat/chatMessage/_headerContact.scss';
</style>
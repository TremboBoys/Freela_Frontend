<script setup>
import { useSearchChatStore } from "@/stores/chat/searchChat.js";
import { ref, watch } from "vue";
import FoundContacts from "@/components/chat/contacts/FoundContacts.vue";

const useSearchChat = useSearchChatStore();
const showFoundContacts = ref(false);

const containerSearchRef = ref(null);

function removeBorderRadius() {
    containerSearchRef.value.classList.remove("onBorderRadius");
    containerSearchRef.value.classList.add("offBorderRadius");
};
function addBorderRadius() {
    containerSearchRef.value.classList.remove("offBorderRadius");
    containerSearchRef.value.classList.add("onBorderRadius");
};

watch(() => [useSearchChat.inputSearch], () => {
    if (useSearchChat.inputSearch === '') {
        showFoundContacts.value = false;
    } else {
        showFoundContacts.value = true;
    }
})
</script>

<template>
    <div ref="containerSearchRef" class="container onBorderRadius">
            <div class="menu-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="container-input">
                <input type="text" @focus="removeBorderRadius" @blur="addBorderRadius" v-model="useSearchChat.inputSearch" value="" placeholder="Search" />
            </div>
            <div class="search-icon">
                <i class="fa fa-search"></i>
            </div>
    </div>
    <div v-show="showFoundContacts" class="container-dropdown-search">
        <FoundContacts />
    </div>
</template>
<style scoped>
@import '@/assets/Sass/chat/contacts/_buttonSearch.scss';
</style>
<script setup>
import ReceivedProposal from '../../components/receivedProposal/ReceivedProposal.vue'
import ReceivedSearch from '../../components/receivedProposal/ReceivedSearch.vue'
</script>

<template>
    <div class="project">
        <h1 class="title">Propostas recebidas</h1>
        <div class="main-project">
            <div class="main-search">
                <div class="searchProject">
                    <ReceivedSearch />
                </div>
            </div>
            
            <div class="main-select">
                <div class="selectProject">
                    <ReceivedProposal />   
                </div>
                <div class="selectProject">
                    <ReceivedProposal />   
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../assets/Sass/project/_project.scss';

.main-select {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.title {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-left: 27vw;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
}
</style>
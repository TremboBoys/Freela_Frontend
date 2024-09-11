<template>
    <main>
        <div class="container">
            <div class="left">
                <img src="@/assets/images/Home/work-home.jpg" class="img-work" alt="Home">
            </div>
            <div class="right">
                <div class="content">
                    <h1>Encontre os melhores profissionais ou ofereça seu talento como freelancer</h1>
                    <p>Sucesso começa com uma boa parceria</p>
                    <router-link class="router" to="/sign-up">
                        <button class="button">Registre-se</button>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import "@/assets/Sass/Home/_mainHome.scss";
</style>
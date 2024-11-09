<script setup>
</script>

<template>
    <div class="container">
        <h1 class="cadastro">Cadastre seu projeto</h1>
        <div class="main-option">
            <p>Quais demandas o freelancer irá precisar desenvolver?</p>
            <div class="options">
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Web Design
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Design mobile
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Gerente
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Outro
                    </label>
                </div>
            </div>
            <p>Qual o nível de desenvolvimento você se encontra?</p>
            <div class="options">
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Você tem o design
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Você tem uma ideia
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Não tenho nada
                    </label>
                </div>
            </div>
            <p>Você precisa de uma integração com API?</p>
            <div class="options">
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Midias Sociais
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        API de pagamento
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Outras APIs
                    </label>
                </div>
            </div>
            <p>Você precisa de um recurso especial?</p>
            <div class="options">
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Sim, bibliotecas
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Talvez
                    </label>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox" />
                        Não
                    </label>
                </div>
            </div>
            <div class="footer-types">
                <div class="footer-barra-description-verde">

                </div>
                <div class="footer-barra-description-verde2">

                </div>
                <div class="footer-barra-description">

                </div>
                <div class="footer-barra-description-final">
                    
                </div>
            </div>
        </div>
        <RouterLink to="/register-project/size" class="router-link">
                <button>Continuar</button>
            </RouterLink>
    </div>
</template>

<style scoped>
@import '@/assets/Sass/project-registration/_types-project-registration.scss';
</style>